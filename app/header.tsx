import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/un-tourism-logo.png"
              alt="UN Tourism Logo"
              width={40}
              height={40}
            />
          </Link>
          <span className="ml-2 text-xl font-bold">UN Tourism</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/focus" className="hover:text-gray-300">
                Our Focus
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-gray-300">
                Resources & Data
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-gray-300">
                News
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <Image
            src="/un-sustainable-development-goals.png"
            alt="UN Sustainable Development Goals"
            width={40}
            height={40}
          />
          <input
            type="text"
            placeholder="Search"
            className="ml-4 px-3 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
