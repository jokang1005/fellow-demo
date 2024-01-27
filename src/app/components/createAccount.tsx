import React, { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { auth } from "../../../services/firebase";
import "../globals.css";

export default function CreateAccount() {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSignUp = async (event: React.FormEvent) => {
    event?.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: any) {
      setErrorMessage(error.message.toString());
      console.error("Error creating account:", error.message);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full lg:my-16 my-8">
        <p className="lg:m-16 mb-12 mx-2 lg:text-5xl text-2xl">
          Create Account
        </p>
        <p className="lg:mx-16 mx-2 mb-8 lg:text-2xl text-sm">
          Please fill out the form below and click Create Account. If you've
          ordered from Fellow before, use the same email address to see past
          purchases.
        </p>
        {/* <p className="lg:mx-16 mb-8 mx-2 lg:text-3xl text-sm">*Required</p> */}
        <form className="lg:mx-32 mx-4 lg:border-b lg:border-gray-100">
          <label
            htmlFor="first_name"
            className="block text-lg font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="mt-2 lg:mb-8 mb-4 px-2 lg:py-6 py-4 border border-gray-500 rounded focus:outline-none focus:ring focus:border-blue-500 block w-full shadow-sm sm:text-sm"
          />
          <label
            htmlFor="last_name"
            className="block text-lg font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="mt-2 lg:mb-8 mb-4 px-2 lg:py-6 py-4 border border-gray-500 rounded focus:outline-none focus:ring focus:border-blue-500 block w-full shadow-sm sm:text-sm"
          />
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 lg:mb-8 mb-4 px-2 lg:py-6 py-4 border border-gray-500 rounded focus:outline-none focus:ring focus:border-blue-500 block w-full shadow-sm sm:text-sm"
          />
          <label
            htmlFor="phone_number"
            className="block text-lg font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone_number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            className="mt-2 lg:mb-8 mb-4 px-2 lg:py-6 py-4 border border-gray-500 rounded focus:outline-none focus:ring focus:border-blue-500 block w-full shadow-sm sm:text-sm"
          />
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 lg:mb-8 mb-4 px-2 lg:py-6 py-4 border border-gray-500 rounded focus:outline-none focus:ring focus:border-blue-500 block w-full shadow-sm sm:text-sm"
          />
          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}
          <button
            onClick={handleSignUp}
            className="bg-fellow  hover:bg-white border-2 hover:border-black hover:text-black text-white text-xl rounded-xl my-8 lg:w-1/3 w-full lg:px-24 px-16 py-4"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
