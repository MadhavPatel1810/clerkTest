"use client";
import { Logout } from "react-admin";
import { Button } from "@mui/material";
import { SignOutButton } from "@clerk/nextjs";

export const ClerkLogoutButton = () => (
  <SignOutButton redirectUrl="/admin">
    <Button color="inherit">
      <Logout />
    </Button>
  </SignOutButton>
);
