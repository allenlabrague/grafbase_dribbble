import Image from "next/image";

import { footerLinks } from "@/constants";
import FooterColumn from "./FooterColumn";

import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="flexStart footer bg-light-white dark:bg-black">
      <div className="flex flex-col gap-12 w-full pt-12">
        <div className="flex flex-wrap gap-12">
          <div className="flex items-start flex-col">
            <img
              src="/logo-purple.svg"
              width={100}
              height={38}
              alt="Dribbble"
            />

            <p className="text-start text-sm font-normal mt-5 max-w-xs">
              Dribbble is the world’s leading community for creatives to share,
              grow, and get hired.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <AiFillFacebook fontSize={23} />
              <AiFillLinkedin fontSize={23} />
              <BiLogoGmail fontSize={23} />
            </div>
          </div>
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright pt-8 border-t-1 border-slate-200">
        <p>@ 2023, Dribbble. All Rights Reserved</p>
        <div className="flex items-center gap-2">
          <p className="text-gray dark:text-white">
            <span className="text-black font-semibold dark:text-white">
              11,539
            </span>{" "}
            shots Dribbbled
          </p>

          <Image
            src="/dribbble-icon.svg"
            width={20}
            height={20}
            alt="dribbbled image"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
