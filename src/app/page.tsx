"use client";

import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../../services/firebase";
import Header from "./components/header";
import Carousel from "./components/carousel";
import "../app/globals.css";

interface IProps {
  id: number;
  name: string;
  image_path: string;
  cost: string;
  colors: string[];
}

export default function Home() {
  const [inventory, setInventory] = useState<IProps>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/inventory");
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`user is logged in: ${user}`);
      } else {
        console.log("no user");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Header />
        <Carousel data={inventory} />
      </main>
    </>
  );
}
