"use client";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
  DateField,
  NumberField,
  ArrayField,
  Datagrid,
  ChipField,
} from "react-admin";

const ListingDetails = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="brand" />
      <TextField source="season" />
      <NumberField source="price" options={{ style: "currency", currency: "USD" }} />
      <TextField source="condition" />
      <TextField source="size" />
      <ChipField source="state" />
      <DateField source="updatedAt" showTime />
      
      <ArrayField source="images">
        <Datagrid>
          <ImageField source="" sx={{ "& img": { maxWidth: 200, maxHeight: 200 } }} />
        </Datagrid>
      </ArrayField>
      
      <TextField source="sellerName" label="Seller" />
      <ImageField 
        source="sellerPhoto" 
        label="Seller Photo" 
        sx={{ "& img": { width: 100, height: 100, borderRadius: "50%" } }}
      />
    </SimpleShowLayout>
  </Show>
);

export default ListingDetails;