import Link from "next/link";
import { Navbar } from "@/components";

const Header = () => {
  return (
    <header className="header padding">
        <Link 
            href="/"
            className="header__logo-wrapper"
        >
            <h1 className="header-logo">
                Cat
                <br />
                <span className="logo__text-bottom">Breeds</span>
            </h1>       
        </Link>

        <Navbar />
    </header>
  )
}

export default Header;