const ButtonComp = ({ handleClick, text, comp, styles }) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        styles ? { styles } : "col-start-1"
      }  col-span-1  bg-teal-400 p-3 dark:bg-slate-950 rounded-md border-none dark:text-white flex justify-center gap-2 items-center font-black max-sm:col-start-1 max-sm:col-span-2`}
    >
      {text}
      {comp && comp}
    </button>
  );
};

export default ButtonComp;
