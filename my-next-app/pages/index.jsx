import React, { useEffect, useState } from 'react';
import { FaUserCheck } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import Analytics from './components/Analytics';
import { useRouter } from 'next/router';
import { MdDeveloperMode } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt, FaTools, FaWordpress, FaBrain, FaSearch } from 'react-icons/fa';
import ServiceCard from './components/ServiceCard';
import Head from 'next/head';


const index = () => {

  let router = useRouter();

  // check for token




  let cartIcon = {
    user : (
      <FaUserCheck />
    ),
    complete : (
      <MdIncompleteCircle />
    ),
    office : (
      <RiHomeOfficeFill />
    ),
    rating : (
      <MdOutlineGeneratingTokens />
    )
  }

  const cardData = [
    { id: 1, icon: cartIcon.user, value: "2.7K", label: "User" },
    { id: 2, icon: cartIcon.complete, value: "150+", label: "Project Completed" },
    { id: 3, icon: cartIcon.office, value: 2, label: "Offices" },
    { id: 4, icon: cartIcon.rating, value: "4.7", label: "Rating" }
  ]

  // services objects
  const services = [
    {
      name: "Web Development",
      icon: <FaLaptopCode />,
      description: "Our web development service offers customized solutions for building and maintaining websites tailored to your business needs. "
    },
    {
      name: "Mobile Development",
      icon: <FaMobileAlt />,
      description: "With our mobile development service, we specialize in creating high-quality mobile applications for iOS and Android platforms. ."
    },
    {
      name: "DevOps",
      icon: <FaTools />,
      description: "Our DevOps service combines software development and IT operations to streamline the software delivery process and improve collaboration between development and IT teams. "
    },
    {
      name: "WordPress Development",
      icon: <FaWordpress />,
      description: "As experts in WordPress development, we offer comprehensive solutions for building and maintaining WordPress websites and applications. "
    },
    {
      name: "Artificial Intelligence",
      icon: <FaBrain />,
      description: "Our artificial intelligence service leverages cutting-edge technologies to develop intelligent systems that can perform tasks traditionally requiring human intelligence. "
    },
    {
      name: "SEO (Search Engine Optimization)",
      icon: <FaSearch />,
      description: "Our SEO service focuses on improving your website's visibility in search engine results pages (SERPs) to drive organic traffic and increase your online presence. "
    }
    // Add more services as needed
  ];

   // change page on button
   let changePage = (links) => {
    router.push(links)
  }

  return (

    

    <div>
      <Head>
      <title>codesea-Home0-</title>
      </Head>
      <div className="mt-4">
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Empowering Your Success with Streamlined Tech Solutions
          </h1>
          <p className="mb-8 leading-relaxed">At CodeSea, we're committed to empowering your success by providing efficient and streamlined tech solutions tailored to your needs. Our comprehensive range of services encompasses everything from innovative web design and development to strategic digital marketing strategies.</p>
          <div className="flex justify-center">
            <button onClick={()=>{
              changePage("/Contact")
            }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact US</button>
            <button onClick={()=>{
              changePage("/about")
            }} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About Us</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="../images/990.jpg" />
        </div>
      </div>
    </section>
      </div>
      <div >
      <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">A Journey Of <span className="text-blue-600">New Era</span></h1>
         
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {
            cardData.map((card)=>{
              return <Analytics key={card.id} card={card} />
            })
          }
        </div>
      </div>
    </section>
    {/* ====== Services Section Start */}
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-2 text-gray-900 tracking-widest">OUR SERVICES</h1>
          <span className="text-xl text-blue-600">
            Why Choose Us ?
          </span>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We Provide You Flexible Scalible And Reliable Tect Solutions To Our Customers</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            services.map((servicesdata)=>{
              return <ServiceCard key={servicesdata.title + servicesdata.description} servicesdata={servicesdata}/>
            })
          }
        </div>
      </div>
    </section>
{/* ====== Services Section End */}

<div className="mt-3">
<div className="text-center lg:w-2/3 w-full m-auto">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We're proud of our accomplishments</h1>
      <p className="mb-8 px-4 leading-relaxed">As a result of codesea's experience and work ethic, we have formed valuable industry partnerships over the years. This has not only helped us in getting certified from industry leaders, but also in acquiring new businesses and customers.</p>
      </div>
</div>

      </div>
    </div>
  )
}

export default index