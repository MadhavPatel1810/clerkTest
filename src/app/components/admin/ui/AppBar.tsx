import { AppBar, TitlePortal } from "react-admin";
import { CustomUserMenu } from "./CustomUserMenu";

export const AdminAppBar = () => (
  <AppBar>
    <TitlePortal />
    <CustomUserMenu />
  </AppBar>
);
