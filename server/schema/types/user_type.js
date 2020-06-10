const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql

const Usertype = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
})

module.exports = Usertype
