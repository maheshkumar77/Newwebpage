import React from 'react';
import { motion } from 'framer-motion';
import { FaRegUserCircle } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';

const Hero = () => {
  const bdata = [
    "B2B", "INDUSTRY", "COMPANY SECTOR", "COMPANY STAGE", "TOTAL FUNDING", "COMPANY LINKEDIN"
  ];

  const para = "You're a skilled full-stack developer with expertise in Next.js, Java, Python, and AI-powered applications. You're currently building a cutting-edge candidate evaluation platform using RAG, vector databases, and the Google Gemini API.";

  return (
    <motion.div 
      className='w-full h-screen flex flex-col p-6 overflow-scroll'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Breadcrumb Navigation */}
      <motion.div 
        className='w-full flex items-center gap-2 text-sm font-serif text-gray-700'
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p>Company</p>
        <span className="text-gray-500">&gt;</span>
        <p>Pagename</p>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        className='w-full h-40  rounded-lg flex items-center justify-center mt-4  shadow-md'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
      <div   className='w-full h-40 border-2 border-gray-300 rounded-lg flex items-center justify-center mt-4 bg-black shadow-md overflow-hidden'>
        <img src='https://images6.alphacoders.com/718/718463.jpg' alt='sky' className='w-full h-full object-cover'/>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className='w-full flex flex-row gap-8 items-start mt-6'>
        {/* Image Section */}
        <motion.div 
          className='relative h-40 w-40 rounded-full border-2 overflow-hidden mt-[-60px] shadow-lg'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <img 
            src='https://travel-along.in/wp-content/uploads/2023/07/pexels-photo-12398202.jpeg' 
            alt='Jagannatha' 
            className='w-full h-full object-cover'
          />
        </motion.div>

        {/* Text Content */}
        <div className='w-3/5 h-auto flex flex-col justify-start gap-4'>
          {/* Company Details */}
          <motion.div 
            className='w-full flex gap-3'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className='py-1 px-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition duration-300'>Company Name</p>
            <p className='py-1 px-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition duration-300'>Founded</p>
            <p className='py-1 px-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition duration-300'>1-10 Employees</p>
          </motion.div>

          {/* Description */}
          <motion.div 
            className='w-full bg-gray-50 p-4 rounded-md shadow-sm'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className='text-gray-700'>{para}</p>
          </motion.div>

          {/* Data Tags */}
          <motion.div 
            className='w-full flex flex-wrap gap-3'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {bdata.map((item, index) => (
              <motion.p 
                key={index} 
                className={`px-4 py-1 rounded-md text-sm font-medium shadow-sm cursor-pointer transition duration-300
                ${index % 2 === 0 ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
          
        </div>
        
      </div>
      <div className=' w-full h-auto px-4 py-4 '>
      <div className="mt-4 flex space-x-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">B2B</span>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Marketplace</span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Growth Stage</span>
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Valuation $10M+</span>
        </div>
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
    </motion.div>
  );
};

export default Hero;