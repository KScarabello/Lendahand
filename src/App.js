import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import HomeSlider from './components/HomeSlider/HomeSlider';
import Footer from './components/Footer/Footer';
import ProfilePage from './components/ProfilePage/ProfilePage';

class App extends Component {
  render() {
    return (
      <div>
         <TopNav />
        {/* <HomeSlider /> 
        <Footer /> */} */}
        <ProfilePage />
      </div>
    );
  }
}

export default App;
