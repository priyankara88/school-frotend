import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <div>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          Post
        </Link>
      </div>
    </div>
  );
};

export default Header;
