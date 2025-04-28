"use client";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
  DateField,
  ReferenceField,
} from "react-admin";

const MediaDetails = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ImageField source="url" />
      <ReferenceField source="userId" reference="users" link="show">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleShowLayout>
  </Show>
);
export default MediaDetails;
