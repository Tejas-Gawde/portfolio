export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-center gap-10 w-fit items-center p-4 sticky top-0 z-50">
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
