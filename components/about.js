import Link from 'next/link';

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-6 py-24 px-8 xl:px-32 2xl:px-64 bg-gray-200 anim-fade-in">
      <h1 className="mx-auto text-4xl md:text-5xl uppercase font-mons font-normal">
        About
      </h1>

      <div className="flex flex-col 2xl:flex-row 2xl:justify-center lg:gap-12 gap-8">
        <div className="flex flex-col text-center 2xl:text-left gap-6 basis-1/2">
          <h2 className="font-bold font-mons uppercase">Get To Know Me</h2>
          <p className="text-lg 2xl:text-xl font-mons font-normal tracking-wide">
            Currently enrolled in Western Governor&apos;s University working
            towards my Bachelor&apos;s in Software Development with a focus on
            C# (although I'm starting to enjoy JavaScript) - expected graduation is late 2022/early 2023. I am the founder of {" "}
            <span className="text-emerald-800 font-bold underline">
              <Link href="https://digitalemberstudio.com">
                Digital Ember Studio
              </Link>
            </span>{" "}
            , a local web development studio that helps small businesses with their web presense.
          </p>
          <p className="text-lg 2xl:text-xl font-mons font-normal tracking-wide">
            In the little spare time I have, I enjoy photography, learning about new technologies, the occasional MMO, and messing with the Unity game engine.
          </p>
        </div>

        <div className="flex flex-col basis-1/2">
          <h2 className="text-center mb-6 font-bold font-mons uppercase">
            Technologies I Use
          </h2>
          <div className="flex flex-wrap justify-center 2xl:justify-start gap-4">
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              .NET CORE / BLAZOR
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              AZURE APPS/SQL DATABASE
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              GIT
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              SQL
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              REACT
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              NEXT.JS
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              TAILWIND CSS
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              HTML
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              CSS
            </h1>
            <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins">
              JAVASCRIPT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
