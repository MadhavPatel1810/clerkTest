import { AdminAppBar } from "./AppBar";
import { Layout, LayoutProps } from "react-admin";

export const MyLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={AdminAppBar}>
    {props.children}
  </Layout>
);
