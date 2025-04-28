"use client";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ReferenceField,
  TextField,
} from "react-admin";

const SellerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="business_name" fullWidth />
      <TextInput source="address" fullWidth />
      <TextInput source="stripe_user_id" fullWidth />
      <BooleanInput source="stripe_verification_status" label="Verified" />
      <ReferenceField source="userId" reference="users" link="show">
        <TextField source="email" />
      </ReferenceField>
    </SimpleForm>
  </Edit>
);
export default SellerEdit;
