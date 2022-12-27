import { Link } from "react-router-dom";
import { useState } from "react";

type ListMain = {
  id: number;
  name: string;
  link: string;
};

type Props = {
  list: ListMain[];
};

const ListMainMenu: React.FC<Props> = ({ list }) => {
  const [menuList, setMenuList] = useState<ListMain[]>([]);
  return (
    <ul>
      {list.map((v: ListMain) => {
        return (
          <li key={v.id}>
            <Link to={v.link}>{v.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListMainMenu;
