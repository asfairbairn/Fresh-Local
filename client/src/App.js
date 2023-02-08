import {useState, useEffect} from 'react'
import Header from './components/Header'
// import Footer from './components/Footer'
import HomePage from './components/HomePage'
// import ProductPage from './components/ProductPage'
// import ProductDetails from './components/ProductDetails'
// import UserDetails from './components/UserDetails'
// import AboutPage from './components/AboutPage'
// import OurMission from './components/OurMission'
// import HowItWorks from './components/HowItWorks'
// import TopProducers from './components/TopProducers'
// import LogIn from './components/LogIn'
// import CreateAccount from './components/CreateAccount'
// import WhyFresh from './components/WhyFresh'

function App({Route, Switch}) {

  const [user, setUser] = useState(null)

  const [products, setProducts] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/products")
    .then(r => r.json())
    .then((products) => setProducts(products))
  }, [])

  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed min-h-screen">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage user={user} />
        </Route>
        {/* <Route path="/products">
          <ProductPage products={products} setProducts={products}/>
        </Route> */}
        {/* <Route path="/products/:id">
          <ProductDetails />
        </Route> */}
        {/* <Route path="/users/:id">
          <UserDetails />
        </Route> */}
        {/* <Route path="/about">
          <AboutPage />
        </Route> */}
        {/* <Route path="/about/our_mission">
          <AboutPage />
        </Route> */}
        {/* <Route path="/about/how_it_works">
          <AboutPage />
        </Route> */}
        {/* <Route path="/about/top_producers">
          <TopProducers />
        </Route> */}
        {/* <Route path="/sell">
          <SellPage />
        </Route> */}
        {/* <Route path="/login">
          <LogIn setUser={setUser}/>
        </Route> */}
        {/* <Route path="/login/create_account">
          <CreateAccount setUser={setUser}/>
        </Route> */}
        {/* <Route path="/sell/why_fresh&local">
          <WhyFresh/>
        </Route> */}
        {/* <Route path="/users/:id">
          <UserDetails/>
        </Route> */}
        {/* <Route path="/users/:id/products">
          <UserProductsPage/>
        </Route> */}
        {/* <Route path="/users/:id/products/new">
          <ProductForm/>
        </Route> */}
        {/* <Route path="/cart">
          <Cart/>
        </Route> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
