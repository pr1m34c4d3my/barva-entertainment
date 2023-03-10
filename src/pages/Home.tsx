import React from "react";
import MainNav from "../components/molecules/MainNav";
import ModelCard from "../components/molecules/ModelCard";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-black text-white">
      <MainNav main={[]} />
      <ModelCard />
    </div>
  );
};

export default Home;
