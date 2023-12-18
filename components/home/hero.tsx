import Link from "next/link";
import Navbar from "./navbar";


export default function Hero() {
  return (
    <div className="bg-[url('/images/herobg.svg')] pt-6 mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-24">
        <div className="">
          <h1 className="text-4xl font-bold">Your true AI companion</h1>
          <p className="text-xl font-normal pt-5 pb-12">
            Increase your productivity, Elevate your learning experience with
            the most comprehensive and powerful AI tools.
          </p>
          
          <div className="flex items-center gap-3 pt-10 lg:pt-40 pb-10">
            <div className="flex items-center">
              <div className="">
                <img src="/images/a1.svg" alt="" />
              </div>
              <div className="-ms-4">
                <img src="/images/a2.svg" alt="" />
              </div>
              <div className="-ms-4">
                <img src="/images/a3.svg" alt="" />
              </div>
              <div className="-ms-4">
                <img src="/images/a4.svg" alt="" />
              </div>
              <div className="-ms-4">
                <img src="/images/a5.svg" alt="" />
              </div>
            </div>
            <div className="text-lg font-semibold">
              Trusted by more than 100K{" "}
              <span className="text_gradient">user</span>
            </div>
          </div>
        </div>
        <div className="py-5 lg:py-0">
          <img src="/images/heroImg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
