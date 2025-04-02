"use client"; // If using Next.js app router, remember to enable client-side rendering.

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handler to sign in with GitHub.
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  // Handler to sign out from Firebase.
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleSignIn} className="border-2 rounded-lg p-2">
          Log in with GitHub
        </button>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <Link href="/week-9/shopping-list" className="hover:text-green-300">
            Go to Shopping List
          </Link>
          <button onClick={handleSignOut} className="border-2 rounded-lg p-2">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
