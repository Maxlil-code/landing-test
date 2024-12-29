"use client";

import { CustomButton } from "@/app/components";
import { motion } from "framer-motion";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "../relocation-from-africa/from-africa.scss";

const LargeBusiness = () => {
  const cons: string[] = [
    "Unclarity about country-specific compliance, visa procedure, required vaccinations, expense reporting & much more.",
    "Hundreds of hours spent planning and fulfilling requirements for travel using disparate service providers.",
    "Significantly higher associated costs from either outsourcing to travel agencies or manual processes.",
  ];
  const pros: string[] = [
    "Availability of round-the-clock support, offering assistance with any inquiries, emergencies, or changes to their travel plans.",
    "Coordination of adventure activities such as trekking, white-water rafting, and more, catering to better bonding experiences for your team",
    "Access to luxurious accommodations, and exclusive safari experiences to our users",
  ];

  return (
    <div className="compliance-page">
      {/* hero section  */}
      <div className="hero">
        <div className="sub">
          <div className="right">
            <div className="content">
              <h2>Opening up Africa for business</h2>
              <h1>One-click Business travel to Africa</h1>
              <p>
                Whether standalone or integrated, Workabroad provisions visa, compliance, payment & expense
                reporting, airport pickup, travel & health insurance procurement & vaccination appointments.
              </p>
              <div className="buttons">
                <Link href={"https://app.useconsul.com"} target="_blank">
                  <CustomButton
                    text="Get onboard"
                    skin="primary"
                    type="button"
                  />
                </Link>
                <Link
                  href={
                    "https://outlook.office365.com/owa/calendar/ConsulBusinessClasstoAfrica@cloudigital.nl/bookings/"
                  }
                  target="_blank"
                >
                  <CustomButton
                    text="Book a demo"
                    skin="border"
                    type="button"
                    icon={<FontAwesomeIcon icon={faArrowRight} />}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="sub"></div>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="con">
          <div className="left">
            <Image src={"/images/woman-suit2.jpg"} alt="hero" width={500} height={400} />
          </div>
          <div className="right">
            <div className="card-container">
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="card">
                  <div className="card-front">
                    <Image
                      src={"/images/icons/details-icon-1.png"}
                      alt="hero"
                      width={75}
                      height={75}
                    />
                    <h3>Compliance & Visa</h3>
                  </div>
                  <div className="card-back">
                    <h3>Compliance & Visa</h3>
                    <p>
                      Automatically prepared & submitted in accordance with EU
                      and country regulation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="card-container">
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="card">
                  <div className="card-front">
                    <Image
                      src={"/images/icons/details-icon-2.png"}
                      alt="hero"
                      width={75}
                      height={75}
                    />
                    <h3>Payment & expense Reporting</h3>
                  </div>
                  <div className="card-back">
                    <h3>Payment & expense Reporting</h3>
                    <p>
                      Integration with local payment providers to ease payment,
                      providing single invoice
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="card-container">
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="card">
                  <div className="card-front">
                    <Image
                      src={"/images/icons/details-icon-3.png"}
                      alt="hero"
                      width={75}
                      height={75}
                    />
                    <h3>Insurance & Vaccination</h3>
                  </div>
                  <div className="card-back">
                    <h3>Insurance & Vaccination</h3>
                    <p>
                      Airport pickup with simcard and local currency. How much
                      you need, how you need it.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="card-container">
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="card">
                  <div className="card-front">
                    <Image
                      src={"/images/icons/details-icon-4.png"}
                      alt="hero"
                      width={75}
                      height={75}
                    />
                    <h3>Consul cares</h3>
                  </div>
                  <div className="card-back">
                    <h3>Consul cares</h3>
                    <p>
                      Airport pickup with simcard and local currency. How much
                      you need, how you need it.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* cons and pros  */}

      <section className="content-1">
        <div className="con">
          <div className="left">
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>What you will get</h2>
              <p>
                Strong partnerships with local tour operators, accommodations,
                and guides across Africa to ensure access to authentic
                experiences and insider insights.
              </p>
              <ul>
                <li>
                  Strong partnerships with local tour operators, accommodations,
                  and guides across Africa to ensure access to authentic
                  experiences and insider insights.
                </li>
                <li>
                  Post-trip assistance to gather feedback, address any concerns,
                  and provide assistance with future travel plans or additional
                  services.
                </li>
                <li>
                  Provision of information and recommendations regarding health
                  precautions, vaccinations, and safety guidelines specific to
                  each destination in Africa.
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="right">
            <Image
              src={"/images/office.png"}
              alt="hero"
              width={400}
              height={230}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default LargeBusiness;
