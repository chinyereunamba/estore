// Importing required modules
"use client"
import { useEffect } from "react";
import { useUserContext } from "@/store/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Admin: React.FC = () => {
  const router = useRouter();
  const { user } = useUserContext();

  useEffect(() => {
    // Redirect to login page if the user is not an admin
    if (user?.is_admin === false) {
      router.push("/login");
    }
  }, [user, router]);

  // Render content only if the user is an admin
  if (user?.is_admin === false) {
    return null;
  }

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      {/* Display admin-specific content */}
      <ul>
        <li>
          <Link href="/admin/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Admin;
