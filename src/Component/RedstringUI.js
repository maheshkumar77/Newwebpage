import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const RedstringUI = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header Section */}
      <motion.div 
        className="bg-black text-white p-4 rounded-lg flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl font-bold">redstring | orbit</h1>
        <p className="text-sm">Building India’s first Talent marketplace for startups</p>
      </motion.div>
      
      {/* Navigation Bar */}
      <div className="bg-white mt-3 p-3 rounded-lg flex space-x-6 shadow-md">
        {["Overview", "Fundings & Investments", "Life at Redstring", "Team", "Milestones", "Opportunities", "Contact"].map((tab, index) => (
          <motion.button 
            key={index} 
            className="text-gray-600 hover:text-black font-medium relative"
            whileHover={{ scale: 1.1 }}
          >
            {tab} {tab === "Opportunities" && <IoIosArrowDown className="inline" />}
          </motion.button>
        ))}
      </div>

      {/* Company Overview Section */}
      <motion.div className="bg-white p-6 mt-5 rounded-lg shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold flex items-center">
          <MdOutlineBusinessCenter className="mr-2" /> Redstring
        </h2>
        <p className="text-gray-600">Building India’s First Talent Marketplace For Startups</p>
        <div className="mt-4 flex space-x-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">B2B</span>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Marketplace</span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Growth Stage</span>
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Valuation $10M+</span>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div className="bg-white p-6 mt-5 rounded-lg shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h3 className="text-lg font-bold">About Redstring</h3>
        <p className="text-gray-700 mt-2">
          Redstring is a Talent Marketplace focused only on Startups. We aim to connect the right problem solvers
          with startups, eliminating the wait.
        </p>
      </motion.div>

      {/* Founders Section */}
      <motion.div className="bg-white p-6 mt-5 rounded-lg shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h3 className="text-lg font-bold">Founders</h3>
        <div className="flex space-x-6 mt-3">
          {["Srijan Gangavarapu", "Vuppala Nitish Kumar", "Kesavan Senthil"].map((name, index) => (
            <Tooltip key={index} title="Click to view profile" arrow>
              <motion.div 
                className="p-4 bg-gray-200 rounded-lg text-center cursor-pointer hover:bg-gray-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaRegUserCircle className="text-3xl mx-auto mb-2" />
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-600">Role: Operations & Growth</p>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.div>

      {/* Funding Section */}
      <motion.div className="bg-white p-6 mt-5 rounded-lg shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h3 className="text-lg font-bold">Fundings</h3>
        <div className="grid grid-cols-3 gap-4 mt-3">
          {["Funding Round", "Total Raised", "Latest Round"].map((item, index) => (
            <Tooltip key={index} title="Click for details" arrow>
              <motion.div 
                className="p-4 bg-gray-200 rounded-lg text-center cursor-pointer hover:bg-gray-300"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold">{item}</p>
                <p className="text-sm text-gray-600">$ -</p>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RedstringUI;
