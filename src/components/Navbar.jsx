import Search from "./Search";
import Logo from "./Logo";

const Navbar = ({children}) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
   
    </nav>
  );
};

export default Navbar;
