export default function Navbar() {
  return (
    <nav className="container sticky top-0 z-50 mx-auto flex w-fit items-center justify-center gap-10 p-4">
      <a href="#home" className="hover:text-gray-200">
        Home
      </a>
      <a href="#skill" className="hover:text-gray-200">
        Skill
      </a>
      <a href="#project" className="hover:text-gray-200">
        Projects
      </a>
      <a href="#contact" className="hover:text-gray-200">
        Contact
      </a>
    </nav>
  );
}
