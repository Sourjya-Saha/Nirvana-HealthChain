import Logo from "@/assets/Screenshot 2024-09-24 054804.png"
import Image from "next/image";
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYt from '@/assets/social-youtube.svg'

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="flex justify-center">
      <div className="relative">
  <div
    className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-95 blur"
  ></div>
   <Image src={Logo} alt="Saas app" height={45} width={45} className=" relative rounded-lg    "/>
</div>
</div>
<nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
  <a href="">About</a>
  <a href="">Features</a>
  <a href="">Customers</a>
  <a href="">Pricing</a>
  <a href="">Help</a>
  <a href="">Carrer</a>
</nav>
<div className="flex justify-center gap-6 mt-6">
  <SocialInsta/>
  <SocialLinkedIIn/>
  <SocialX/>
  <SocialPin/>
  <SocialYt/>
</div>
<p className="mt-6">&copy; 2024 Nirvana Health-Chain, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};
