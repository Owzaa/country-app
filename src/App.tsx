import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm/searchForm';
import ListCountries from './components/Table/table';
import Footer from './pages/Footer/Footer';


function App() {





  return (
    <div className="App">


    <div className='table-Container'>
      <SearchForm/>
      <ListCountries />


    </div>



   <section className='footer'>

     <Footer/>
   </section>
   
    </div>
  );
}

export default App;
