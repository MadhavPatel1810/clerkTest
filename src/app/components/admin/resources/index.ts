import { lazy } from "react";

//Listings
export const ListingsList = lazy(
  () => import("@/app/components/admin/resources/listings/ListingList")
);
export const ListingEdit = lazy(
  () => import("@/app/components/admin/resources/listings/ListingEdit")
);
export const ListingDetails = lazy(
  () => import("@/app/components/admin/resources/listings/ListingDetails")
);

//Products
export const ProductsList = lazy(
  () => import("@/app/components/admin/resources/products/ProductList")
);
export const ProductEdit = lazy(
  () => import("@/app/components/admin/resources/products/ProductEdit")
);
export const ProductDetails = lazy(
  () => import("@/app/components/admin/resources/products/ProductDetails")
);

//Sellers
export const SellersList = lazy(
  () => import("@/app/components/admin/resources/sellers/SellersList")
);
export const SellerEdit = lazy(
  () => import("@/app/components/admin/resources/sellers/SellerEdit")
);
export const SellerDetails = lazy(
  () => import("@/app/components/admin/resources/sellers/SellerDetails")
);

//Media
export const MediaList = lazy(
  () => import("@/app/components/admin/resources/media/MediaList")
);
export const MediaEdit = lazy(
  () => import("@/app/components/admin/resources/media/MediaEdit")
);
export const MediaDetails = lazy(
  () => import("@/app/components/admin/resources/media/MediaDetails")
);
