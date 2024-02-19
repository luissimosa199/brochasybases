"use client";

import { signOut } from "next-auth/react";
import React from "react";

const AdminSignOutButton = ({ className }: { className?: string }) => {
  return (
    <button
      className={className}
      onClick={() => signOut()}
    >
      Cerrar sesión
    </button>
  );
};

export default AdminSignOutButton;
