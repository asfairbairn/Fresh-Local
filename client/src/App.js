import {useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ProductPage from './components/ProductPage'
import ProductDetails from './components/ProductDetails'
import AboutPage from './components/AboutPage'
import OurMission from './components/OurMission'
import HowItWorks from './components/HowItWorks'
import TopProducers from './components/TopProducers'
import SellPage from './components/SellPage'
import UserPage from './components/UserPage'
import ProductForm from './components/ProductForm'
import Cart from './components/Cart'
import LogIn from './components/LogIn'
import CreateAccount from './components/CreateAccount'
import WhyFresh from './components/WhyFresh'
import EditUser from './components/EditUser'
import EditProduct from './components/EditProduct'

function App({Route, Switch}) {

  const [user, setUser] = useState()

  const [products, setProducts] = useState([])

  const [search, setSearch] = useState("")

  const [cart, setCart] =useState([])

  const [productCategory, setProductCategory] = useState("all")

  const [organic, setOrganic] = useState(false)
  
  useEffect(() => {
    fetch("/api/products")
    .then(r => r.json())
    .then((products) => {
      console.log(products)
      setProducts(products)

    })

  }, [])

  console.log(products)

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {r.json().then((data) => {
        console.log(data)
        setUser(data)});
      }});
  }, []);

  useEffect(() => {
    if (user?.id) {
    fetch(`/api/cart_details/${user.id}`)
    .then(res => {
        if (res.ok){
            return res.json()
        } else {
        }
    })
    .then(cart => {
            setCart(cart);
        });
    }
}, [user]);

  // const filteredProductsByOrganic = (products) => {
  //   if(organic === true) {
  //     return products?.organic === true
  //   }else {return products}
  // }

  // const filteredProductsByCategory = (filteredProductsByOrganic) => {
  //   if (productCategory === 'all') {
  //     return filteredProductsByOrganic
  //   }
  //   else {return filteredProductsByOrganic.filter(product => {
  //     return product.product_category === productCategory
  //   })}
  // }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

//   const searchFilteredProducts = () => {
//     filteredProductsByCategory.filter(product => {
//     return product.name.toLowerCase().includes(search.toLowerCase())
//   })
// }

  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen">
      <Header setUser={setUser} user={user} setCart={setCart}/>
      <Switch>
        <Route exact path="/">
          <HomePage user={user} setUser={setUser} setProductCategory={setProductCategory} setOrganic={setOrganic}/>
        </Route>
        <Route exact path="/products">
          <ProductPage products={products} setProductCategory={setProductCategory} setOrganic={setOrganic} organic={organic} handleSearch={handleSearch} search={search} productCategory={productCategory}/>
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails user={user} setCart={setCart}/>
        </Route>
        <Route exact path="/products/:id/update">
          <EditProduct user={user} setProducts={setProducts} products={products}/>
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/about/our_mission">
          <OurMission />
        </Route>
        <Route exact path="/about/how_it_works">
          <HowItWorks />
        </Route>
        <Route exact path="/about/top_producers">
          <TopProducers />
        </Route>
        <Route exact path="/sell">
          <SellPage />
        </Route>
        <Route exact path="/login">
          <LogIn setUser={setUser}/>
        </Route>
        <Route exact path="/login/create_account">
          <CreateAccount setUser={setUser}/>
        </Route>
        <Route exact path="/sell/why_fresh&local">
          <WhyFresh/>
        </Route>
        <Route exact path="/users/:id">
          <UserPage user={user}/>
        </Route>
        <Route exact path="/users/:id/update">
          <EditUser user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/users/:id/products/new">
          <ProductForm/>
        </Route>
        <Route exact path="/cart">
          <Cart setCart={setCart} cart={cart} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
