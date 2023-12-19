"use client";
import Link from "next/link";
import { useUser } from '@clerk/nextjs';
import { SignInButton } from "@clerk/nextjs";


export default function Navbar() {
    const user = useUser();
    const { isSignedIn, isLoaded } = user;
  
  return (
    <div>
        {
            isLoaded && <>
                {isSignedIn ? <>
                    <Link href="/dashboard" className="btn_gradient px-14 py-3">Get Started</Link>
          </>:<>
                    <SignInButton afterSignInUrl='/dashboard' afterSignUpUrl='/dashboard'>
                        Get Started
                    </SignInButton>
                       
                </>}
            </>
        }
    </div>
  );
}
