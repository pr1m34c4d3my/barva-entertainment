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
  details: any;
};

const ModelCard = (props: Props) => {
  const [model, setModel] = useState<ModelName[] | null>(null);

  useEffect(() => {
    const model = [
      {
        id: 1,
        name: "Rana",
        image: `${Rana}`,
        description: "aaaa",
        details: {
          height: "158cm",
          weight: "50kg",
          gender: "female",
          hair: "black",
        },
      },
      {
        id: 2,
        name: "Lila",
        image: `${Lila}`,
        description: "aaaa",
        details: {
          height: "168cm",
          weight: "60kg",
          gender: "female",
          hair: "black",
        },
      },
    ];
    setModel(model);
  }, []);

  return (
    <div className="max-w-[1170px] mx-auto items-center justify-center flex gap-5 py-5">
      {model
        ? model.map((v: ModelName) => {
            return (
              <div className="flex flex-col gap-5">
                <Name name={[{ id: v.id, name: v.name }]} />
                <Image image={[{ id: v.id, url: v.image }]} />
                <Detail
                  detail={[
                    {
                      id: v.id,
                      height: v.details.height,
                      weight: v.details.weight,
                      gender: v.details.gender,
                      hair: v.details.hair,
                    },
                  ]}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ModelCard;
