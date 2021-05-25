const { gql } = require('apollo-server-express');

const typeDefs = gql`
//type Order (photo) here?
type Order {
    _id: ID
    purchaseData: String
    photos: [Photo]
}

type Photo {
    _id: ID
    name: String
    description: String
    image: String
    price: Number
    quantity: Number
}

type User {
    _id: ID
    firstName: String,
    lastName: String
    email: String
    orders: [Order]
}

type Checkout {
    session: ID
}

type Auth {
    token: ID
    user: User
}

type Query {
    user: User
    orders: [Order]
    photos(order: ID, name: String): [Photo]
    photo(_id: ID!): Photo
    order(_id: ID!): Order
    checkout(photos: [ID]!): Checkout
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addOrder(photos: [ID]!): Order
    updatePhoto(_id: ID!, quantity: Int!): Product

}
`;

module.exports = typeDefs;