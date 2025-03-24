import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import "./../../i18n";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="bg-seconary h-[60px] hidden lg:flex items-center text-color-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="cusContainer mx-auto flex justify-between items-center px-15  xl:px-0">
          <p className="xl:text-lg lg:text-sm font-sans">{t("openingHours")}</p>
          <div>
            <ul className="flex flex-row  text-lg sm:text-xl ">
              <li>
                <a
                  href="https://www.facebook.com/acejapanltd"
                  className="block xl:px-4 px-2 py-4 ">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="block xl:px-4 px-2 py-4 ">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="block xl:px-4 px-2 py-4 ">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="block xl:px-4 px-2 py-4 ">
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TopBar;
