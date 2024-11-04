import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Calendar, ChevronLeft, ChevronDown, ChevronRight, ExternalLink , Mail, 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Instagram,
  ExternalLinkIcon } from 'lucide-react';
import StatsAndAchievements from "../components/StatsAndAchievements";
function Home() {
  return (
    <>
      <section id="home" className="text-white mx-6 py-3">
        <HeroSection />

        <RocketCard 
        data={[
  {
    title: "1",
    summary: "Falcon Heavy is a partially reusable heavy-lift launch vehicle designed and manufactured by SpaceX. It is currently the world's most powerful operational rocket.",
    image: "https://example.com/images/falcon-heavy.jpg"
  },
  {
    title: "2",
    summary: "Starship is a fully reusable spacecraft developed by SpaceX for missions to Mars, deep space, and Earth orbit. It's designed to carry both crew and cargo.",
    image: "https://example.com/images/starship.jpg"
  },
  {
    title: "CAN SAT",
    summary: "Atlas V is an expendable launch system built by the United Launch Alliance, used for launching satellites into orbit, primarily for NASA and the U.S. Department of Defense.",
    image: "https://example.com/images/atlas-v.jpg"
  },
  {
    title: "VSLV",
    summary: "Ariane 5 is a European heavy-lift launch vehicle developed by the European Space Agency. It has been widely used for commercial satellite launches.",
    image: "https://example.com/images/ariane-5.jpg"
  }
]}      />

      </section>
      <section>
        <MilestoneCard />
      </section>

      <section className="text-white font-heinch mx-6 my-16">
        {/* <div className="flex flex-wrap my-6">
          <div className="flex-grow text-5xl">stats</div>
          <div className="flex-grow flex flex-col gap-6">
            <StatElements heading="Projects" content="10" />
            <StatElements heading="Projects" content="10" />
          </div>
          
          <div></div>
        </div> */}

        <StatsAndAchievements />

        {/* <div className="">
          <div className="text-5xl">Achivements</div>
          <div className="flex flex-wrap gap-4">
            <AchievementCard />
            <AchievementCard />
          </div>
          <p className=" text-sm ml-2 text-gray-400 underline ">view all</p>
        </div> */}

        <div></div>
      </section>
      <section className="text-white mx-6 my-16">
        <TeamCard />
      </section>
      <Footer />
    </>
  );
}

export default Home;


export const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b -mx-2 from-gray-900 to-black text-white px-6 py-12 ">
      <motion.div 
        {...fadeIn}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Text */}
        <div className="font-heinch space-y-2">
          <motion.p 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:text-[12rem] md:text-[8rem] text-[4rem] lg:leading-[8rem] md:leading-[6rem] leading-[3rem] gradient-text"
          >
            IDEA
          </motion.p>
          <motion.p 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:text-[12rem] md:text-[8rem] text-[4rem] lg:leading-[8rem] md:leading-[6rem] leading-[3rem] gradient-text"
          >
            INNOVATION
          </motion.p>
          <motion.p 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:text-[12rem] md:text-[8rem] text-[4rem] lg:leading-[8rem] md:leading-[6rem] leading-[3rem] gradient-text"
          >
            CELL
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-white to-transparent my-8 opacity-70"
        />

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-heinch text-3xl my-4 text-center"
        >
          Make · Break · Create
        </motion.p>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105">
            Explore Projects
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export function AchievementCard() {
  return (
    <div className="group flex flex-col w-[24rem] md:w-[28rem] min-h-[30rem]  bg-primary">
      <img
        className="w-full h-80 group-hover:h-[22rem] transition-all duration-200 object-fit"
        src="https://images.pexels.com/photos/28176437/pexels-photo-28176437/free-photo-of-scented-candles-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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

export const MilestoneCard = ({ milestones }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample milestone data - replace with your actual data
  const defaultMilestones = [
    {
      date: "2024",
      title: "First Successful Launch",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.pexels.com/photos/28176437/pexels-photo-28176437/free-photo-of-scented-candles-decor.jpeg"
    },
    // Add more milestones here
  ];

  const data = milestones || defaultMilestones;

  const nextMilestone = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevMilestone = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-heinch text-white mb-4">Milestones</h2>
          <div className="h-px w-24 bg-blue-500"/>
        </motion.div>

        <div className="relative">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="relative h-[35rem] rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
              <motion.img
                src={data[currentIndex].image}
                alt={data[currentIndex].title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Navigation Buttons */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                <button 
                  onClick={prevMilestone}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Previous milestone"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                  onClick={nextMilestone}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Next milestone"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-800 p-12 rounded-xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-blue-400 mb-6">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">{data[currentIndex].date}</span>
                </div>

                <h3 className="text-4xl font-heinch text-white mb-6">
                  {data[currentIndex].title}
                </h3>

                <div className="w-12 h-1 bg-blue-500 mb-6" />

                <p className="text-gray-300 leading-relaxed mb-8">
                  {data[currentIndex].description}
                </p>

                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Award className="w-5 h-5" />
                    <span>Key Achievement</span>
                  </motion.div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-6 left-12 flex gap-2">
                {data.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-8 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-blue-500' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const RocketCard = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="my-10 px-6 py-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-heinch mb-8 text-white">Our Products</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List Section */}
          <div className="lg:col-span-2 space-y-4">
            {data?.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden"
              >
                <motion.button
                  className="w-full px-6 py-4 flex items-center justify-between group"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl font-heinch text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300 leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="mt-4 flex gap-4">
                        <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                          Learn More <ChevronRight className="w-4 h-4" />
                        </button>
                        <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                          Technical Specs <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <div className="hidden lg:block relative h-full">
            <AnimatePresence mode="wait">
              {data?.map((item, index) => (
                (hoveredIndex === index || expandedIndex === index) && (
                  <motion.div
                    key={item.image}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <div className="relative h-full w-full rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-xl font-heinch text-white mb-2">{item.title}</p>
                        <p className="text-sm text-gray-300">Click to learn more</p>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden mt-8">
          {expandedIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="rounded-xl overflow-hidden"
            >
              <img 
                src={data[expandedIndex]?.image} 
                alt={data[expandedIndex]?.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

const TeamCard = () => {
  const teamMembers = [
    {
      name: "Piyush",
      image: "https://avatars.githubusercontent.com/u/106035971?v=4",
      designation: "CEO",
      linkedin: "https://www.linkedin.com/in/piyush-kumar-a-tech-enthusiast/",
      bio: "Tech enthusiast and visionary leader"
    },
    {
      name: "Prateek",
      image: "https://avatars.githubusercontent.com/u/106035971?v=4",
      designation: "CEO",
      linkedin: "https://www.linkedin.com/in/piyush-kumar-a-tech-enthusiast/",
      bio: "Innovation specialist and strategic thinker"
    },
    {
      name: "Prateek",
      image: "https://avatars.githubusercontent.com/u/106035971?v=4",
      designation: "CEO",
      linkedin: "https://www.linkedin.com/in/piyush-kumar-a-tech-enthusiast/",
      bio: "Innovation specialist and strategic thinker"
    },
    {
      name: "Prateek",
      image: "https://avatars.githubusercontent.com/u/106035971?v=4",
      designation: "CEO",
      linkedin: "https://www.linkedin.com/in/piyush-kumar-a-tech-enthusiast/",
      bio: "Innovation specialist and strategic thinker"
    }
  ];

  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl font-heinch text-white mb-4"
            >
              Our Team
            </motion.h2>
            <div className="h-1 w-24 bg-blue-500"/>
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <a href="/members">View All Team</a> <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800">
                <motion.div
                  className="relative w-full pt-[100%]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                </motion.div>

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  animate={hoveredMember === index ? { y: 0, opacity: 1 } : {}}
                >
                  <h3 className="text-2xl font-heinch text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-2">{member.designation}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

function TeamCardElement ({name, image, designation, linkedin}) {
  return (
    <div className="flex flex-col gap-2 m-2">
      <img src={image} alt="" className="w-40 h-40 rounded-full" />
      <div className="flex flex-col">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm text-gray-400">{designation}</p>
        <a href={linkedin} target="_blank" className="text-sm text-gray-400 underline">linkedin</a>
      </div>
    </div>
  )
}

export const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Members", href: "#" },
    { label: "Our Mission", href: "#" },
    { label: "Technology", href: "#" }
  ];
  const resourceLinks = [
    // { label: "Launch Services", href: "#" },
    { label: "Research", href: "#" },
    { label: "Documentation", href: "#" },
    // { label: "Whistleblower", href: "#" }
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Youtube, href: "#", label: "Youtube" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Brand Section */}
          <motion.div {...fadeIn}>
            <div className="mb-8">
              <h2 className="text-4xl font-heinch mb-2">IIC</h2>
              <p className="text-xl text-gray-400">Rocketry Division</p>
            </div>
            <p className="text-gray-400 max-w-md mb-8">
              Pushing the boundaries of innovation in rocketry and space technology. 
              Join us in our mission to reach for the stars.
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors group"
            >
              Join Our Team
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-heinch mb-6">STAY IN OUR ORBIT</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for updates on launches, innovations, and opportunities.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/50 border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Links */}
          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-medium mb-6">Club</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 group"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resource Links */}
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <h4 className="text-lg font-medium mb-6">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 group"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="lg:col-span-2">
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <div className="space-y-4">
              <a 
                href="mailto:info@iic.in"
                className="flex items-center gap-3 text-gray-400 hover:text-white group"
              >
                <Mail className="w-5 h-5" />
                <span>info@iic.in</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} IIC Rocketry. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};