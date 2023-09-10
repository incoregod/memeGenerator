const Inputs = ({ handleEvent, data }) => {
  return (
    <>
      <input
        className="border py-2 indent-2 rounded-md outline-none mb-2"
        type="text"
        placeholder="Top Text"
        name="topText"
        onChange={handleEvent}
        value={data.topText}
      />
      <input
        className="border py-2 indent-2 rounded-md outline-none mb-2"
        type="text"
        placeholder="Bottom Text"
        name="bottomText"
        onChange={handleEvent}
        value={data.bottomText}
      />
    </>
  );
};

export default Inputs;
