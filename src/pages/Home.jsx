import React from "react";

function Home() {
  return (
    <>
      <section className="text-white mx-6 py-3">
        <div className="font-heinch text-[12rem] leading-[8rem] my-20">
          <p>IDEA</p>
          <p>INOVATION</p>
          <p>CELL</p>
        </div>
        <div className="outline outline-[1px] opacity-70 "></div>
        <p className="font-heinch text-2xl my-4">Make Break Create</p>

        

      </section>
      <section>
        <MilestoneCard />
      </section>

      <section className="text-white font-heinch mx-6 my-16">
        <div className="flex flex-wrap my-6">
          <div className="flex-grow text-5xl">stats</div>
          <div className="flex-grow flex flex-col gap-6">
            <StatElements heading="Projects" content="10" />
            <StatElements heading="Projects" content="10" />
          </div>
          <div></div>
        </div>

        <div className="">
          <div className="text-5xl">Achivements</div>
          <div className="flex flex-wrap ">
            <AchievementCard />
          </div>
        </div>

        <div></div>
      </section>
      <footer className="bg-gray-900 text-white py-12 relative">
      {/* Main content */}
      <div className="container mx-auto px-6">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Logo section */}
          <div>
            <div className="mb-6">
              {/* Simplified logo representation */}
              <div className="text-2xl font-bold">
                SKYROOT
                <div className="text-sm font-light mt-1">AEROSPACE</div>
              </div>
            </div>
          </div>

          {/* Newsletter section */}
          <div>
            <h3 className="text-lg mb-4">STAY IN OUR ORBIT</h3>
            <form onSubmit={null} className="flex gap-2">
              <input
                type="email"
                placeholder="enter your email id"
                className="bg-gray-800 px-4 py-2 flex-grow rounded-sm"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-200 transition-colors"
              >
                submit
              </button>
            </form>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Section */}
          <div>
            <h3 className="text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Career</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Launch Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Whistleblower</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section with contact and social */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <a href="mailto:info@skyroot.in" className="hover:text-gray-300">
              info@skyroot.in
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {/* <Facebook className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-gray-300 cursor-pointer" /> */}
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            Copyright © 2022 Skyroot Aerospace. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Home;

export function AchievementCard() {
  return (
    <div className="group flex flex-col w-[24rem] md:w-[28rem] min-h-[30rem] bg-primary ">
      <img
        className="w-full h-80 group-hover:h-[22rem] object-fit"
        src="https://scontent.frrk2-1.fna.fbcdn.net/v/t39.30808-6/300752840_450356010443331_4214501075564469930_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_539QPY6kdAQ7kNvgFr2Sxb&_nc_ht=scontent.frrk2-1.fna&_nc_gid=AVh5W0DUtVe5bZlqoiVo5aC&oh=00_AYC7FQUapcaj1Y8_FUDF8vfJF569KohmDCoRJIZIOUCFzQ&oe=6724295C"
        alt=""
      />
      <div className="px-2 py-2 h-[10rem]">
        <div className="text-3xl">title</div>
        <p className="font-sans text-xs text-gray-400 cursor-pointer mt-auto">
          read more
        </p>
      </div>
    </div>
  );
}

export function StatElements({ heading, content }) {
  return (
    <div>
      <p className="text-sm text-gray-300">{heading}</p>
      <p className="text-7xl">{content} </p>
    </div>
  );
}

export function MilestoneCard(){
  return (
    <div className="w-full font-heinch text-white relative">
      <div className="grid grid-cols-3  mt-4">
        <img
          className="w-full col-span-3 lg:col-span-2 h-[35 rem] object-cover"
          src="https://scontent.frrk2-1.fna.fbcdn.net/v/t39.30808-6/300752840_450356010443331_4214501075564469930_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_539QPY6kdAQ7kNvgFr2Sxb&_nc_ht=scontent.frrk2-1.fna&_nc_gid=AVh5W0DUtVe5bZlqoiVo5aC&oh=00_AYC7FQUapcaj1Y8_FUDF8vfJF569KohmDCoRJIZIOUCFzQ&oe=6724295C"
          alt=""
        />
        <div></div>
      </div>
      <div className="bg-primary px-6 py-16 ml-10 lg:ml-[58%] max-h-[32rem] relative bottom-10  lg:absolute lg:bottom-0">
        <p className="text-4xl my-3">Milestone</p>
        <div className="w-full outline outline-[1px] outline-gray-400 "></div>
        <div>
          <p className="text-5xl my-3 pt-6">Title it is the title</p>
          <p className="font-sans text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="underline font-sans text-gray-300 text-sm mt-4 ">Read more</p>
        </div>

      </div>
    </div>
  )
}

export function RocketCard({data}){
  return (
    <div className="my-10 px-16 w-full bg-gray-700 h-20">
      <div>
        <div>

        </div>
      </div>
      <div></div>
    </div>
  )
}