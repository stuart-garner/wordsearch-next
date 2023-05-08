import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        window.scrollY > 175 ? setShow(true) : setShow(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  return (
    <header className={`nav-bar ${show && "show"} pointer-events-none`}>
      <Link href="/" scroll={false} aria-label="Link to home page">
        <span className="m-0 align-middle text-xl ">[SG]</span>
      </Link>
    </header>
  );
};

export default Header;
