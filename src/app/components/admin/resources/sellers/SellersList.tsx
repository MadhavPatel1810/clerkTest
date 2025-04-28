import {
  BooleanField,
  Datagrid,
  ImageField,
  List,
  TextField,
} from "react-admin";

const SellersList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="business_name" label="Business" />
      <ImageField source="logo" label="Logo" />
      <TextField source="address" label="Address" />
      <BooleanField source="stripe_verification_status" label="Verified" />
      <TextField source="user.email" label="Contact Email" />
    </Datagrid>
  </List>
);
export default SellersList;
