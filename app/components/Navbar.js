export default function Navbar() {
  return (
    <div className="bg-white text-gray-700 flex-row h-16 justify-center hidden sm:flex sm:justify-end font-semibold text-sm items-center select-none">
      <div className="text-pteal flex-1 text-lg ml-3 font-extralight">
        &lt;|Q / S|&gt;
      </div>
      <div className="rounded white mx-3 px-3 py-2 hover:bg-gray-200 ease-in duration-200 cursor-pointer">
        <a href="#about">About</a>
      </div>
      <div className="rounded white mx-3 px-3 py-2 hover:bg-gray-200 ease-in duration-200 cursor-pointer">
        <a href="#exp">Experience</a>
      </div>
      <div className="rounded white mx-3 px-3 py-2 hover:bg-gray-200 ease-in duration-200 cursor-pointer">
        <a href="#work">Work</a>
      </div>
      <div className="rounded white mx-3 px-3 py-2 hover:bg-gray-200 ease-in duration-200 cursor-pointer">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
