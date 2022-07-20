import Head from "next/head";

import AboutSection from "../components/about.js";
import SideSocialLinks from "../components/sideSocialLinks.js";
import HeroSection from "../components/heroSection.js";
import ProjectsSection from "../components/projectsSection.js";
import ContactSection from "../components/contactSection.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { useThemeContext } from "../context/theme";

export default function Home() {
  const [theme, setTheme] = useThemeContext();

  return (
    <div className={theme}>
      <div className="container-fluid p-0 m-0 dark:bg-slate-800 transition-all duration-700">
        <Head>
          <title>Scott Peters - Front End Web Developer Portfolio</title>
          <meta
            name="description"
            content="The portfolio of Scott Peters, a Front End Web Developer who builds web applications and websites."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <SideSocialLinks />
          <Footer />
        </div>
      </div>
    </div>
  );
}
