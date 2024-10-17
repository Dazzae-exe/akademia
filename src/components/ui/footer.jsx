import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="max-h-16 h-16">
      <div className="flex justify-between items-center container mx-auto w-full h-full">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Akademía. All rights reserved.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to={"/terms"}
                className={"text-sm text-gray-500 hover:text-gray-700"}
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                to={"/privacy"}
                className={"text-sm text-gray-500 hover:text-gray-700"}
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={"text-sm text-gray-500 hover:text-gray-700"}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
