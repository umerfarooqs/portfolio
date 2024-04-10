import Head from 'next/head'
import React from 'react'
import TeamCards from './components/TeamCards'

const about = () => {

    let teamInfo = [
      {
        name : "Ahsan",
        title : "Senior Mern/Menn Stack Developer",
        image : "https://media.licdn.com/dms/image/D4D03AQGgFW3U0ldaZQ/profile-displayphoto-shrink_800_800/0/1702232121277?e=1718236800&v=beta&t=SNA1tBL8Vg8DVYKBiGWle6BOg-Y7l6brkIl5Q2Z_3nA"
      },
        {
            name : "Farooq Seedat",
            title : "Senior Software Engineer",
            image : "https://media.licdn.com/dms/image/D4D03AQEPlkQpVsK-4w/profile-displayphoto-shrink_100_100/0/1702860913996?e=1716422400&v=beta&t=8rOU6pOOEehX9U5M4K4wlyS_I03HgJRCYvSlLxCuK9o"
        },{
          name : "Zain Salman",
          title : "Senior Mobile Apps Developer (IOS/Android)",
          image : "https://media.licdn.com/dms/image/D4E03AQEqnXnRAAcBkw/profile-displayphoto-shrink_100_100/0/1704513137490?e=1716422400&v=beta&t=440Y7sKjf1VXI8raUVwjVtWJwYp43fVazwHwgBGc3MI"
        },
        {
          name : "Khurram Minhas",
          title : "Senior Web Developer",
          image : "https://media.licdn.com/dms/image/C4D03AQF2IcbULX4h5Q/profile-displayphoto-shrink_100_100/0/1636620283690?e=1716422400&v=beta&t=xZtbpWXrtLm-iejaJxvaKaCIx-19LQIf5RG_jVMexTQ"
        },{
          name : "Ayesha malik",
          title : "Senior Data Scientist",
          image : "https://media.licdn.com/dms/image/C4E03AQEGGR6C4HUnuw/profile-displayphoto-shrink_100_100/0/1609742483478?e=1716422400&v=beta&t=7Ghp-mCvRJMxTdUCtB8el5fSy63rYLvIWGPeWgGgsy0"
        },
        {
          name : "Ali Nawaz",
          title : "Senior DevOps Engineer",
          image : "https://media.licdn.com/dms/image/C5603AQFLnNQ_BGRTFw/profile-displayphoto-shrink_100_100/0/1611165332954?e=1716422400&v=beta&t=nsKkl-Sb-6PNBIzXgFl-pj8fyLBJpNoU3XhNolcKwgA"
        },{
          name : "Haulk Ahriman",
          title : "Senior Game Developer",
          image : "https://media.licdn.com/dms/image/C5103AQHCs2wGloZuxg/profile-displayphoto-shrink_100_100/0/1517396075547?e=1716422400&v=beta&t=nFyC5MXzSVw71GDAM7OB2GPfUS4_GlBoYQ_jWFHy6ok"
        },
    ]

  return (
    <div>
        <Head>
            <title>CodeSea - About Page</title>
        </Head>
        <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CodeSea Team Members
          </h1>
          <p className="mb-8 leading-relaxed">Meet our driven and passionate team of experts, ready to empower you with their skills and unlock your potential. .</p>
        
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="../images/990.jpg" />
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
         
        </div>
        <div className="flex flex-wrap -m-2">
          {
            teamInfo.map((data)=>{
              return <TeamCards key={data.image} data={data} />
            })
          }
        </div>
        </div>
    </section>
    </div>
  )
}

export default about