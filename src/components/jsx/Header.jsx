import { FiGithub } from "react-icons/fi";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-60">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" className="text-white text-sm font-light gap-2 flex items-center" aria-label="Hagalink Home">
          <img src="/favicon.svg" className="size-8" alt="Hagalink Logo" />
          Hagalink S.L.
        </a>
        <ul className="flex space-x-6 items-center">
          <li>
            <a href="https://github.com/hagalink" className="text-gray-300 hover:text-white" aria-label="Hagalink GitHub">
              <FiGithub className="size-7 hover:scale-110 transition-all duration-300" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;