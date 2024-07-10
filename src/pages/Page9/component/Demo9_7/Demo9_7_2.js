import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import VirtualizedList from 'react-virtualized-list';

const Demo9_7_2 = () => {
  const [ products, setProducts ] = useState([]);
  const [ hasMore, setHasMore ] = useState(true);
  const [ page, setPage ] = useState(0);

  const fetchProductData = async (product) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ description: `Description for ${product.name}`, imageUrl: `https://via.placeholder.com/150?text=Product+${product.id}` });
      }, 500);
    });
  };

  const fetchProducts = (page) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = Array.from({ length: 10 }, (_, i) => ({
          id: page * 10 + i,
          name: `Product ${page * 10 + i}`
        }));
        resolve(products);
      }, 500);
    });
  };

  const loadMoreProducts = () => {
    fetchProducts(page).then(newProducts=>{
      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setPage(prevPage => prevPage + 1);
      if (newProducts.length < 10) {
        setHasMore(false);
      }
    })

  };

  useEffect(() => {
    loadMoreProducts();
  }, []);

  return (
    <Wrapper>
      <div className='content'>
        <VirtualizedList
          listData={products}
          renderItem={(product, data) => (
            <div>
              <h2>{product.name}</h2>
              <p>{data ? data.description : 'Loading...'}</p>
              {data && <img src={data.imageUrl} alt={product.name} />}
            </div>
          )}
          itemClassName='item-class-dynamic'
          fetchItemData={fetchProductData}
          onLoadMore={loadMoreProducts}
          hasMore={hasMore}
          containerHeight='500px'
          loader='Loading more products...'
          endMessage='No more products'
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .content {
    width: 350px;
    padding: 1rem;
    border: 1px solid red;
    margin-top: 2rem;
  }
  .item-class-dynamic {
    height: 300px;
    padding: 10px;
    border: 1px solid blue;
    border-bottom: 1px solid #eee;
  }
`

export default Demo9_7_2
