import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../redux/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector(store => store.search);

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(cache[searchQuery] !== undefined){
        setSuggestions(cache[searchQuery]);
      }else{
        getSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResult({[searchQuery]:json[1]}));
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
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
        <div>
          <input
            className="px-5 w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 py-2 px-5 rounded-r-full bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[28rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((sugg) => (
                <li
                  key={sugg}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {sugg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 cursor-pointer">
        <img
          alt="user"
          className="h-8"
          src={`${process.env.PUBLIC_URL}/user.png`}
        />
      </div>
    </div>
  );
};

export default Head;
