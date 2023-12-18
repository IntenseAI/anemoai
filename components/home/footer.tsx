import Link from "next/link";
import { CiInstagram, CiYoutube, CiTwitter } from "react-icons/ci"

export default function Footer() {
    return (
      <div className="bg-[url('/images/featuresBg.svg')] -mt-1 pt-14 lg:pt-28 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 ps-10 lg:px-32">
            <Link href="/">
                <img height={80} width={80} src="/images/logo.png" alt="" />
            </Link>
            <div className="flex justify-center items-end pb-4 lg:pb-0">
                <span className="text-sm font-normal">
                    Copyright © 2023 ANEMO AI All rights reserved
                </span>
            </div>
            <div>
                <div className="float-right">
                    <span className="text-lg font-bold">Follow us</span>
                    <div className="flex gap-3 pt-6">
                    <a className="w-[40px] h-[40px]" href="https://twitter.com/anemoai" target="_blank">
                        <CiTwitter className="w-[30px] h-[30px] p-1 btn-link" size={25}/>
                    </a>
                    <a className="w-[40px] h-[40px]" href="https://instagram.com/anemo.ai" target="_blank">
                        <CiInstagram className="w-[30px] h-[30px] p-1 btn-link" size={25}/>
                    </a>
                    <a className="w-[40px] h-[40px]" href="https://youtube.com/@anemoai" target="_blank">
                        <CiYoutube className="w-[30px] h-[30px] p-1 btn-link" size={25}/>
                    </a>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    );
  }
  