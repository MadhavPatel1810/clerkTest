"use client";
import {
  Datagrid,
  ImageField,
  List,
  SearchInput,
  TextField,
} from "react-admin";

const productFilters = [<SearchInput source="q" alwaysOn key="search" />];

const ProductList = () => (
  <List filters={productFilters}>
    <Datagrid rowClick="edit">
      <TextField source="title" label="Title" />
      <TextField source="brand" label="Brand" />
      <ImageField source="photos[0]" label="Image" />
      <TextField source="season" label="Season" />
    </Datagrid>
  </List>
);
export default ProductList;
