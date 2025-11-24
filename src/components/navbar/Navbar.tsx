import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" py-4 shadow-lg ">
      <ul className="container mx-auto flex flex-row-reverse justify-start">
        <Link to={"/"}>
          <li className="ml-6 font-bold">لیست مقالات</li>
        </Link>

        <Link to={"/newArt"}>
          <li className="ml-6 font-bold">نوشتن مقاله</li>
        </Link>

        <Link to={"/about"}>
          <li className="ml-6 font-bold ">درباره</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
