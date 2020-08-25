import React, { useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useHistory } from 'react-router-dom';

import ShopService from '../../apis/ShopService';
import { ShopsContext } from '../../context/ShopContext';

import StarRating from './../star-rating/star.rating.component';

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

const MySwal = withReactContent(Swal);

const ShopsList = () => {
  const { shops, setShops } = useContext(ShopsContext);

  let history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ShopService.get('/');
        setShops(response.data.data.shops);
      } catch (err) {
        console.log({ err });
      }
    }
    fetchData();
  }, [setShops]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.value) {
          await ShopService.delete(`/${id}`);
          setShops(
            shops.filter((restaurant) => {
              return restaurant.id !== id;
            })
          );
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
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
