import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';


import About from './components/About';
function App() {

  return (
    <div>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
