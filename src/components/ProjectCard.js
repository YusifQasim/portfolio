'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="w-full md:w-3/4 mx-auto   md:mt-24 p-4 hover:cursor-pointer"
    >
      <div className=" items-center w-full text-center hidden md:inline">
        <h1 className="md:text-3xl text-xl font-extrabold mb-2 text-violet-600 opacity-70">
          {project.title}
        </h1>
      </div>
      <div className=" rounded-lg  overflow-hidden h-full bg-ProjectBackground shadow-sm box">
        <div className="relative h-64 md:h-96 ">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            quality={100}
          
            priority={true}
          />

          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="p-4  ">
          <div className="flex flex-col items-start mb-4 gap-y-5 w-full">
          <div className=" items-center ml-2 w-full inline md:hidden">
        <h1 className="md:text-3xl text-xl font-extrabold mb-2 text-violet-600 opacity-70">
          {project.title}
        </h1>
      </div>
            <div className="flex  w-full flex-wrap">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className=" text-white inline px-2 py-1 rounded-full mr-2 text-sm md:text-lg"
                >
                  #{technology}
                </span>
              ))}
            </div>
            <div className="flex md:justify-center justify-start  w-full">
              {project.livePreview ? (
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-600 text-white px-4 py-2 rounded-lg mx-2 flex gap-x-1 "
                >
                  Demo
                  <Image
                    src="/click.svg"
                    alt="GitHub logo"
                    width={20}
                    height={20}
                    loading="eager"
                    priority={true}
                  />
                </a>
              ) : null}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg mx-2 flex gap-x-1"
              >
                GitHub
                <Image
                  src="/githubwhite.svg"
                  alt="GitHub logo"
                  width={24}
                  height={24}
                  loading="eager"
                  priority={true}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
