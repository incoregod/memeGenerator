// api https://api.imgflip.com/get_memes

import { useState, useEffect } from "react";
import { BsDpad } from "react-icons/bs";
import Inputs from "../Inputs/Inputs";
import ButtonComp from "../Button/ButtonComp";

const Meme = () => {
  const [allData, setAllData] = useState([]);
  const [inputData, setInputData] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setAllData(response.data.memes));
  }, []);

  const generateRandomImg = () => {
    const random = Math.floor(Math.random() * allData.length);
    const imgUrl = allData[random].url;
    setInputData((prevData) => ({
      ...prevData,
      imageUrl: imgUrl,
    }));
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearInputs = () => {
    setInputData((prev) => ({
      ...prev,
      topText: "",
      bottomText: "",
    }));
  };

  return (
    <main className="font-montserrat bg-neutral-200 dark:bg-neutral-800">
      <div className="grid grid-rows-2 grid-cols-2 gap-4 p-8">
        <Inputs handleEvent={handleChanges} data={inputData} />
        <ButtonComp
          handleClick={generateRandomImg}
          text={`Get a new meme image `}
          comp={<BsDpad />}
        />
        <ButtonComp
          handleClick={clearInputs}
          text={`Clear Text `}
          styles={"col-start-2"}
        />
      </div>

      <div className=" relative flex justify-center items-center text-white font-montserrat font-black text-xl drop-shadow-xl text-glow  uppercase sm:text-5xl    max-lg:m-10 ">
        <img
          className="  max-w-full  rounded-md max-lg:w-full "
          src={inputData.imageUrl}
          alt="img-meme"
        />

        <h2 className=" absolute top-2 ">{inputData.topText}</h2>
        <h2 className="absolute bottom-2 ">{inputData.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
