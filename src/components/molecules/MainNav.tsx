import React, { useEffect, useState } from "react";
import ListMainMenu from "../atoms/navigation/ListMainMenu";

type Props = {
  main: MainMenu[];
};

type MainMenu = {
  id: number;
  name: string;
  link: string;
};

const MainNav: React.FC<Props> = () => {
  const [main, setMain] = useState<MainMenu[]>([]);

  useEffect(() => {
    const lists = [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "About Us", link: "/" },
    ];
    setMain(lists);
  }, []);

  return (
    <nav className="flex max-w-[1170px] mx-auto py-5 bg-white text-black px-5 justify-between items-center">
      <div>LOGO</div>
      <ListMainMenu list={main} />
      <div>Click Here</div>
    </nav>
  );
};

export default MainNav;
