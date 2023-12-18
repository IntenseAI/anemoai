import Link from "next/link";
import ScrollLink from "./scrollLink";
import Navigation from "./navigation";

export default function Navbar() {
  return (
    <div className="flex justify-around items-center pb-10 lg:pb-28">
      <Link href="/">
        <img height={75} width={75} src="/images/logo.png" alt="logo"/>
      </Link>
      <div className="hidden lg:flex">
        <ul className="flex items-center text-base font-medium">
          <li><a href="/">Home</a></li>
          <li className="ps-8"><ScrollLink to="features">Features</ScrollLink></li>
        </ul>
      </div>
      <Navigation/>
    </div>
  );
}
