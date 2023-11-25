import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

const SideSocialLinks = () => {
  return (
    <div className="md:fixed right-0 2xl:right-0 top-1/2 flex flex-row md:flex-col gap-2 justify-center m-6 anim-fade-left dark:text-white">
      <a className="hover:scale-110 opacity-70 hover:opacity-100 transition border-solid border border-black p-2 dark:border-white" href="https://github.com/blathe" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
      <a className="hover:scale-110 opacity-70 hover:opacity-100 transition border-solid border border-black p-2 dark:border-white" href="https://www.linkedin.com/in/scott-peters-b93919223/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
    </div>
  );
};

export default SideSocialLinks;
