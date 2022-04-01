import { gql } from 'apollo-server';

const gqlString = `
    type Product {
		id: ID!
		name: String!
		description: String!
		quantity: Int!
		price: Float!
		image: String!
		onSale: Boolean,
		categoryId: ID!,
		category(filter: CategoryFilterInput!): Category
    }

    type Category {
		id: ID!
		name: String!
		products: [Product]
    }

    type Query {
		products(filter: ProductsFilterInput): [Product!]!
		product(id: ID!): Product
		categories: [Category!]!
		category(id: ID!): Category
    }

    type Mutation {
      	addCategory(input: AddCategoryInput): Category
    }

	input ProductsFilterInput {
		onSale: Boolean,
		price: Float
	}

	input CategoryFilterInput {
		name: String
	}

	input AddCategoryInput {
		name: String!
	}
`;

const typeDefs = gql`${gqlString}`;

export default typeDefs;