import React, { useContext, useEffect } from 'react';
import { AppContext } from './context/ProductContext';
import { useParams } from 'react-router-dom';
import { PageNavigation } from './Components/PageNavigation';
import { MyImage } from './Components/MyImage';
import { MyProductData } from './Components/MyProductData';

const API = 'https://api.pujakaitem.com/api/products';

export const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, singleProduct, isSingleLoading } = useContext(AppContext);

  const { id: alias, name, company, price, description, category, stock, stars, image, reviews } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if(isSingleLoading){
    return <div className='mt-16'>....Loading</div>
  }

  return (
    <>
      <div className="mt-16 mb-20">
        <PageNavigation title={name} />
      </div>
      <div className="container mx-auto p-4 md:p-0 max-w-screen-lg mb-20">
        <div className="flex flex-col md:flex-row h-full w-full gap-12">
          {/* Product Image */}
          <MyImage imgs={image} />
          {/* Product Data */}
          <MyProductData data={singleProduct} />
        </div>
      </div>
    </>
  );
}
