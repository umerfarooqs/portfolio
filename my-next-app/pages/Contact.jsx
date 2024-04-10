import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Correct import
import { IoMdArrowForward } from "react-icons/io";
import { fetchContacts } from './redux/Contslice';
import Image from 'next/image';
import submitformData, { sendEmail, sendformdata } from './redux/submitformData';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Contact = () => {
    const dispatch = useDispatch();
    let router = useRouter();
    let [service,setService] = useState([]);
    let ref = useRef(null);
  const contacts = useSelector(state => state.Contact.contacts);
  const status = useSelector(state => state.Contact.status);
  const error = useSelector(state => state.Contact.error);
  const success = useSelector(state => state.formSumbit.success);
  let loading = useSelector(state => state.formSumbit.loading)
  let [formData,setFormData] = useState({
  service :contacts &&  "",
  name : "",
  email : "",
  phoneNo : "",
  budget : "100USD - 500USD"
  });

  useEffect(() => {
    let fetcData = async()=>{
      let d = await dispatch(fetchContacts());
      let data = d.payload.findServices
      setService(data)
        setFormData({
          service :contacts &&  "",
          name : "",
          email : "",
          phoneNo : "",
          budget : "100USD - 500USD"
        })
    }
    fetcData();
  }, [dispatch]);

  let handleChange = async(e) => {
    let {name,value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async(e) => {
         e.preventDefault();
         let data = await dispatch(sendformdata(formData));
         console.log(data)
         await dispatch(sendEmail(formData));
         if(success){
          alert("Thanks For Contacting US")
         } else{
          alert("Sorry Your Form Not Submitted")
         }
         setFormData({
          service : contacts.findServices[0].service,
          name : "",
          email : "",
          phoneNo : "",
          budget : "100USD - 500USD"
         })
  };

  const ScrollToElem = async () => {
    if(ref.current){
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }


  return (
    <>
    <Head>
      <title>CodeSea - Contact Us</title>
    </Head>
       {
        status === "loading" && <div className='text-3xl min-h-screen w-full m-auto' role="status">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
      
       }

       {/* hero section Start */}
       <section className="text-gray-600  body-font">
  <div className="container mx-auto flex px-8  py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let’s get started with your project
      </h1>
      <p className="mb-8 leading-relaxed">Whether you’re looking to build something new and exciting or need our help with an ongoing project, we’ve got you covered..</p>
      <strong className="text-xl mb-3 font-bold">
      Fill out the contact form below to let us know how we can help.
      </strong>
      <div className="flex justify-center" onClick={ScrollToElem}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Fill Form</button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6">
    <Image src="/images/mailbox.jpg" width={400} height={400} className="object-cover  object-center rounded" alt="hero" />
    </div>
  </div>
</section>

       {/* hero section end */}

       {/* form <section></section> */}
       <div className="p-6" ref={ref}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <form onSubmit={handleSubmit}>
    <div>
        <label className="block font-semibold" htmlFor="name">Select Service</label>
        {
          contacts &&   <select className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-xl p-2 border-none mb-3 block mt-1 w-full"  name="service" required="required" value={formData.service} onChange={handleChange} autoFocus="autofocus" >
              <option value="___">____________________Select Service Below_________________________</option>

          {
            service.map((contact)=>{
              return <>
              <option key={contact._id} value={contact.service}>
                {contact.service}
              </option>
              </>
            })
          }
          </select>
        }
      
      </div>
      <div>
        <label className="block font-semibold" htmlFor="name">Name</label>
        <input value={formData.name} onChange={handleChange} className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-xl p-2 border-none block mt-1 w-full" id="name" type="text" name="name" required="required" autoFocus="autofocus" />
      </div>

      <div className="mt-4">
        <label className="block font-semibold" htmlFor="email">Email</label>
        <input value={formData.email} onChange={handleChange} className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-xl p-2 border-none block mt-1 w-full" id="email" type="email" name="email" required="required" />
      </div>

      <div className="mt-4">
        <label className="block font-semibold" htmlFor="email">Phone No</label>
        <input value={formData.phoneNo} onChange={handleChange} className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-xl p-2 border-none block mt-1 w-full" id="phoneNo" type="number" name="phoneNo" required="required" />
      </div>

      <label className="block font-semibold" htmlFor="name">Select Budget</label>
        <select value={formData.budget} onChange={handleChange} className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-xl p-2 border-none mb-3 block mt-1 w-full"  name="budget" required="required" autoFocus="autofocus" >
          <option value="50USD - 100USD">50USD - 100USD</option>
          <option value="100USD - 150USD">100USD - 150USD</option>
          <option value="150USD- 200USD"> - 150USD - 200USD</option>
          <option value="200USD - 250USD">200USD - 250USD</option>
          <option value="250USD - 300USD">250USD - 300USD</option>
          <option value="More Then 300USD">More Then 300USD</option>

          </select>

      <div className="flex items-center justify-between mt-8">
        <button type="submit" className={`flex ${loading ?"cursor-not-allowed" :"cursor-pointer"} items-center justify-center px-3 py-1  border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10`}>
  
  <span className='flex align-middle justify-center text-center'>{loading ? "Submitting" : "Submit"}<IoMdArrowForward className='mx-2 mt-1'/></span>

        </button>
       
      </div>
    </form>

    <aside>
      <div className="bg-gray-100 p-8 rounded">
        <h2 className="font-bold text-2xl">What happens next</h2>
        <ul className="list-disc mt-4 list-inside">
          <li  className='mb-3'>Our business development team contacts you within two working days.</li>
          <li  className='mb-3'>A discovery session is held to understand your project requirements</li>
          <li className='mb-3'> All the information shared is protected under the mNDA</li>
          <li  className='mb-3'>Our technical and business development teams analyze the scope of your project and share the best way forward in a proposal</li>
          <li  className='mb-3'>A software development agreement is signed based on mutually agreed terms of the proposal</li>
        </ul>
      </div>
    </aside>

  </div>
</div>

       {/* form section end */}

    </>
  );
};

export default Contact;
