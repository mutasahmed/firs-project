import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards';
import Category from './components/Category';
import Food from './components/Food';



function App() {
  return (
    <div>
      <h1>
       <Navbar /> 
    <Hero />
       <HeadlineCards />
       <Food />
       <Category />
 
        </h1>
    </div>
  );
}

export default App;




