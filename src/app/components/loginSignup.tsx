import React, { useState } from "react";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth, signInWithGoogle } from "../../../services/firebase";
import "../globals.css";
import Link from "next/link";

export default function LoginSignup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleGoogleSignUp = async () => {
    await signInWithGoogle();
  };

  const handleSignIn = async () => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Successfully signed in!:", userCredential.user);
    } catch (error: any) {
      console.error("Error signing in:", error.message);
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full my-16">
        <div className="lg:px-32 px-8 lg:w-1/2 lg:mt-28 lg:border-r-4 flex justify-center items-center">
          <div className="text-left lg:w-35vh w-full">
            <p className="text-black md:text-5xl text-4xl py-8 bold-text">
              Sign In
            </p>
            <form className="max-w- mx-auto lg:border-b lg:border-gray-100">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 px-2 py-4 border border-fellow-300 rounded focus:outline-none focus:ring focus:border-blue-500 block w-full shadow-sm sm:text-sm"
              />
              <label
                htmlFor="password"
                className="block text-md font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 px-2 py-4 border border-fellow-300 rounded focus:outline-none focus:ring focus:border-blue-500 block w-full shadow-sm sm:text-sm"
              />
              <button
                onClick={handleSignIn}
                className="bg-fellow  hover:bg-white border-2 hover:border-black hover:text-black text-white text-xl rounded-xl my-8 lg:px-24 px-16 py-4"
              >
                Submit
              </button>
            </form>
            <div
              onClick={handleGoogleSignUp}
              className="flex justify-center items-center lg:my-4 mb-12 w-14 border rounded-full p-2"
            >
              <img src="/google.png" alt="" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:px-32 px-8 flex justify-center items-center">
          <div className="text-left lg:w-35vh w-full">
            <p className="text-black md:text-5xl text-4xl py-8 bold-text">
              Create an Account
            </p>
            <p className="text-black md:text-2xl text-xl py-8">
              First time here? Create an account for a delightfully seamless
              experience. Keep track of all your orders, save your shipping
              info, and more.
            </p>
            <Link href="/signup">
              <button className="bg-fellow  hover:bg-white border-2 hover:border-black hover:text-black text-white text-xl rounded-xl my-8 lg:px-24 px-16 py-4">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-fellow w-full xl:pt-80"></footer>
    </>
  );
}
