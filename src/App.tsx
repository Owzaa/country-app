import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm/searchForm';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';


function App() {





  return (
    <div className="App">

      <div className='table-Container'>
        <SearchForm />
      </div>

      <section className='homeView-Container'>

        <div className='container'>
          <Home />
        </div>

      </section>

      <section className='footer-container'>
        <Footer />
      </section>

    </div>
  );
}

export default App;
