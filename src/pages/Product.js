import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import Description from '../components/description/Description';
import Relatedproducts from '../components/RelatedProducts/Relatedproducts';

function Product() {
  const {all_product}=useContext(ShopContext);
  const {productId} = useParams();
  const product=all_product.find((e)=> e.id===Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description />
      <Relatedproducts />

    </div>
  )
}

export default Product