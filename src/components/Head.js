import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 justify-between cursor-pointer">
        <img
          className="h-8"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/512/8182/8182885.png"
          onClick={handleToggleMenu}
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
          />
        </a>
      </div>
      <div className="col-span-10 pl-52">
        <input className="w-1/2 border border-gray-500 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-500 py-2 px-5 rounded-r-full bg-gray-200">🔍</button>
      </div>
      <div className="col-span-1 cursor-pointer">
        <img alt="user" className="h-8" src={`${process.env.PUBLIC_URL}/user.png`} />
      </div>
    </div>
  );
};

export default Head;
