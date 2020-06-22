import ApolloClient from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'https://us-central1-vuewebserver-88b2a.cloudfunctions.net/graphYoutubeServer',
    fetch: fetch
  })
  
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

  export default client;
