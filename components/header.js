import MobileNav from "../components/mobileNav.js";
import ThemeToggleButton from "./themeToggleButton.js";

const Header = () => {
  const scrollToProjects = (div) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(div);
      if (element != null) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className="px-8 py-8 2xl:px-64 xl:px-32 dark:text-white">
      <nav className="flex justify-between anim-fade-down">
        <div>
          <h2 className="text-2xl font-bold uppercase font-mons tracking-widest">
            Scott Peters
          </h2>
          <h4 className="text-md uppercase font-mons tracking-widest">Web Developer</h4>
        </div>
        <div>
          <ul className="hidden md:inline-flex items-center gap-2 md:gap-10">
            <li>
              <button
                aria-label="projects-button"
                className="md:text-xl tracking-widest font-bold uppercase font-mons hover:scale-105 transition"
                onClick={() => {
                  scrollToProjects("projects");
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                aria-label="contact-button"
                className="md:text-xl tracking-widest font-bold uppercase font-mons hover:scale-105 transition"
                onClick={() => {
                  scrollToProjects("contact-section");
                }}
              >
                Contact
              </button>
            </li>
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </div>

        <div className="md:hidden flex flex-row gap-8">
          <ThemeToggleButton />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
