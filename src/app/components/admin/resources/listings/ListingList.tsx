"use client";
import {
  Datagrid,
  DateField,
  ImageField,
  List,
  SearchInput,
  SelectInput,
  TextField,
  FunctionField,
  ChipField,
} from "react-admin";

const listingStateChoices = [
  { id: 'sold', name: 'Sold' },
  { id: 'pending', name: 'Pending' },
  { id: 'rejected', name: 'Rejected' },
  { id: 'active', name: 'Active' },
];

const listingFilters = [
  <SearchInput source="title" alwaysOn />,
  <SelectInput
    source="state"
    choices={listingStateChoices}
    alwaysOn
  />,
];

const ListingsList = () => (
  <List filters={listingFilters}>
    <Datagrid rowClick="show">
      <ImageField
        source="images[0]"
        label="Photo"
        sx={{ "& img": { maxWidth: 50, maxHeight: 50, objectFit: "contain" } }}
      />
      <TextField source="title" />
      <TextField source="brand" />
      <FunctionField
        label="Season"
        render={(record: any) =>
          `${record.product?.season_time || ""} ${
            record.product?.season_year || ""
          }`.trim() || "-"
        }
      />
      <TextField source="sellerName" label="Seller" />
      <ImageField
        source="sellerPhoto"
        label="Seller Photo"
        sx={{ "& img": { maxWidth: 50, maxHeight: 50, borderRadius: "50%" } }}
      />
      <ChipField source="state" />
      <DateField source="updatedAt" showTime />
    </Datagrid>
  </List>
);

export default ListingsList;