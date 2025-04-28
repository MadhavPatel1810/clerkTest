"use client";
import { UserMenu } from "react-admin";
import { ClerkLogoutButton } from "./ClerkLogoutButton";

export const CustomUserMenu = () => (
  <UserMenu>
    <ClerkLogoutButton />
  </UserMenu>
);
