import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient  from 'apollo-boost';


import Nav from './components/Nav';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import About from './components/About';
import Carousel from './components/Carousel';
import Contact from './pages/contact';
import Artists from './pages/artists'

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
//alyse added artists and contact


function App() {
  // const [contactSelected, setContactSelected] = useState(false);

  // const [categories] = useState([
  //   {
  //     name: 'portraits'
  //   },
  //   {
  //     name: 'landscape'
  //   },
  //   {
  //     name: 'black and Whites'
  //   },
  // ])

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
  <ApolloProvider client={client}>
<Router>
  <div>
   <Nav />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route path="/artists" component={Artists} />
      <Route path="/contact" component={Contact} />
    </Switch>
    
      <Carousel> </Carousel>
      {/* <About></About> */}
  </div>
 </Router>
 </ApolloProvider>
);
}
export default App; 