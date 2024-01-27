import React, { useState } from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import { useAuthState } from "firebase/auth";
import { auth, signOutUser } from "../../../services/firebase";

export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  // const { data: user } = useAuthState(auth);
  // const handleUserIconClick = () => {
  //   if (user) {
  //     setDropdownVisible((boolean) => !boolean);
  //   } else {
  //     window.location.href = "/login";
  //   }
  // };

  const handleSignOut = () => {
    signOutUser();
  };
  return (
    <>
      <div className="sticky flex flex-col justify-center w-full py-4 bg-fellow text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="lg:hidden">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height={40}
              width={40}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
            </svg>
          </div>
          {/* <div className="hidden lg:flex space-x-4 text-xl">
            <ul>
              <Link href="/about">About</Link>
            </ul>
            <ul>
              <Link href="/support">Support</Link>
            </ul>
            <ul>
              <Link href="/learn">Learn</Link>
            </ul>
          </div>
          <div className="hidden lg:flex space-x-4 text-xl">
            <ul>
              <Link href="/wholesale">Wholesale</Link>
            </ul>
            <ul>
              <Link href="/search">Search</Link>
            </ul>
            <ul>
              <MagnifyingGlassIcon className="h-6 w-6 text-white-500" />
            </ul>
          </div> */}
        </div>
      </div>
      <div className="sticky flex flex-col justify-between w-full px-16 py-2 bg-white text-fellow">
        <div className="mx-auto flex w-full justify-between items-center">
          <div className="hidden lg:flex max-w-[180px] space-x-4 text-xl">
            <Link href="/">
              <ul>
                <img src="/coffee_company.png" alt="" />
              </ul>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-16 text-xl">
            <ul>Gear</ul>
            <ul>Coffee Beans</ul>
            <ul>Gifts</ul>
            <ul>Guides</ul>
          </div>
          <div className="hidden lg:flex space-x-8 text-xl">
            <Link href="/login">
              <ul>
                <UserCircleIcon className="h-10 w-10 text-fellow-500" />
              </ul>
            </Link>
            <ul>
              <ShoppingCartIcon className="h-10 w-10 text-fellow-500" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
