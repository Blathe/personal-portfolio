import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const ScrollDownButton = () => {
    const scrollToAbout = (div) => {
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
        <button
            aria-label="LinkedIn"
            onClick={() => {
                scrollToAbout("about");
            }}
        >
            <FontAwesomeIcon
                className="hover:scale-110 opacity-70 hover:opacity-100 rounded-full w-[32px] h-[32px] transition border-solid border border-black p-2 dark:border-white animate-bounce"
                icon={faArrowDown} size="1x" />
        </button>
    );
};

export default ScrollDownButton;
