"use client";

import {
  Edit,
  ImageField,
  ImageInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

const ListingEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" fullWidth />
        <TextInput source="description" multiline fullWidth />
        <ReferenceInput source="productId" reference="products" />
        <ReferenceField source="productId" reference="products" link="show">
          <TextField source="title" />
        </ReferenceField>
        <SelectInput
          source="state"
          choices={[
            { id: "DRAFT", name: "Draft" },
            { id: "PUBLISHED", name: "Published" },
            { id: "SOLD", name: "Sold" },
          ]}
        />
        <ImageInput source="photos" multiple label="Photos">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default ListingEdit;
