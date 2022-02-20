import { createSelector } from "reselect";

const selectShopData = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);
