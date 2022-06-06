import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

const SideSocialLinks = () => {
  return (
    <div className="md:fixed right-0 2xl:right-0 top-1/2 flex flex-row md:flex-col gap-2 justify-center m-6 anim-fade-left">
      <button
        aria-label="Github"
        className="hover:scale-110 opacity-70 hover:opacity-100 transition border-solid border border-black p-2"
      >
        <Link href="https://github.com/Blathe"><FontAwesomeIcon icon={faGithub} size="2x" /></Link>
      </button>
      <button
        aria-label="LinkedIn"
        className="hover:scale-110 opacity-70 hover:opacity-100 transition border-solid border border-black p-2"
      >
        <Link href="https://www.linkedin.com/in/scott-peters-b93919223/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></Link>
      </button>
    </div>
  );
}

export default SideSocialLinks