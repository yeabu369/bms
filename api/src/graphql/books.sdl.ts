export const schema = gql`
  type Book {
    id: Int!
    title: String!
    author: String!
    copiesAvailable: Int!
    cover: String
    publishedAt: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    books: [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    title: String!
    author: String!
    copiesAvailable: Int!
    cover: String
    publishedAt: DateTime
  }

  input UpdateBookInput {
    title: String
    author: String
    copiesAvailable: Int
    cover: String
    publishedAt: DateTime
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
  }
`
