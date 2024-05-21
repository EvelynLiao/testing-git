import { Link } from "react-router-dom";

const Header = () =>{
    return (
      <div className=" mt-4 flex justify-between gap-4 mx-auto sm:max-w-md">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );

}

export default Header