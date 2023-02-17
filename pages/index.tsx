
import { FaCheckCircle, FaShieldAlt, FaSeedling, FaSquare } from "react-icons/fa";

const index = () => {
    // margin: auto;
    // display: inline;
    return (
        <>
            <style jsx>{`
        @media (max-width: 390px){
            .row2{
                display: flex;
                flex-direction: column;
                margin: auto;
            }
            .row3{
                color: black;
    width: 80%;
    display: flex;
    flex-direction: column;
            }
        }
        @media (max-width: 425px){
            .row2{
                margin: auto;
                display: flex;
                flex-direction: column;
            }
        }
        @media (max-width: 640px) {
          .left{
            width: 90%;
            margin: auto;
            padding-top: 10%;
          }
          .right{
            width: 90%;
            margin: auto;
            padding-top: 16px;
            padding-left: 10px;
            padding-bottom: 20px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }
          .row3{
            width: 90%;
            margin: auto;
          }
          .row3 > div{
            padding: 7px 0;
          }
        }
        @media (max-width: 768px) {
            .row2{
                display: flex;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                width: 85%;
            }
            .right{
                width:100%
            }
            .left{
                width:100%
            }
            .row3{
                display: flex;
                flex-direction: column;
                padding: 2% 0; 
                color: #0d0d0d;
            }
        }
      `}</style>
            <style global jsx>{`
        body {
            height: 100vh;
            background: linear-gradient(180deg, #7144bf 50%, #FFFFFF 50%);
            background-repeat: no-repeat;
            background-size: 100% auto;
            }       
      `}</style>
            <div className="row1 lg:text-center py-10 bg-gradient sm:text-left md:text-center">
                <h1 className="font-extrabold text-2xl my-2 font-sans mx-5 text-white">Simple pricing for your bussiness.</h1>
                <p className="text-violet-100 sm:text-3x1 mx-5">Plans that are carefully crafted to suit your bussiness.</p>
            </div>

            <div className="row2 lg:bg-black lg:flex md:rounded-r-md lg:rounded-r-md sm:w-20 lg:mb-7 lg:mt-7 md:m-auto md:w-3/4 lg:w-3/4 lg:m-auto justify-between lg:shadow-2xl lg:rounded-md">
                {/* width: 86%;
                margin: auto;
                    padding-top: 10%; */}
                <div className='left md:rounded-l-md lg:rounded-l-md sm:pt-10 sm:m-auto sm:w-5/6 sm:rounded-md lg:py-5 lg:w-72 text-center bg-violet-200 text-black'>

                    <h4 className="text-xl font-semibold">Premium PRO</h4>
                    <h1 className="font-extrabold text-5xl font-sans my-2">$329</h1>

                    <p>Billed just once</p>
                    <button className="w-36 p-1 my-5 bg-violet-800 text-slate-50 rounded-sm">Get started</button>
                </div>

                <div className='right md:rounded-r-md lg:rounded-r-md sm:w-3/4 sm:py-2 sm:px-3 lg:py-5 lg:px-10 gap-4 lg:w-3/4 bg-white text-black'>

                    <h4 className="font-sans">Access these feature when you get this pricing package for your bussiness.</h4>
                    <div className="flex pt-5 gap-4">
                        <FaCheckCircle className="my-1 mr-2 m-1" />
                        <p>International calling and messenging API</p>
                    </div>
                    <div className="flex gap-4 ">
                        <FaCheckCircle className="my-1 mr-2 m-1" />
                        <p>Additional phone numbers.</p>
                    </div>
                    <div className="flex gap-4">
                        <FaCheckCircle className="my-1 mr-2 m-1" />
                        <p>Automated messages via ziapier</p>
                    </div>
                    <div className="flex gap-4">
                        <FaCheckCircle className="my-1 mr-2 m-1" />
                        <p>24/7 support and consulting</p>
                    </div>
                </div>
            </div>

            <div className="row3 md:w-5/6 lg:flex sm:h-40 lg:gap-x-3 lg:gap-y-5 text-black lg:w-2/3 m-auto justify-between font-bold">

                <div className="flex">
                    <FaShieldAlt className="my-1 mx-3 m-1 sm:m-5" />
                    <h3>30 day money back Gurantee</h3>
                </div>
                <div className="flex">
                    <FaSeedling className="my-1 mx-3 m-1 sm:m-5" />
                    <h3>No setup fees 100% hassle-free</h3>
                </div>
                <div className="flex">
                    <FaSquare className="my-1 mx-3 m-1 sm:m-5" />
                    <h3>No monthly subscription Pay once and for all.</h3>
                </div>
            </div>
        </>
    )
}

export default index
