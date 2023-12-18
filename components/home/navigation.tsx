"use client";
import Link from "next/link";
import ScrollLink from "./scrollLink";
import { useUser } from '@clerk/nextjs';
import { SignInButton, SignUpButton } from "@clerk/nextjs";


export default function Navbar() {
  const user = useUser();
  const { isSignedIn, isLoaded } = user;
  
  return (
    <div className="hidden lg:flex gap-8">
        {
            isLoaded && <>
                {isSignedIn ? <>
                    <button className="px-8 py-3 btn_gradient"><Link href="/dashboard">Dashboard</Link></button>
                </>:<>
                        <SignInButton className="px-8 py-3 btn" afterSignInUrl='/dashboard' afterSignUpUrl='/dashboard'>
                            Sign in
                        </SignInButton>
                        <SignUpButton className="px-8 py-3 btn" afterSignInUrl='/dashboard' afterSignUpUrl='/dashboard'>
                            Sign up
                        </SignUpButton>
                </>}
            </>
        }
    </div>
  );
}
