import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
// Creating a hook in react

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    //console.log(json);

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
