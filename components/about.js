import Tag from "../components/tag.js";

const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col gap-6 py-24 px-8 xl:px-32 2xl:px-64 bg-gray-200 anim-fade-in dark:bg-slate-900 dark:text-white">
      <h1 className="mx-auto text-4xl md:text-5xl uppercase font-mons font-normal">
        About
      </h1>

      <div className="flex flex-col 2xl:flex-row 2xl:justify-center lg:gap-12 gap-8">
        <div className="flex flex-col text-center 2xl:text-left gap-6 basis-1/2">
          <h2 className="font-bold font-mons uppercase">Get To Know Me</h2>
          <p className="text-lg 2xl:text-xl font-mons font-normal tracking-wide">
            Currently enrolled in Western Governor&apos;s University working
            towards my Bachelor&apos;s in Software Development with a focus on
            C# (although I&apos;m starting to enjoy JavaScript) - expected
            graduation is late 2022/early 2023.
          </p>
          <p className="text-lg 2xl:text-xl font-mons font-normal tracking-wide">
            In the little spare time I have, I enjoy photography, fly fishing, and reading up on
            new technologies.
          </p>
        </div>

        <div className="flex flex-col basis-1/2">
          <h2 className="text-center mb-6 font-bold font-mons uppercase">
            Technologies I Use
          </h2>
          <div className="flex flex-wrap justify-center 2xl:justify-start gap-4">
            <Tag title=".net core / blazor" />
            <Tag title="azure apps/sql database" />
            <Tag title="git" />
            <Tag title="sql" />
            <Tag title="react" />
            <Tag title="next.js" />
            <Tag title="tailwind css" />
            <Tag title="html" />
            <Tag title="css" />
            <Tag title="javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
