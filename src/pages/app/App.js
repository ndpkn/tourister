import './App.scss';
import "react-widgets/scss/styles.scss";

import SearchPage from '../searchPage/SearchPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../mainPage/MainPage';
import FavoritesPage from '../favoritesPage/FavoritesPage';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route index path="/" element={<MainPage/>} />
          <Route index path="favorites" element={<FavoritesPage/>} />
          <Route path="search" element={<SearchPage/>} />
        </Routes>
      <Footer/>
    </div> 
  );
}



export default App;
