import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../../assets/icons/logo-icon.svg";

const links = [
  { name: "Campaigns", href: "#" },
  { name: "About Beast Mode", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Home", href: "#" },
  { name: "Contact", href: "#" },
  { name: "FAQs", href: "#" },
];

const socialIcons = [
  { icon: <Facebook size={24} />, href: "#" },
  { icon: <Twitter size={24} />, href: "#" },
  { icon: <Instagram size={24} />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-navbg bottom-0 absolute">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="mb-4">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </a>
          <p className="max-w-md font-medium text-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 md:gap-12 py-10 text-white font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-indigo-600 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-300 pt-6">
          <div className="flex justify-center gap-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white hover:text-indigo-600 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
