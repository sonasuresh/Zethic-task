import ApolloClient from "apollo-boost"
import fetch from 'isomorphic-fetch'
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRhN2FlNjRlYzE1MzIxMTY0N2EzNWMiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NjU1OTI2ODcsImV4cCI6MTU2ODE4NDY4N30.FZIWJ7sWhmQo6MPgUbY2Js-uVMWY1kUdASvr2oyY6Sd"
const url = "http://localhost:1337"

// import { InMemoryCache, createHttpLink } from '@apollo/client'

// export const link = createHttpLink({
//   fetch,
//   uri: url
// })

// export default ApolloClient({
//   cache: new InMemoryCache(),
//   link
// })


const client = new ApolloClient({
  fetch,
  uri: `${url}/graphql`,
  request: operation => {
    
  },
})

export { client }