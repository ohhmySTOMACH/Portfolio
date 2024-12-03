import { FaInstagram, FaGithub, FaLinkedin, FaRegStar } from "react-icons/fa";
import { usePathname } from "next/navigation";

const SocialMediaBar = () => {
  const currentPath = usePathname();

  return (
    // if the current path is not home, hide the social media bar
    (currentPath === "/" && (
      <div className="w-[120px] h-[300px] items-center flex flex-col left-20 space-y-6 text-blue-40">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="w-10 h-10 hover:text-blue-60" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-10 h-10 hover:text-blue-60" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-10 h-10 hover:text-blue-60" />
        </a>
      </div>
    )) || <></>
  );
};

export default SocialMediaBar;
