import { Link } from "@tanstack/react-router";
import icon from "../assets/Logo-Black.png";
import { useState } from "react";
import { Heder } from "../DB/headerFetchData";

type IHeder = {
  id: number;
  Name: string;
  Path: string;
};

const Header = () => {
  const [NavigationData, setNavigationData] = useState<IHeder[]>(Heder);
  const [id, setId] = useState(1);

  const HandleClickEvent = (id: number) => {
    setId(id);
  };

  return (
    <div>
      <div className="p-2 flex gap-2 text-green-500 justify-between">
        <div>
          <img src={icon} alt="icon" className="w-12 h-12 bg-cover bg-center" />
        </div>
        <div className="max-sm:hidden flex justify-center items-center gap-5">
          {NavigationData.map((iData, index) => {
            return (
              <div
                className={`${iData.id == id ? "bg-red-800 w-30 h-12 flex justify-center items-center  rounded-2xl " : ""}font-bold text-white `}
              >
                <Link
                  key={index}
                  to={iData.Path}
                  className={` text-white `}
                  onClick={(e) => HandleClickEvent(iData.id)}
                >
                  {iData.Name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
