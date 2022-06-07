import { useState } from 'react';
import Head from "next/head";

import AboutSection from "../components/about.js";
import SideSocialLinks from "../components/sideSocialLinks.js";
import HeroSection from "../components/heroSection.js";
import ProjectsSection from "../components/projectsSection.js";
import ContactSection from "../components/contactSection.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";

export default function Home() {
  const [theme, setTheme] = useState("dark");


  return (
    <div className={theme}>
      <div className="container-fluid p-0 m-0 dark:bg-slate-800">
        <Head>
          <title>Scott Peters - Full Stack Web Developer Portfolio</title>
          <meta
            name="description"
            content="A portfolio of Scott Peters, a Full Stack Web Developer who builds web applications and websites."
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
