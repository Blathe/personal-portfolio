import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const HeroSection = () => {

  const scrollToElement = (div, block) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(div);
      if (element != null) {
        element.scrollIntoView({
          behavior: "smooth",
          block: block,
        });
      }
    }
  };

  return (
    <div className="flex flex-col flex-grow items-center anim-fade-in gap-6 py-24 md:h-screen dark:text-white">
      <img
        className="rounded-full mb-16 md:mb-4 anim-fade-in outline outline-8 outline-offset-4 outline-emerald-700 shadow-2xl"
        alt="self portrait"
        src="headshot.webp"
        width="256"
        height="256"
      ></img>
      <h1 className="mx-auto text-4xl md:text-6xl uppercase font-mons font-normal">
        Hey, I<span className="text-emerald-700">&apos;</span>m{" "}
        <span className="font-oswald font-light font-bold">Scott</span>
      </h1>
      <p className="mx-auto text-center text-xl font-mons font-normal tracking-wide md:w-4/5 px-8">
        I&apos;m an aspiring{" "}
        <span className="font-bold text-emerald-800 dark:text-emerald-500">
          web developer
        </span>{" "}
        living in Northern Idaho. I enjoy creating useful and beautiful websites
        and web applications that solve real problems.
      </p>

      <p className="mx-auto text-center text-xl w-full tracking-wide font-mons font-normal md:w-3/5 px-8">
        I&apos;m looking for great people to work with - check out some of my
        projects below and let&apos;s get in touch!
      </p>
      <div className="flex flex-col md:flex-row gap-6 px-8 mx-auto items-center">
        <div>
          <button
            aria-label="Hire Me"
            onClick={() => {
              scrollToElement("contact-section", "center");
            }}
            className="shadow-md font-mons text-white bg-emerald-700 font-medium rounded-md text-xl px-10 md:px-12 py-2.5 text-center mr-2 hover:scale-105 hover:shadow-lg transition"
          >
            Let&apos;s Work Together!
          </button>
        </div>
        <div>
          <button
            aria-label="Projects"
            onClick={() => {
              scrollToElement("projects", "center");
            }}
            className="shadow-md font-mons text-white bg-emerald-700 font-medium rounded-md text-xl px-10 md:px-12 py-2.5 text-center mr-2 hover:scale-105 hover:shadow-lg transition"
          >
            My Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
