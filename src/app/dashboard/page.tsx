"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "@/types";
import UserCard from "@/components/UserCard";
import SearchBar from "@/components/SearchBar";

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
      <SearchBar search={search} setSearch={setSearch} />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {filtered.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
