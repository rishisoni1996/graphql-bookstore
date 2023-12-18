const express = require('express');
const CryptoJS = require('crypto-js');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');
const { books, authors } = require('./mockData');
const app = express();
const PORT = 5000;

// author type
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents an author and their books',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorId === author.id);
            }
        }
    })
});

// book type
const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book and it\'s author',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorId);
            }
        },
    })
});

// queries
const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'A root query!',
    fields: () => ({
        book: {
            type: BookType,
            description: 'Retrieve a book',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => books.find(book => book.id === args.id)
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of all books',
            resolve: () => books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of all authors',
            resolve: () => authors
        },
        author: {
            type: AuthorType,
            description: 'Retrieve an author',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => authors.find(author => author.id === args.id)
        }
    })
});

// mutations
const RootMutationType = new GraphQLObjectType({
    name: 'RootMutation',
    description: 'A root mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a book!',
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve: (parent, args) => {
                const book = {
                    id: books.length + 1,
                    title: args.title,
                    authorId: args.authorId
                }
                books.push(book);
                return book;
            }
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add an author!',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const author = {
                    id: authors.length + 1,
                    name: args.name,
                }
                authors.push(author);
                return author;
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
}))

app.listen(PORT, () => {
    console.log(`🚀 ~ server is running on http://localhost:${PORT}`);
});
