import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import AdminSignOutButton from "./AdminSignOutButton";

const AdminHeader = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="shadow-md">
      <div className="w-full p-2 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Admin: {session?.user?.name} </h1>
        <nav>
          <ul className="flex gap-4">
            <li className="border rounded-md shadow-sm py-2 px-4 hover:shadow-md transition-all">
              <a href="/">Volver al home</a>
            </li>
            <li className="border rounded-md shadow-sm py-2 px-4 hover:shadow-md transition-all">
              <Link href="/admin">Volver al panel</Link>
            </li>
            <li className="border rounded-md shadow-sm py-2 px-4 hover:shadow-md transition-all">
              <AdminSignOutButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
