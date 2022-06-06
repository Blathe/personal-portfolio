import Link from 'next/link';

export default function ProjectsSection() {

    return(
        <>
          <div id="projects" className="flex flex-col gap-12 anim-fade-in pb-12 px-8 sm:px-12 xl:px-32 2xl:px-64 ">
            <h1 className="mx-auto text-4xl md:text-5xl uppercase font-mons font-normal pt-24">
              Projects
            </h1>

            <div className="grid grid-cols-1 gap-20 xl:gap-8 xl:grid-cols-3 mx-auto">
              <div className="w-100">
                <div className="px-8 lg:px-36 xl:px-8 2xl:px-0">
                  <div className="outline outline-4 outline-emerald-800 overflow-hidden">
                    <img className="hover:scale-125 transition duration-750"
                        src="digital-ember.webp"
                        alt=""
                        width="900"
                        height="553"
                      />
                  </div>
                  <div className="mt-8 flex flex-col gap-4 font-mons">
                    <h1 className="text-lg font-bold">Digital Ember Studio - Website</h1>
                    <p>Digital Ember Studio is a website I built from scratch using NextJS and Tailwind CSS. I did the mockup design in Figma and created the logo in Adobe Illustrator.</p>
                    <p><span className="font-bold">Stack:</span> Next.js, Tailwind CSS, Netlify CI deployment</p>
                    <div className="text-center shadow-md font-mons text-white bg-emerald-700 font-medium rounded-md text-xl px-10 py-2.5 hover:scale-105 hover:shadow-lg transition w-56">
                      <Link href="https://digitalemberstudio.com">Live Site</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="px-8 lg:px-36 xl:px-8 2xl:px-0">
                  <div className="outline outline-4 outline-emerald-800 overflow-hidden">
                    <img className="hover:scale-125 transition duration-750"
                        src="digital-ember.webp"
                        alt=""
                        width="900"
                        height="553"
                      />
                  </div>
                  <div className="mt-8 flex flex-col gap-4 font-mons">
                    <h1 className="text-lg font-bold">Coming Soon</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum exercitationem sint ipsa mollitia iure enim quam quisquam dolorem pariatur sapiente, facere doloremque veritatis, in nobis soluta dicta quo eum!</p>
                    <p><span className="font-bold">Stack:</span> </p>
                    <div className="text-center shadow-md font-mons text-white bg-emerald-700 font-medium rounded-md text-xl px-10 py-2.5 hover:scale-105 hover:shadow-lg transition w-56">
                      <Link href="https://digitalemberstudio.com">Live Site</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="px-8 lg:px-36 xl:px-8 2xl:px-0">
                  <div className="outline outline-4 outline-emerald-800 overflow-hidden">
                    <img className="hover:scale-125 transition duration-750"
                        src="digital-ember.webp"
                        alt=""
                        width="900"
                        height="553"
                      />
                  </div>
                  <div className="mt-8 flex flex-col gap-4 font-mons">
                    <h1 className="text-lg font-bold">Coming Soon</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum exercitationem sint ipsa mollitia iure enim quam quisquam dolorem pariatur sapiente, facere doloremque veritatis, in nobis soluta dicta quo eum!</p>
                    <p><span className="font-bold">Stack:</span> </p>
                    <div className="text-center shadow-md font-mons text-white bg-emerald-700 font-medium rounded-md text-xl px-10 py-2.5 hover:scale-105 hover:shadow-lg transition w-56">
                      <Link href="https://digitalemberstudio.com">Live Site</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}