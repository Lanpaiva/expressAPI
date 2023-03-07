const { GraphQLServer } = require('graphql-yoga')

// Definição do Schema GraphQL
const typeDefs = `
  type Query {
    hello: String!
  }
`

// Resolvers GraphQL
const resolvers = {
    Query: {
        hello: () => 'Hello, World!'
    }
}

// Criação do servidor GraphQL
const server = new GraphQLServer({ typeDefs, resolvers })

// Inicia o servidor na porta 4000
server.start({ port: 4000 }, () => {
    console.log('Servidor GraphQL rodando na porta 4000')
})
