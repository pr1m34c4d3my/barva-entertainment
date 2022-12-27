import Detail from "../atoms/model-data/Detail";
import Image from "../atoms/model-data/Image";
import Name from "../atoms/model-data/Name";
import { useEffect, useState } from "react";
import Rana from "../../assets/img/rana.jpg";
import Lila from "../../assets/img/lila.jpg";

type Props = {};

type ModelName = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const ModelCard = (props: Props) => {
  const [model, setModel] = useState<ModelName[] | null>(null);

  useEffect(() => {
    const model = [
      { id: 1, name: "Rana", image: `${Rana}`, description: "aaaa" },
      { id: 2, name: "Curtis", image: `${Lila}`, description: "aaaa" },
    ];
    setModel(model);
  }, []);

  return (
    <div>
      {model
        ? model.map((v: ModelName) => {
            return (
              <>
                <Name name={[{ id: v.id, name: v.name }]} />
                <Image image={[{ id: v.id, url: v.image }]} />
                <Detail />
              </>
            );
          })
        : null}
    </div>
  );
};

export default ModelCard;
