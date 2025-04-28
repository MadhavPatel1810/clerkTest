import {
  DateField,
  ImageField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const ProductDetails = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="brand" />
        <TextField source="season" />
        <TextField source="description" />
        <ImageField source="photos[0]" />
        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </SimpleShowLayout>
    </Show>
  );
};

export default ProductDetails;
