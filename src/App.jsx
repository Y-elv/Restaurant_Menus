

import './App.css'
import MainLayout from './Layout/MainLayout'
import SmallCard from './components/SmallCard'



function App() {


  return (
    <>
      <MainLayout />
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
            <h4>Soupus</h4>
            <h4>Desserts</h4>
            <h4>Appertizers</h4>
            <h4>Drink</h4>
          </div>

        </div>
        <div className="whole">
          <div className="product-card">

            <div className="soupus">
              <div className="header"><h3>soupus</h3></div>
              <SmallCard
                img="left"
                name="Pilates Class Pass"

              />
              <SmallCard
                img="left"
                name="Pilates Class Pass"

              />
            </div>
            <div className="desserts">
              <div className="header"><h3>desserts</h3></div>
              <SmallCard
                img="left"
                name="Pilates Class Pass"

              />
            </div>
            <div className="appertizers">
              <div className="header"><h3>appertizers</h3></div>
              <SmallCard
                img="left"
                name="Pilates Class Pass"

              />
            </div>
            <div className="drink">
              <div className="header"><h3>drink</h3></div>
              <SmallCard
                img="left"
                name="Pilates Class Pass"

              />
            </div>





          </div>
        </div>


      </div>
    </>
  )
}

export default App
