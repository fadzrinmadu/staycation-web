import React from "react";
import { Link, Logo, Text, Title } from "@/components/ui";
import { footerLinks } from "./data";
import Copyright from "@/components/ui/Copyright";

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <div className="flex justify-between gap-x-[80px] gap-y-[24px] mb-[50px] flex-wrap">
        <div className="w-[258px] max-w-full">
          <Logo
            className="mb-2"
          />
          <Text 
            type="paragraph" 
            value="We kaboom your beauty holiday instantly and memorable"
          />
        </div>
        {footerLinks.map((link, index) => (
          <div>
            <Title type="h4" text={link.title} className="mb-2" />
            <div className="flex flex-col gap-2">
              {link.items.map((item) => (
                <Link 
                  href={item.href}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Copyright />
    </div>
  );
};

export { Footer };
