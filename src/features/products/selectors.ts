import Product from './types/Product';
import { RootState } from '../../app/store';

export const selectProducts = (state: RootState):Product[] => state.products.products;
export const selectToggle = (state: RootState):boolean | undefined => state.products.toggle;
export const selectFavotiteProduct =
(state: RootState): Product | undefined => state.products.favoriteProduct;
export const selectError = (state: RootState):string | undefined => state.products.error;
