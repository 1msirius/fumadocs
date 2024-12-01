import Image from "next/image";
import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa6";
import Logo from "@/public/opendeeplearning.png";

const YEAR = new Date().getFullYear();

export const Footer = (): React.ReactElement => {
  const socialLinks = [
    { href: "https://twitter.com/ODL_AI", icon: FaXTwitter },
    { href: "https://www.youtube.com/@OpenDeepLearningAI", icon: FaYoutube },
    { href: "https://github.com/OpenDeepLearningAI", icon: FaGithub },
    { href: "https://discord.com/invite/bxnwugmNZg", icon: FaDiscord },
    { href: "https://www.instagram.com/opendeeplearning/", icon: FaInstagram },
    { href: "https://www.linkedin.com/company/opendeeplearning", icon: FaLinkedin },
    { href: "https://www.reddit.com/r/opendeeplearning/", icon: FaRedditAlien },
  ];

  return (
    <footer className="mt-auto border-t bg-fd-card py-12 px-8 text-fd-secondary-foreground sm:px-16 lg:px-20">
      <div className="container flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col items-center gap-3">
          <Image src={Logo} alt="ODL Logo" width={180} height={40} />
          <p className="text-xs text-center">ODL © 2023-{YEAR}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:justify-end">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-fd-primary"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
