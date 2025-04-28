"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { OAuthStrategy } from "@clerk/types";

export default function SignInPage() {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {  
    debugger
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!isLoaded) return;

    try {
      const startResult = await signIn.create({ identifier: email });
      const attemptResult = await signIn.attemptFirstFactor({
        strategy: "password",
        password,
      });

      if (attemptResult.status === "complete") {
        await setActive({ session: attemptResult.createdSessionId });
        router.push("/admin");
      } else {
        setError("Additional steps required.");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err?.errors?.[0]?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;

    setLoading(true);

    try {
      debugger;
      const result = await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/admin",
        redirectUrlComplete: "/admin"
      });
      debugger;
      console.log({result})
    } catch (err: any) {
      console.error(err);
      setError(err.errors?.[0]?.message || "Google sign-in failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white py-16 px-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign in to Tigra Admin
        </h2>
        {error && (
          <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border px-3 py-2 text-black"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border px-3 py-2 pr-10 text-black"
              required
            />
           
          </div>
          <button
            type="submit"
            className="w-full rounded bg-black px-4 py-2 text-white hover:bg-gray-800 flex items-center justify-center"
            disabled={loading}
          >
            {"Sign in"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full rounded border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center justify-center"
          disabled={loading}
        >
    Continue with Google
        </button>
      </div>
    </div>
  );
}
