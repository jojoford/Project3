const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);

                return user;
            }

            throw new AuthenticationError('Not logged in!');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        }
    }
}