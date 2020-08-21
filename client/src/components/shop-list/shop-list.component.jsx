import React, { useEffect, useContext } from 'react';

import ShopService from '../../apis/ShopService';
import { ShopsContext } from '../../context/ShopContext';
import { useHistory } from 'react-router-dom';
import StarRating from './../StarRating';

import {
  ShopListContainer,
  ShopTable,
  ShopHead,
  ShopHeadRow,
  ShopHeadTitle,
  ShopTableBody,
  ShopBodyRow,
  ShopBodyTableDataWithButton,
  UpdateButton,
  DeleteButton,
} from './shop-list.style';

const ShopsList = () => {
  const { shops, setShops } = useContext(ShopsContext);

  let history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ShopService.get('/');
        setShops(response.data.data.shops);
        console.log(response);
      } catch (err) {
        console.log({ err });
      }
    }
    fetchData();
  }, [setShops]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await ShopService.delete(`/${id}`);
      console.log({ response });
      setShops(
        shops.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log({ err });
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/shops/${id}/update`);
  };

  const handleShopClick = (id) => {
    history.push(`/shops/${id}`);
  };

  const renderRating = (shop) => {
    if (!shop.count) {
      return <span className="text-warning"> No reviews</span>;
    }
    return (
      <>
        <StarRating rating={shop.average_rating} />
        <span className="text-base pl-1">({shop.count})</span>
      </>
    );
  };

  return (
    <ShopListContainer>
      <ShopTable>
        <ShopHead>
          <ShopHeadRow>
            <ShopHeadTitle>Shop </ShopHeadTitle>
            <ShopHeadTitle> Location </ShopHeadTitle>
            <ShopHeadTitle> Price </ShopHeadTitle>
            <ShopHeadTitle> Rating </ShopHeadTitle>
            <ShopHeadTitle> Edit </ShopHeadTitle>
            <ShopHeadTitle> Delete </ShopHeadTitle>
          </ShopHeadRow>
        </ShopHead>
        <ShopTableBody>
          {shops &&
            shops.map((shop) => {
              return (
                <ShopBodyRow
                  onClick={() => handleShopClick(shop.id)}
                  key={shop.id}
                >
                  <td>{shop.name}</td>
                  <td>{shop.location}</td>
                  <td>{'💰'.repeat(shop.price_range)}</td>
                  <td>{renderRating(shop)}</td>
                  <ShopBodyTableDataWithButton>
                    <UpdateButton onClick={(e) => handleUpdate(e, shop.id)}>
                      Update
                    </UpdateButton>
                  </ShopBodyTableDataWithButton>
                  <ShopBodyTableDataWithButton>
                    <DeleteButton onClick={(e) => handleDelete(e, shop.id)}>
                      Delete
                    </DeleteButton>
                  </ShopBodyTableDataWithButton>
                </ShopBodyRow>
              );
            })}
        </ShopTableBody>
      </ShopTable>
    </ShopListContainer>
  );
};

export default ShopsList;
