"use client";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from "react-admin";

const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="brand" fullWidth />
      <TextInput source="season" fullWidth />
      <TextInput source="description" multiline fullWidth />
      <ImageInput source="photos" multiple label="Photos">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
export default ProductEdit;
