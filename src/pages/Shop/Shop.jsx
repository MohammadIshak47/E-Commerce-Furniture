import Pagination from "./Pagination"
import ProductSearch from "./ProductSearch"
import ShopBackground from "./ShopBackground"
import ShopProduct from "./ShopProduct"
import Stats from "../Stats/Stats"


const Shop = () => {
  return (
    <>
     <ShopBackground/>
     <ProductSearch/>
     <ShopProduct/>
     <Pagination/>
     <Stats/>


    </>
  )
}

export default Shop