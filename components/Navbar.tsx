export default function Navbar() {
  return (
    <nav className="container sticky top-5 z-40 mx-auto flex items-center justify-center">
      <div className="flex w-fit items-center justify-around gap-10 rounded-2xl bg-white bg-opacity-50 px-6 py-3 backdrop-blur">
        <a href="#" className="hover:text-zinc-700">
          Home
        </a>
        <a href="#skill" className="hover:text-zinc-700">
          Skills
        </a>
        <a href="#project" className="hover:text-zinc-700">
          Projects
        </a>
        <a href="#contact" className="hover:text-zinc-700">
          Contact
        </a>
      </div>
    </nav>
  );
}
