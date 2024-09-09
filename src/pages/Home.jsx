import React from 'react'
import Person from '../components/Person'
import Conditional from '../components/Conditional'
import Laptop from '../components/Laptop'
import Events from '../components/Events'
import Counter from '../components/Counter'
import Filter from '../components/Filter'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import LearnUseEffect from '../components/LearnUseEffect'
import UseEffectApi from '../components/UseEffectApi'
import FormHandling from '../components/FormHandling'

const Home = () => {
    
  const products = [
    {
        title: "Iphone",
        brand: "Apple",
        price: 100000
    },
    {
        title: "Samsung Galaxy",
        brand: "Samsung",
        price: 80000
    },
    {
        title: "Xiaomi Mi",
        brand: "Xiaomi",
        price: 60000
    }
]

// one for latop array as a props
  const laptops = [
    {
      model: "Apple Macbook Pro",
      processor: "Intel Core i9",
      memory: "16GB",
      storage: "512GB SSD"
    },
    {
      model: "Asus TUF Gaming F15",
      processor: "AMD Ryzen 5 3600",
      memory: "16GB",
      storage: "512GB SSD"
    }
  ]
  return (
    <div>
    {/* <Navbar/>    */}

      {/* <Person title="" />

      <Person />
      <Person />
      <Person />

      <Product title="Samsung Galaxy S1" brand="Samsung" price={25000} />
      <Product title="Iphone 10" brand="Ihpne" price={90000} />
      <Product title="Vivo Y21" brand="Vivo" price={80000} /> */}

      {/* <Product key={index} title={product.title} brand={product .brand} price={product.price} /> */}

      {/* {products.map((product, index) => (
        <Product {...product} key={index} />
      ))}

      <Conditional/>

      {laptops.map((laptop, index) => (
        <Laptop {...laptop} key={index} />
      ))}


      <Events/>

      <Counter/>

      <Filter/> */}


      {/* <LearnUseEffect/> */}


      {/* <UseEffectApi/> */}

      <FormHandling/>

    </div>
  )
}

export default Home