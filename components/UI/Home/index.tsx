"use client";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

interface Apps {
  label: string;
  imageSrc: string;
  description: string;
  isCompleted: boolean;
}

const ShowAllApps = () => {
  const [allApps] = useState<Apps[]>([
    { 
      label: "Facebook",
      imageSrc: "/images/logos/facebook_logo.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur id natus dolorum est pariatur eos, repudiandae itaque. Assumenda, distinctio expedita!",
      isCompleted: false,
    },
    {
      label: "WhatsApp",
      imageSrc: "/images/logos/whatsapp_logo.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur id natus dolorum est pariatur eos, repudiandae itaque. Assumenda, distinctio expedita!",
      isCompleted: false,
    },
    {
      label: "Twitter",
      imageSrc: "/images/logos/twitter_logo.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur id natus dolorum est pariatur eos, repudiandae itaque. Assumenda, distinctio expedita!",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <div className="md:max-w-[1024px] mx-auto w-11/12 mt-10">
        <div className="flex items-center gap-8 flex-wrap">
          {allApps.map((app, idx) => (
            <div
              key={idx}
              className="shadow-lg duration-200 overflow-hidden max-w-[20rem] hover:shadow-xl rounded-lg flex flex-col"
            >
              <div className="overflow-hidden w-full max-h-[15rem] group relative">
                <div className="absolute w-full h-full bg-black bg-opacity-25 group-hover:bg-opacity-50 duration-200"></div>
                <Image
                  src={app.imageSrc}
                  alt={app.label}
                  width={300}
                  height={300}
                  className="group-hover:scale-105 duration-200 w-full h-full object-cover"
                />
              </div>

              <div className="p-4 space-y-3 text-start">
                <p className="text-xl font-bold">{app.label}</p>
                <p className="font-light text-gray-700 text-sm">{app.description}</p>

                <button className="w-full py-2 rounded-md border border-gray-300 duration-200 hover:bg-gray-300">Open <FontAwesomeIcon icon={faLink} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowAllApps;
