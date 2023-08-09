import React, { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFavotiteProduct, selectProducts, selectToggle } from './selectors';
import {
 changeToggleStatus, chooseFavoriteProduct, deleteProduct, loadProducts
} from './productsSlice';

export default function ProductsList():JSX.Element {
  const products = useAppSelector(selectProducts);
  const toggle = useAppSelector(selectToggle);
  const favoriteProduct = useAppSelector(selectFavotiteProduct);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Favorite Product</h2>
      {!favoriteProduct && (<p>Product did not choosed</p>)}
      <p><b>{favoriteProduct?.title}</b> {favoriteProduct?.description}</p>
      <div style={toggle ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}> STATUS </div>
      <button type="button" onClick={() => dispatch(changeToggleStatus())}>
        Change Toggle status
      </button>

      <h1>ProductsList</h1>
      {
        products.map((product) => (
          <li key={product.id}>{product.title}
          <FavoriteIcon onClick={() => dispatch(chooseFavoriteProduct(product))} />
          <button type="button" onClick={() => dispatch(deleteProduct(product.id))}>
              Удалить
          </button>
          </li>
        ))
      }
    </div>
  );
}
