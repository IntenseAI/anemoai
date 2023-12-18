"use client";
import Link from "next/link";
import ScrollLink from "./scrollLink";
import { useUser } from '@clerk/nextjs';
import { SignInButton, SignUpButton } from "@clerk/nextjs";


export default function getStarted() {
  const user = useUser();
  const { isSignedIn, isLoaded } = user;
  
  return (
    <div className="hidden lg:flex gap-8">
        {
            isLoaded && <>
                {isSignedIn ? <>
                    <Link href="/dashboard" className="btn_gradient px-14 py-3">Get Started</Link>
          </>:<>
                    <SignInButton className="btn_gradient px-14 py-3" afterSignInUrl='/dashboard' afterSignUpUrl='/dashboard'>
                        Get Started
                    </SignInButton>
                       
                </>}
            </>
        }
    </div>
  );
}
