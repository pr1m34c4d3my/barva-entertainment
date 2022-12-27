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
    <nav>
      <ListMainMenu list={main} />
    </nav>
  );
};

export default MainNav;
