

import './App.css'
import MainLayout from './Layout/MainLayout.jsx'
import SmallCard from './components/SmallCard.jsx'
import React, { useRef } from 'react';



function App() {



    const soupusDivRef = useRef(null);
  
    const soupusClick = () => {
      soupusDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const dessertstDivRef = useRef(null);
  
    const dessertsClick = () => {
      dessertstDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const appertizersDivRef = useRef(null);
  
    const appertizersClick = () => {
      appertizersDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const drinkDivRef = useRef(null);
  
    const drinkClick = () => {
      drinkDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div>
      <MainLayout/>
      <div className="main">
        <h3 id="title">Today's specials</h3>
        <div className="landingpage">

          <div className="image"></div>
        </div>
      </div>

      <div className="product-container">
        <div className="middle">
          <div className="upper">
            <h4>Menu</h4>
            <h4>See all</h4>
          </div>
          <div className="lower">
            <h4><button onClick={soupusClick}>Soupus</button></h4>
            <h4> <button onClick={dessertsClick}>Desserts</button></h4>
            <h4 ><button onClick={appertizersClick}>Appertizers</button></h4>
            <h4><button onClick={ drinkClick}>Drink</button></h4>
          </div>

        </div>
        <div className="whole">
          <div className="product-card">

            <div className="soupus"ref={soupusDivRef}>
              <div className="header"><h3>soupus</h3></div>
              <SmallCard
                img="left"
                name="Pilates Class Pass"

              />
              <SmallCard
                img="left2"
                name="Almond Croissants"

              />
              <SmallCard
                img="left3"
                name="Creamy Tuscan Chicken Pasta"

              />
            </div>
            <div className="desserts"ref={dessertstDivRef}>
              <div className="header"><h3>desserts</h3></div>
              <SmallCard
                img="left4"
                name="Pilates Class Pass"

              />
               <SmallCard
                img="left5"
                name="Pilates Class Pass"

              />
               <SmallCard
                img="left4"
                name="Pilates Class Pass"

              />
               <SmallCard
                img="left6"
                name="Pilates Class Pass"

              />
            </div>
            <div className="appertizers"ref={appertizersDivRef}>
              <div className="header"><h3>appertizers</h3></div>
              <SmallCard
                img="left7"
                name="Pilates Class Pass"

              />
               <SmallCard
                img="left8"
                name="Pilates Class Pass"

              />
               <SmallCard
                img="left9"
                name="Pilates Class Pass"

              />
              
            </div>
            <div className="drink"ref={drinkDivRef}>
              <div className="header"><h3>drink</h3></div>
              <SmallCard
                img="left10"
                name="Soupus"

              />
                <SmallCard
                img="left11"
                name="Soupus"

              />
                <SmallCard
                img="left12"
                name="Soupus"

              />
                <SmallCard
                img="left13"
                name="Soupus"

              />
                <SmallCard
                img="left14"
                name="Soupus"

              />
                <SmallCard
                img="left15"
                name="Soupus"

              />
                <SmallCard
                img="left16"
                name="Soupus"

              />
            </div>





          </div>
        </div>


      </div>
    </div>
  )
}

export default App
