export default function SearchBar(): JSX.Element {
  return (
    <form className="block self-center items-center md:w-fit w-dvw px-7 md:px-10">
      <input
        type="text"
        name="search"
        className="md:w-fit w-full border border-gray-400 bg-white text-xl rounded-[30px] px-3 py-1 font-light"
      ></input>
    </form>
  );
}
