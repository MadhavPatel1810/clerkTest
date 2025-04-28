"use client";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
  BooleanField,
  ReferenceField,
} from "react-admin";

const SellerDetails = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="business_name" />
      <ImageField source="logo" />
      <TextField source="address" />
      <BooleanField source="stripe_verification_status" label="Verified" />
      <TextField source="stripe_user_id" label="Stripe ID" />
      <ReferenceField source="userId" reference="users" link="show">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="userId" reference="users" link="show">
        <TextField source="email" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
export default SellerDetails;
