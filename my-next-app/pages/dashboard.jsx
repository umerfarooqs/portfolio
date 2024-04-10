import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector to get data from Redux store
import { getorders, searchService, sortOrder } from './redux/userdashboard';
import Head from 'next/head';

const Dashboard = () => {
    let router = useRouter();
    let [orders, setOrders] = useState(null); // Initialize with null
    let dispatch = useDispatch();
    let loading = useSelector(state => state.user.loading);
    let getstatedatauser = useSelector(state => state.user.data)

    useEffect(() => {
        let getToken = async () => {
            let token = localStorage.getItem("token");
            if (!token) {
                alert("You Are Signed Out For Now. Please Log In Before Accessing This Page.");
                return router.push("/");
            }
            try {
                token =JSON.parse(token)
                let data = await dispatch(getorders(token));
                setOrders(data.payload.findOrders); // Assuming getorders returns the orders data
            } catch (error) {
                console.error("Error fetching orders:", error);
                // Handle error, e.g., show a message to the user
            }
        };
        getToken();
    }, [dispatch, router]); // Include dispatch and router in the dependency array to avoid linting warnings

    const handleChange = (e) => {
        if (!e.target || !e.target.value) {
            setOrders(getstatedatauser)
            return;
        }
    
        // Assuming getstatedatauser is an array of objects
        let filterData = getstatedatauser.filter((data) => {
            const trimmedService = data.service.trim(); // Trim leading and trailing whitespace
            const trimmedValue = e.target.value.trim();
            // Check if trimmedService exists and is not empty before comparing
            return trimmedService && trimmedService.toLowerCase().includes(trimmedValue);
        });
        
        setOrders(filterData)
    };
    



    let date = new Date();
  
    if(loading){
        return <div role="status" className='flex w-44 mx-auto h-screen my-9'>
        <svg aria-hidden="true" className="w-12 h-12 m-auto text-4xl text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    }

    return (
        <div className="relative h-screen overflow-x-auto shadow-md py-12 px-9 border-sky-100 sm:rounded-lg">
          <Head>
            <title>CodeSea - UserDashboard</title>
          </Head>
            <div className="py-24 w-96 px-4 mx-auto">
            <div className='px-9'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Track Order By Service Name </label>
                        <input onChange={handleChange}  name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
            </div>

            <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-gray-50  dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
             Name
            </th>
            <th scope="col" className="px-6 py-3">
              Service
            </th>
            <th scope="col" className="px-6 py-3">
              Budget
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
          </tr>
        </thead>
        <tbody>
        {
                    orders&&orders.map((order)=>{
                        return(
                            <tr key={order._id}  className="bg-white border-b ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {order.name}
                            </th>
                            <td className="px-6 py-4">
                            {order.service}
                            </td>
                            <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {order.budget}
                    </div>
                </td>
                            <td className="px-6 py-4">
                              {
                        order.Status
                    }
                            </td>
                           <td>
                           <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{
                        date.getFullYear() +"/" +(date.getMonth() +1 ) + "/"+date.getDate()
                        
                    }</div>
                           </td>
                          </tr>
                        )
                    })
        }
        
        </tbody>
      </table>
    </div>
        
            
        {
              orders &&  orders.length === 0 && <h1 className="text-center flex justify-center font-bold">
                    No Search Found 
                </h1>
            }
    </div>
    

    );
};

export default Dashboard;
