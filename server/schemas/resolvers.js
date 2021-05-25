const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
        // add categories query here?

        // photos query here?


        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);

                return user;
            }

            throw new AuthenticationError('Not logged in!');
        },

        // order(photo) query here?

        // checkout query here?


    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        // addPhoto (order) mutation here?


        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true  });
            }

            throw new AuthenticationError('Not logged in');
        },

        // updateProduct here?
       
       
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