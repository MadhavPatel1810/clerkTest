"use client";
import {
  Datagrid,
  DateField,
  ImageField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

const MediaList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Name" />
      <ImageField source="url" label="Media" />
      <ReferenceField source="userId" reference="users" link="show">
        <TextField source="name" label="Uploader" />
      </ReferenceField>
      <DateField source="created_at" label="Upload Date" showTime />
    </Datagrid>
  </List>
);
export default MediaList;
