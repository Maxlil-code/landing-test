"use client";

import { CustomButton } from "@/app/components";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./mira-for-agencies.scss";
// import Link  from "next/link";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MiraForAgencies = () => {
  const cons: string[] = [
    "Going through the accreditation and recognition process alone & unguided, resulting in increased length and expenditure as well as much greater error rate. ",
    "Arrangements for accommodation, bank accounts, various cautions & deposits, insurance & travel are left in the hands of the hire.",
    "Disparate service providers, unintegrated communication & uncertainty around deadlines and availability. ",
  ];
  const pros: string[] = [
    "Clarity on every step of the relocation process with 24/7 support, including integration for employer coverage of relocation costs.",
    "A complete package for the hire, including various financing options, offering hires peace of mind in making the move to the West. ",
    "Enter the employee start date in Consul. He'll be there on time.",
  ];

  const title: string = "The experience mira brings to you";

  const navigateTo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="compliance-page">
      {/* hero section  */}
      <div className="w-screen h-[92vh] flex justify-center items-center">
        <div className="w-11/12 min-w-[80vw] h-[40vh] min-h-[65vh] flex self-center md:flex-col md:h-[45vh] lg:flex-row lg:h-screen">
          <div className="w-full md:w-10/12 lg:w-[55%] h-full flex flex-col justify-evenly items-start">
            <span className="text-[1.5rem] lg:text-[4rem] md:text-[3rem] font-[700] text-[#053545] capitalize text-balance line-clamp-3 ">
              {`Automate every part of your Candidates' Relocation journey. All inside Whatsapp.`}
            </span>

            <span className="text-base leading-9 w-[90%] text-balance md:text-wrap line-clamp-4 md:leading-8 md:line-clamp-5">
              All you need to do is send your candidates a phone number. Mira
              will handle candidate vetting, CV generation, verification of
              degrees, etc. All via Whatsapp!
            </span>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-col flex w-11/12 justify-around items-center md:w-auto md:justify-start md:flex-row"
            >
              <CustomButton
                onClick={() =>
                  navigateTo(
                    "https://outlook.office365.com/owa/calendar/ConsulBusinessClasstoAfrica@cloudigital.nl/bookings/"
                  )
                }
                text="Request a demo"
                skin="primary"
                type="button"
              />

              <Link
                to="youtubeVideo"
                spy={true}
                smooth={true}
                duration={500}
                className="w-full mt-4 md:mt-0 md:ml-4"
              >
                <CustomButton
                  text="Learn more!"
                  skin="border"
                  type="button"
                  icon={<FontAwesomeIcon icon={faArrowRight} />}
                />
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-[45%] lg:flex h-full flex justify-around items-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              className="w-[32%] h-full flex flex-col justify-center items-center"
            >
              <div className="w-full h-[40%] top-6 relative">
                <Image
                  src="/images/IMG_4489.jpg"
                  alt="hero"
                  fill
                  className="rounded-md shadow-lg relative object-cover "
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="w-[32%] h-full flex flex-col justify-center items-center"
            >
              <div className="w-full h-[40%] mb-4 mt-8 relative">
                <Image
                  src={"/images/IMG_4491.jpg"}
                  alt="hero"
                  fill
                  className="rounded-md shadow-lg  object-cover"
                />
              </div>
              <div className="w-full h-[40%]  relative">
                <Image
                  src="/images/IMG_4490.jpg"
                  alt="hero"
                  fill
                  className="rounded-md shadow-lg object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="w-[32%] h-full flex flex-col justify-start items-center"
            >
              <div className="w-full h-[40%] mb-4 mt-8 relative">
                <Image
                  src={"/images/IMG_4493.jpg"}
                  alt="hero"
                  fill
                  className="rounded-md shadow-lg  object-cover"
                />
              </div>
              <div className="w-full h-[40%] relative">
                <Image
                  src="/images/IMG_4492.jpg"
                  alt="hero"
                  fill
                  className="rounded-md shadow-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="w-full h-[25vh] md:h-[65vh] bg-[#053545] flex justify-center items-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-full md:mt-12 justify-center items-center flex flex-col">
            <span className="capitalize text-white text-[1.5rem] mb-2 md:mb-0 md:text-[2.5rem]">
              Why Mira AI
            </span>
            <span className="text-gray-400 text-sm text-center md:text-[1rem] font-normal my-1">
              Mira saves you time and money by fully automating the entire
              candidate recruitment & relocation journey{" "}
            </span>
            <span className="text-gray-400 text-sm md:text-[1rem] font-normal">
              Or you can get your own whitelabel AI solution
            </span>
          </div>
        </motion.div>

        <div className="w-11/12 hidden relative top-32 md:flex justify-center items-center">
         

          

      
        </div>
      </section>

      <section className="md:hidden w-full h-[100vh] bg-[#009f9a13] flex self-center justify-around items-center flex-col">
     


     

        
      </section>

      <section
        id="youtubeVideo"
        className="w-full h-[100vh] flex flex-col justify-center items-center mt-8 bg-[#009f9a13]"
      >
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-3/4 h-full flex flex-col justify-around items-center"
        >
          <div className="w-full h-full flex flex-col justify-around items-center">
            <Link
              to={"https://cal.com/shaneyankam/workabroad-demo"}
              target="_blank"
            >
              <CustomButton
                onClick={() =>
                  navigateTo("https://cal.com/shaneyankam/workabroad-demo")
                }
                text="Request a demo"
                skin="primary"
                type="button"
              />
            </Link>
          </div>
        </motion.div>
      </section>

     
    </div>
  );
};

export default MiraForAgencies;
