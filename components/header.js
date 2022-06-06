import MobileNav from "../components/mobileNav.js";

const Header = () => {

    function scrollToProjects(div) {
        if (typeof window !== "undefined") {
    
          const element = document.getElementById(div);
          if (element != null){
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }

    return(
        <header className="px-8 py-8 2xl:px-64 xl:px-32">
          <nav className="flex justify-between anim-fade-down">
            <div>
              <h2 className="text-2xl font-bold uppercase font-mons tracking-widest">
                Scott Peters
              </h2>
            </div>
            <div>
              <ul className="hidden md:inline-flex gap-2 md:gap-10">
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
              </ul>
            </div>

            <MobileNav />

          </nav>
        </header>
    );
}

export default Header