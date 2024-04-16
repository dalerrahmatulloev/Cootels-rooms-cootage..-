import './App.css'
import home1 from './assets/meritt-thomas-u-Hb93V6IWI-unsplash 1.png'
import home2 from './assets/meritt-thomas-u-Hb93V6IWI-unsplash 2.png'
import home3 from './assets/meritt-thomas-u-Hb93V6IWI-unsplash 3.png'
import navbarEndImg from './assets/navbarEndImg.png'
import cabin from './assets/cabin.png'
import food from './assets/food.png'
import table1 from './assets/signe.png'
import table2 from './assets/double.png'
import table3 from './assets/cootage.png'
import right from './assets/Arrow_Right.png'
import down from './assets/down.png'
import up from './assets/up.png' 
import woman from './assets/woman.png' 
import dots from './assets/dots.png' 
import twitter from './assets/twitter.png'
import instagram from './assets/instagram-logo.png'
import facebook from './assets/facebook.png'

function App() {
  return (
    <>
      <div className="navbar">
        <h1>Cootels</h1>
        <div className='navbarTh'>
          <p>Rooms</p>
          <p>Reservation</p>
          <p>Contacs</p>
        </div>
        <button>Get Started</button>
      </div>

      <div className="footNavbar">
        <div className="footNavbarText">
          <h1>Nature, Warmth, and Beauty in One Space</h1>
          <p>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
          <button>Reservation</button>
        </div>
        <div className="footNavbarImg">
          <img className='home1' src={home1} alt="" />
          <img className='home2' src={home2} alt="" />
          <img className='home3' src={home3} alt="" />
        </div>
      </div>

      <div className="navbarEnd">
        <div className="navbarEndImg">
          <img src={navbarEndImg} alt="" />
        </div>
        <div className="navbarEndText">
          <h1>Cozy and Down to Earth Cootage Hotel in Norway.</h1>
          <p className='navbarEndTextP1'>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
          <p className='navbarEndTextP2'>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
          <button>Learn More</button>
        </div>
      </div>

      <div className="cabin">
        <div className="cabinText">
          <h1>Cabin Activities</h1>
          <p>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
        </div>
        <div className="cabinImg">
          <img src={cabin} alt="" />
        </div>
      </div>

      <div className="food">
        <div className="foodImg">
          <img src={food} alt="" />
        </div>
        <div className="foodText">
          <h1>100% Organic Food</h1>
          <p>We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.</p>
        </div>
      </div>

      <div className="roomsText">
        <h1>Many Rooms to Choose</h1>
        <p>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</p>
        <button>Explore more</button>
      </div>

      <div className="roomsTables">
        <div className="table1">
          <img src={table1} alt="" />
          <h2>Single Room</h2>
          <p>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
          <h3>Learn more <img src={right} alt="" /></h3>
        </div>
        <div id='sss' className="table1">
          <img src={table2} alt="" />
          <h2>Double Room</h2>
          <p>Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two</p>
          <h3>Learn more <img src={right} alt="" /></h3>
        </div>
        <div id='sss' className="table1">
          <img src={table3} alt="" />
          <h2>Cootage</h2>
          <p>Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends</p>
          <h3>Learn more <img src={right} alt="" /></h3>
        </div>
      </div>

      <div className="what">
        <div className="whatLeft">
          <h3>Start your journey!</h3>
          <h1>How to Get My Room?</h1>
          <p>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
          <button className='whatButton1'>Contact us</button>
          <button className='whatButton2'>Explore more room</button>
        </div>
        <div className="whatRight">
          <div className="whatRight1">
            <h1>1. Choose a room and date</h1>
            <button><img src={down} alt="" /></button>
          </div>
          <div className="whatRight2">
            <div>
              <h1>2. Check for room availability</h1>
              <button><img src={up} alt="" /></button>
            </div>
            <p>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p>
          </div>
          <div className="whatRight3">
            <h1>3. Enjoy your room</h1>
            <button><img src={down} alt="" /></button>
          </div>
        </div>
      </div>

      <div className="our">
        <h1>Hear From Our Happy Customers</h1>
        <img className='woman' src={woman} alt="" />
        <p>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”</p>
        <h3>Kirana Dunham</h3>
        <img className='dots' src={dots} alt="" />
      </div>


      <div className="footer">
        <div className="footerDiv">
          <div className="footerLeft">
            <h1>Cootels</h1>
            <p>Your Best Private</p>
            <p>Hideway From Crowd.</p>
            <p>Back to Nature.</p>
            <img src={twitter} alt="" />
            <img style={{marginLeft: '20px'}} src={instagram} alt="" />
            <img style={{marginLeft: '20px'}} src={facebook} alt="" />
          </div>
          <div className="footerRight">
            <div className="footerRight1">
              <h3>Rooms</h3>
              <p>Single Room</p>
              <p>Double Room</p>
              <p>Cabin</p>
              <p>Custom Room</p>
            </div>
            <div className="footerRight2">
              <h3>Reservation</h3>
              <p>See the Steps</p>
              <p>Best Time</p>
            </div>
            <div className="footerRight3">
              <h3>Contact</h3>
              <p>Our Number</p>
              <p>Our Email</p>
              <p>Our Location</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
