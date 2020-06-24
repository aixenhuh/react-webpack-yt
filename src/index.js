import React from 'react';
import ReactDOM from  'react-dom';
import App from './Components/App';
import About from './Components/About';
import { ApolloProvider } from '@apollo/react-hooks' ;
import client from './apollo';
import './css/App.css';
import './css/main.css';
import './css/reset.css';
import './css/styles.css';
import './css/footer.css';

ReactDOM.render(
    <ApolloProvider client={client}><App /></ApolloProvider>,
    document.getElementById('root')
);

ReactDOM.render(
    <About />,
    document.getElementById('hero')
);
