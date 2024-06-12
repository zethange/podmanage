"use client";

import { Button } from "~/shared/ui/button";
import { logoutAction } from "../../model/logout";

export const Logout = () => {
  return (
    <Button
      onClick={() => {
        logoutAction();
      }}
    >
      Logout
    </Button>
  );
};
