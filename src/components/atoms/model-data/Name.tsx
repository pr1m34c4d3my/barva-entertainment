import React, { useState } from "react";

type Model = {
  id: number;
  name: string;
};

type Props = {
  name: Model[];
};

const Name: React.FC<Props> = ({ name }) => {
  const [names, setNames] = useState<Model[] | null>(null);
  return (
    <>
      {name
        ? name.map((v: Model) => {
            return (
              <h2 key={v.id} className="text-[30px] uppercase font-bold">
                {v.name}
              </h2>
            );
          })
        : null}
    </>
  );
};

export default Name;
