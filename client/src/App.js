import React, { useState } from 'react';
import './index.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient  from 'apollo-boost';

import Nav from './components/Nav';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import About from './components/About';
import Carousel from './components/Carousel';
// import ContactForm from './components/Contact';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'portraits'
    },
    {
      name: 'landscape'
    },
    {
      name: 'black and whites'
    },
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
  <ApolloProvider client={client}>

  <div>
    <Nav categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}
    />
    <main>

      <About></About>
      <Carousel></Carousel>
    </main>
  </div>
 
 </ApolloProvider>
);
}
export default App; 