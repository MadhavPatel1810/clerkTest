"use client";
import { MyLayout } from "./admin/ui/MyLayout";
// import jsonServerProvider from "ra-data-json-server";
import { MyNotification } from "./admin/ui/Notification";
import {
  Admin,
  Resource,
  radiantDarkTheme,
  radiantLightTheme,
} from "react-admin";
import {
  ListingsIcon,
  MediaIcon,
  ProductsIcon,
  SellersIcon,
} from "./admin/ui/icons";
import {
  ListingDetails,
  ListingEdit,
  ListingsList,
  MediaDetails,
  MediaEdit,
  MediaList,
  ProductDetails,
  ProductEdit,
  ProductsList,
  SellerDetails,
  SellerEdit,
  SellersList,
} from "./admin/resources";
import { dataProvider } from "@/lib/dataProvider";
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const AdminApp = () => (
  <Admin
    dataProvider={dataProvider}
    layout={MyLayout}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
    notification={MyNotification}
  >
    <Resource
      name="listings"
      list={ListingsList}
      edit={ListingEdit}
      show={ListingDetails}
      icon={ListingsIcon}
    />
    <Resource
      name="products"
      list={ProductsList}
      edit={ProductEdit}
      show={ProductDetails}
      icon={ProductsIcon}
    />
    <Resource
      name="sellers"
      list={SellersList}
      edit={SellerEdit}
      show={SellerDetails}
      icon={SellersIcon}
    />
    <Resource
      name="media"
      list={MediaList}
      edit={MediaEdit}
      show={MediaDetails}
      icon={MediaIcon}
    />
  </Admin>
);

export default AdminApp;
