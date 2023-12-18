import { ClerkProvider } from '@clerk/nextjs'

const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      // <ClerkProvider afterSignInUrl='/dashboard' afterSignUpUrl='/dashboard'>
        <div className="flex justify-center items-center h-full">
          {children}
        </div>
      // </ClerkProvider>
     );
  }
   
  export default AuthLayout;