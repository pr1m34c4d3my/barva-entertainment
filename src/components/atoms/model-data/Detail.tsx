import { useState } from "react";

type Props = {
  detail: Detail[];
};

type Detail = {
  id: number;
  height: string;
  weight: string;
  gender: string;
  hair: string;
};

const Detail = ({ detail }: Props) => {
  const [details, setDetails] = useState<Detail[] | null>(null);
  return (
    <>
      {detail
        ? detail.map((v: Detail) => {
            return (
              <ul className="font-medium " key={v.id}>
                <li>
                  <p>Height: {v.height}</p>
                </li>
                <li>
                  <p>Weight: {v.weight}</p>
                </li>
                <li>
                  <p>Gender: {v.gender}</p>
                </li>
                <li>
                  <p>Hair: {v.hair}</p>
                </li>
              </ul>
            );
          })
        : null}
    </>
  );
};

export default Detail;
