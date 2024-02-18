import Head from "next/head";
import React from "react";

interface CardProps {
  head: any;
  logo: any;
  tail: any;
}

const TempCard: React.FC<CardProps> = (props) => {
  const { head, logo, tail } = props;
  return (
    <div className=" flex flex-col justify-evenly w-11/12 lg:w-[200px] h-[35vh] items-center bg-gradient-to-br from-sky-500 to-blue-800 text-white m-5 rounded-lg shadow-xl p-2">
      <p className="text-3xl text-center font-semibold">{head}</p>
      <div className="text-7xl">{logo}</div>
      <p className="text-2xl">{tail}</p>
    </div>
  );
};

export default TempCard;
