import React from "react";
import { Send } from "lucide-react";
import { SlSocialDribbble } from "react-icons/sl";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import IconComponent from "../IconComponent";
import { fadeInFL, fadeInFR, fadeUp } from "../../animations";
import { motion } from "framer-motion";
import Container from "../../shared/Container";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[300px] bg-[url(/Group_39557.svg)]  xl:mt-0 px-4">
        <div className="container mx-auto lg:px-20 h-full lg:flex-nowrap flex-wrap flex justify-between items-center overflow-x-hidden lg:gap-30 ">
          <div className="text-left">
            <motion.p
              variants={fadeInFL(0,3)}
              initial="hidden"
              whileInView="show"
              className="md:text-5xl text-2xl  font-bold  text-white">
              Ready to bring your ideas to life?
            </motion.p>
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              className="pt-5  text-white">
              Let’s work together to transform your vision into a success story.
              Contact us today, and let ACE Japan guide you every step of the
              way.
            </motion.p>
          </div>
          <motion.div
            variants={fadeInFR(0.3)}
            initial="hidden"
            whileInView="show">
            <button className="w-[120px] h-[50px] bg-white text-blue cursor-pointer" onClick={() => navigate("/contactus")}>
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-auto bg-dark-grey ">
        <Container className="px-5 md:px-5 py-10">
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className="flex xl:flex-nowrap  flex-wrap md:justify-around  xl:justify-around md:items-start space-y-10 md:space-y-0">
            <div className="text-center md:text-left w-full md:w-auto">
              <img
                src="/logo.svg"
                alt="logoImg"
                className="w-[128px] mx-auto md:mx-0"
              />
              <motion.p
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="show"
                className="text-lg text-white mt-5">
                Copyright © 2025 ACE Japan Ltd.
                <br />
                All rights reserved
              </motion.p>

              {/* Social Media Icons */}
              <div className="mt-5 flex justify-center md:justify-start space-x-3">
                <IconComponent icon={FaInstagram} delay={0.2} />
                <IconComponent icon={SlSocialDribbble} delay={0.3} />
                <IconComponent icon={FaTwitter} delay={0.4} />
                <IconComponent icon={FaYoutube} delay={0.5} />
              </div>
            </div>

            {/* Middle Section: Links */}
            <div className="flex flex-col md:flex-row md:space-x-16 w-full md:w-auto text-center md:text-left">
              {/* Company Links */}
              <div>
                <motion.p
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="text-xl font-semibold text-white">
                  Company
                </motion.p>
                <motion.ul
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="text-lg space-y-2 pt-2 text-gray-300">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                  <li>Recruit</li>
                </motion.ul>
              </div>

              {/* Support Links */}
              <div className="mt-5 md:mt-0">
                <motion.p
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="text-xl font-semibold text-white ">
                  Support
                </motion.p>
                <motion.ul
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="text-lg space-y-2 pt-2 text-gray-300">
                  <li>Help center</li>
                  <li>Terms of service</li>
                  <li>Legal</li>
                  <li>Privacy policy</li>
                  <li>Status</li>
                </motion.ul>
              </div>
            </div>

            {/* Right Section: Newsletter */}
            <div className="w-full md:w-auto text-center md:text-left">
              <motion.p
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="show"
                className="text-xl font-semibold text-white md:pt-10 md:text-center lg:pt-0 ">
                Stay up to date
              </motion.p>
              <motion.div
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="show"
                className="text-lg space-y-2 pt-2 flex justify-center md:justify-start">
                <div className="flex items-center bg-white/15 justify-between rounded-xl w-full md:w-fit py-3 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none text-gray-100 px-2"
                    placeholder="Your email address"
                  />
                  <Send className="text-white cursor-pointer hover:text-black" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
