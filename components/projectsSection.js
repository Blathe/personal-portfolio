import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

const ProjectsSection = () => {
  return (
    <>
      <div
        id="projects"
        className="flex flex-col gap-12 anim-fade-in py-24 px-8 sm:px-12 xl:px-32 2xl:px-64 dark:text-white"
      >
        <h1 className="mx-auto text-4xl md:text-5xl uppercase font-mons font-normal">
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-20 xl:gap-8 xl:grid-cols-3 mx-auto">
        <div className="w-100">
            <div className="px-8 lg:px-36 xl:px-8 2xl:px-0 flex flex-col gap-4 h-full">
              <div className="outline outline-4 outline-emerald-800 overflow-hidden">
                <img
                  className="hover:scale-125 transition duration-750 position-cover"
                  src="dashboard.jpg"
                  alt="A colorful dashboard"
                  width="900"
                  height="553"
                />
              </div>
              <div className="mt-8 flex gap-4 flex-col font-mons grow">
                <div className="flex flex-row gap-4">
                  <h1 className="text-lg font-bold">Ticket Management System (Capstone)</h1>
                  <a href="https://github.com/blathe/djangotickets" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </div>
                <p>
                  This was my capstone project for my Software Engineering degree. It is a simple Ticket Management system with session based auth, basic CRUD functionality, report generation (CSV), filtering, and pagination.
                </p>
                <p>
                  <span className="font-bold">Technologies:</span> Python/Django, Bootstrap 5, PostgreSQL, Heroku
                </p>
              </div>
              <a className="text-center shadow-md font-mons text-white bg-emerald-700 font-medium rounded-md text-md px-10 py-2.5 hover:scale-105 hover:shadow-lg transition w-full" href="https://djangotickets.herokuapp.com/" target="_blank" rel="noreferrer">View Deployed Application</a>
            </div>
          </div>
          <div className="w-100">
            <div className="px-8 lg:px-36 xl:px-8 2xl:px-0 flex flex-col gap-4 h-full">
              <div className="outline outline-4 outline-emerald-800 overflow-hidden">
                <img
                  className="hover:scale-125 transition duration-750 object-none"
                  src="digital-ember.webp"
                  alt=""
                  width="900"
                  height="553"
                />
              </div>
              <div className="mt-8 flex flex-col gap-4 font-mons grow">
                <h1 className="text-lg font-bold">
                  Digital Ember Studio - Small Business Website
                </h1>
                <p>
                  Digital Ember Studio is a website built using
                  NextJS and Tailwind CSS. I designed a mockup of the website in Figma, and did the logo in Adobe Illustrator.
                </p>
                <p>
                  <span className="font-bold">Technologies:</span> Next.js, Tailwind
                  CSS, Figma, Adobe Illustrator, Netlify
                </p>
              </div>
              <a href="https://digitalemberstudio.com" target="_blank" rel="noreferrer" className="text-center shadow-md font-mons text-white bg-emerald-700 font-medium rounded-md text-xl px-10 py-2.5 hover:scale-105 hover:shadow-lg transition w-full">View Live Site</a>
            </div>
          </div>
          <div className="w-100 h-full">
            <div className="px-8 lg:px-36 xl:px-8 2xl:px-0 flex flex-col gap-4 h-full">
              <div className="outline outline-4 outline-emerald-800 overflow-hidden">
                <img
                  className="hover:scale-125 transition duration-750"
                  src="tesla.webp"
                  alt=""
                  width="900"
                  height="553"
                />
              </div>
              <div className="mt-8 flex flex-col gap-4 font-mons grow">
                <div className="flex flex-col grow gap-4">
                  <h1 className="text-lg font-bold">Tesla Clone - Front End</h1>
                  <p>
                    I liked Tesla&apos;s website so I wanted to try to recreate the front end of it. Made with Next.js, and Tailwind CSS - deployed to Netlify.
                  </p>
                  <p>
                    <span className="font-bold">Technologies:</span> Next.js, Tailwind CSS, Netlify
                  </p>
                </div>
              </div>
              <a href="https://teslaclone123.netlify.app" target="_blank" rel="noreferrer" className="text-center shadow-md font-mons text-white bg-emerald-700 font-medium rounded-md text-xl px-10 py-2.5 hover:scale-105 hover:shadow-lg transition w-full">View Live Site</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
