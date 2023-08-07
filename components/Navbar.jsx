import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import ThemeButton from "./ThemeButton";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-5">
        <div className="xl:hidden">
          <NavbarMenu />
        </div>
        <Link href="/">
          <Image src="/logo.svg" width={100} height={100} alt="Dribbble" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <div className="flexCenter">
          <AuthProviders />
        </div>
        <div className="hidden md:block">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
