"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "@/types";
import UserCard from "@/components/UserCard";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setFiltered(
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.address.city.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <SearchBar search={search} setSearch={setSearch} />

        {/* ✅ Add User Button */}
        <Link href="/dashboard/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add User
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
        {filtered.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
