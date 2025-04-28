"use client";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from "react-admin";

const MediaEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput source="description" multiline fullWidth />
      <ImageInput source="url" label="Media File">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
export default MediaEdit;
