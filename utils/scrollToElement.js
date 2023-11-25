const scrollToElement = (div) => {
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

export default scrollToElement;