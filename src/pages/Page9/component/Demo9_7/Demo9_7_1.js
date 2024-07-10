import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import VirtualizedList from 'react-virtualized-list';

const Demo9_7_1 = () => {
  const [ items, setItems ] = useState([]);
  const [ hasMore, setHasMore ] = useState(true);

  const loadMoreItems = () => {
    // 模拟 API 调用，延迟 1 秒加载新数据
    setTimeout(() => {
      const newItems = Array.from({ length: 20 }, (_, index) => ({
        id: items.length + index,
        text: `Item ${items.length + index}`
      }));
      setItems(prevItems => [...prevItems, ...newItems]);
      setHasMore(newItems.length > 0);
    }, 1000);
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  const renderItem = (item) => <div>{item.text}</div>;

  return (
    <Wrapper>
      <div className='content'>
        <VirtualizedList
          listData={items}
          renderItem={renderItem}
          containerHeight='450px'
          itemClassName='item-class'
          onLoadMore={loadMoreItems}
          hasMore={hasMore}
          loader={<div>Loading...</div>}
          endMessage={<div>No more items</div>}
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
  .item-class {
    height: 50px;
    border: 1px solid blue;
    margin: 0px 0 10px;
    padding: 10px;
    background-color: #f0f0f0;
  }
`

export default Demo9_7_1
