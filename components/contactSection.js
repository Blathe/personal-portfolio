import { useState } from "react";
import validateEmail from "../utils/emailValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faArrowRight,
  faSpinner,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const ContactSection = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [submitButton, setSubmitButton] = useState({
    text: "Send Message",
    icon: faArrowRight,
    animation: "",
    disabled: true,
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    validateForm();
  };

  const validateForm = () => {
    if (
      formState.fullName.length > 3 &&
      formState.message.length > 10 &&
      validateEmail(formState.email)
    ) {
      setSubmitButton({ ...submitButton, disabled: false });
    } else {
      setSubmitButton({ ...submitButton, disabled: true });
    }
  };

  const handleSubmit = (e) => {
    if (
      formState.fullName != "" &&
      validateEmail(formState.email) &&
      formState.message != ""
    ) {
      e.preventDefault();

      updateSubmitButton();
      let submitButton = document.getElementById("submit-button");
      submitButton.disabled = true;
      let myForm = document.getElementById("contact-form");
      let formData = new FormData(myForm);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          showSuccessScreen();
        })
        .catch((error) => alert(error));
    }
  };

  const updateSubmitButton = () => {
    setSubmitButton({
      ...submitButton,
      text: "Sending...",
      icon: faSpinner,
      animation: "animate-spin",
    });
  };

  const showSuccessScreen = () => {
    let successBanner = document.getElementById("success-banner");
    successBanner.style.height = "100%";
    setTimeout(showSuccessMessage, 1000);
  };

  const showSuccessMessage = () => {
    var childDivs = document
      .getElementById("success-banner")
      .getElementsByClassName("success-message");
    for (var i = 0; i < childDivs.length; i++) {
      childDivs[i].classList.remove("hidden");
    }
  };

  return (
    <div
      id="contact-section"
      className="flex flex-col gap-6 py-24 bg-emerald-700 anim-fade-in dark:bg-slate-900 dark:text-white"
    >
      <h2 className="mx-auto text-4xl lg:text-5xl uppercase font-mons font-normal pb-12 text-white">
        LET&apos;S CONNECT
      </h2>
      <div className="mx-auto font-mons text-normal bg-white w-4/5 lg:w-3/5 py-8 lg:py-12 relative dark:bg-slate-700">
        <div
          id="success-banner"
          className="absolute z-50 left-0 bottom-0 w-full h-0 bg-emerald-600 transition-all duration-700 flex flex-col justify-center gap-2 text-xl"
        >
          <FontAwesomeIcon
            className="hidden success-message text-white anim-fade-up"
            id="button-icon"
            icon={faCheck}
            size="3x"
          />
          <h2 className="hidden success-message mx-auto text-white anim-fade-up">
            Message Sent
          </h2>
          <p className="hidden success-message mx-auto text-white anim-fade-up">
            I&apos;ll be in touch shortly!
          </p>
        </div>
        <form
          id="contact-form"
          name="contact"
          className="flex flex-col gap-8 px-10 mx-auto"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact"></input>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col flex-grow">
              <label className="font-bold" htmlFor="full-name">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChange}
                required
                className="h-16 p-2 border-b-4 border-gray-300 outline-none focus:border-emerald-600 dark:focus:border-cyan-700 transition-all dark:bg-gray-800"
                name="fullName"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <label className="font-bold" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChange}
                required
                className="h-16 p-2 border-b-4 border-gray-300 outline-none focus:border-emerald-600 dark:focus:border-cyan-700 transition-all dark:bg-gray-800"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <label className="font-bold" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              onChange={handleChange}
              required
              className="p-2 resize-none border-b-4 border-gray-300 outline-none focus:border-emerald-600 dark:focus:border-cyan-700 transition-all dark:bg-gray-800"
              name="message"
              type="text"
              placeholder="Enter your message"
              rows="8"
              resizable="false"
            />
          </div>
          <button
            disabled={submitButton.disabled}
            id="submit-button"
            aria-label="submit-contact-form"
            className="mx-auto lg:mx-0 w-56 p-4 bg-emerald-700 rounded-md text-white font-mons text-xl hover:bg-emerald-900 hover:cursor-pointer focus:border-0 flex flex-row justify-center gap-4 items-center transition-all hover:gap-6 disabled:hover:gap-4 disabled:bg-emerald-700 disabled:opacity-40 disabled:cursor-default"
            onClick={(e) => handleSubmit(e)}
          >
            {submitButton.text}{" "}
            <FontAwesomeIcon
              className={submitButton.animation}
              id="button-icon"
              icon={submitButton.icon}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
