import { createServer } from "miragejs"
import { createGraphQLHandler } from "@miragejs/graphql"
import { Cards, Categories, Gallery } from "./data";
import { ICard } from "./types";
import { ECardsSorting } from "../graphql/types";

const graphQLSchema = `
  type Query {
    allCategories: [Categorie!]!
    cards(categorieId: ID!, sortBy: Sort, first: Int): [Card!]!
    cart(id: ID!): Cart!
    gallery: [GallerySlide!]!
  }

  type Mutation {
    addCartItem(input: AddToCartInput!): Cart!
    removeCartItem(input: RemoveCartItemInput!): Cart!
    incCartItemQty(input: UpdateCartItemQtyInput!): Cart!
    decCartItemQty(input: UpdateCartItemQtyInput!): Cart!
    checkout(input: CheckoutInput!): Order!
  }

  enum Sort {
    asc,
    desc,
    availability,
    popularity,
  }

  input AddToCartInput {
    cartId: ID!
    id: ID!
    qty: Int = 1
  }

  input RemoveCartItemInput {
    cartId: ID!
    id: ID!
  }

  input UpdateCartItemQtyInput {
    cartId: ID!
    id: ID!
    by: Int!
  }

  input CheckoutInput {
    cartId: ID!
  }

  type Card {
    id: ID!
    name: String!
    description: String!
    price: Int!
    images: [String!]!
  }

  type Categorie {
    id: ID!
    name: String!
    content: [String!]!
  }

  type Cart {
    id: ID!
    subTotal: Int
    shippingAddress: String
    name: String
    email: String
    content: [CartItem!]!
  }

  type CartItem {
    id: ID!
    name: String!
    price: Int!
    images: [String!]!
    lineTotal: Int!
    qty: Int!
  }

  type Order {
    id: ID!
  }

  type GallerySlide {
    title: String!
    description: String!
    image: String!
  }
`

export function makeServer() {
  return createServer({
    routes() {
      this.passthrough();

      const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema, {
        resolvers: {
          Query: {
            cards(obj, args, context, info) {
              const { categorieId, sortBy, first } = args;

              const { content } = context.mirageSchema.db.allCategories.findBy({ id: categorieId });

              let cards = context.mirageSchema.db.cards.where((card: ICard) => content.includes(card.id));
              if (first) {
                cards = cards.slice(0, first);
              }
              if (sortBy === ECardsSorting.AVAILABILITY) {
                return cards;
              }
              return cards.sort((a: ICard, b: ICard) => {
                if (sortBy === ECardsSorting.ASC) return a.price - b.price;
                return b.price - a.price;
              })
            },
            allCategories(obj, args, context, info) {
              return context.mirageSchema.db.allCategories;
            },
            gallery(obj, args, context, info) {
              return context.mirageSchema.db.gallery;
            }
          }
        },
        context: {},
        root: {},
      });

      this.post("/graphql", graphQLHandler)
    },
    seeds(server) {
      server.db.loadData({
        cards: Cards,
        allCategories: Categories,
        gallery: Gallery,
      })
    }
  })
}