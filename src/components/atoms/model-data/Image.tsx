import { useState } from "react";

type Props = {
  image: Image[];
};

type Image = {
  id: number;
  url: string;
};

const Image = ({ image }: Props) => {
  const [images, setImages] = useState<Image[] | null>(null);
  return (
    <div>
      {image
        ? image.map((v: Image) => {
            return (
              <figure className="w-[200px]" key={v.id}>
                <img className=" object-cover" src={v.url} alt={v.url} />
              </figure>
            );
          })
        : null}
    </div>
  );
};

export default Image;
