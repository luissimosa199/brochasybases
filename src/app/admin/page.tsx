"use client";
import AdminPanelLink from "@/components/AdminPanelLink";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const Admin = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return;
  }

  return (
    <main className="min-h-screen">
      <div className="p-4">
        <h1 className="text-xl font-semibold">Admin</h1>
        <AdminPanelLink
          href="admin/nuevo"
          title={"Nueva publicación"}
          subtitle={"Publicar un nuevo artículo"}
        />
        <AdminPanelLink
          href="admin/posts"
          title={"Todas las publicaciones"}
          subtitle={"Ver y editar los artículos"}
        />

        <AdminPanelLink
          href="/login"
          title={"Iniciar sesion"}
          subtitle={"Inicia sesión con otra cuenta"}
        />

        <AdminPanelLink
          href="/register"
          title={"Registrar nuevo usuario"}
          subtitle={"Registrar un nuevo usuario"}
        />
      </div>
    </main>
  );
};

export default Admin;
