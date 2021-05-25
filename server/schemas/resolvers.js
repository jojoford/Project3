const { AuthenticationError } = require('apollo-server-express');
const { User, Order, Photo, Photographer } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
      // photos(products) query here?
        photos: async (parent, {user, name }) => {
            const params = {};
            if (user) {
                params.user = user;
            }

            return await Photo.find(params).populate('user');
        },

        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.photos',
                    populate: 'photographer'
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in!');
        },

        // order(photo) query here?
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.photos',
                    populate: 'photographer'
                  });

                  return user.orders.id(_id);
            }

            throw new AuthenticationError('Not logged in!');  
        },
        // checkout query here?
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ photos: args.photos });
            const line_items = [];

            const { photos } = await order.populate('photos').execPopulate();

            for (let i = 0; i < photos.length; i++) {
                const photo = await stripe.photos.create({
                  name: photos[i].name,
                  description: photos[i].description,
                  images: [`${url}/images/${photos[i].image}`]
                });
        
                const price = await stripe.prices.create({
                  product: product.id,
                  unit_amount: photos[i].price * 100,
                  currency: 'usd',
                });
        
                line_items.push({
                  price: price.id,
                  quantity: 1
                });
              }

              const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
              });

              return { session: session.id };
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        //  (order) mutation here?
        addOrder: async (parent, { photos }, context) => {
            console.log(context);
            if (context.user) {
                const order = new Order({ photos });
        
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
        
                return order;
              }

              throw new AuthenticationError('Not logged in');
        },

        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true  });
            }

            throw new AuthenticationError('Not logged in');
        },
        // updatePhoto here?
        updatePhoto: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Photo.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
          },
       
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;