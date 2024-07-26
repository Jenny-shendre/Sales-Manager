import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { TbBrandTelegram } from "react-icons/tb";
import Searchsvg from "../../assets/material-symbols_search.svg";
import notify from'../../assets/add_notes (black).png';


const TabBar = ({ activeTab, setActiveTab }) => (
  <div className="flex mb-4 justify-center">
    {['All', 'Available', 'In Meet'].map((tab) => (
      <button
        key={tab}
        style={{borderRadius:'24px 0px 0px 24px', borderRadius:'0px'}}
        className={` px-4 py-2 ${activeTab === tab ? 'bg-[#3D2314] text-white' : 'bg-white text-[#3D2314]'}`}
        onClick={() => setActiveTab(tab)}>
        {tab}
      </button>
    ))}
  </div>
);


 function NotesDetails  ()  {
  const [activeTab, setActiveTab] = useState('All');
  

  

  return (
    <div className="bg-[#F7F3E8] p-4">
        <div>
      <h1 className=" mt-8 text-[24px]">
        Home / <span className="font-medium text-[24px] font-bold">Notes</span>
      </h1>
    </div>
    <br />
    <div className="flex flex-row items-center justify-center">
              <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full">
                <input
                  className="w-full py-2 px-12 rounded-full "
                  style={{
                    border: "1px solid #3D2314",
                    boxShadow: " 0px 0px 4px 0px #00000040",
                  }}
                  type="text"
                  value=""
                
                  placeholder="Search"
                />
                <img
                  style={{ top: "0.6rem" }}
                  src={Searchsvg}
                  alt="Search"
                  className="absolute left-4"
                />
              </div>
            </div>

            <br />
            <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <br />
<div className='Cards gap-8'>
            
<div className='flex flex-wrap gap-8 mb-[30px]'>
<div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>
</div>
<div className='flex flex-wrap gap-8 mb-[30px]'>
<div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>
</div>

<div className='flex flex-wrap gap-8 mb-[30px]'>
<div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>

    <div className=" bg-white rounded-lg shadow-md p-4 max-w-xs w-[310px] h-[272px]">
      <div className="flex justify-between items-center mb-4">
        <div className="">
        <CiUser className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontWeight:'700'}} className="text-[14px] text-center text-[#3D2314]">Sharukh</h2>
          <div className='flex flex-wrap'>
            <div className='gap-2'>
            <CgMail className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> sharukh@gmail.com</p>
          </div>
          </div>
          <div className=' flex flex-wrap'> 
            <div className='gap-2'>
            <FaPhoneAlt className='text-[24px]'/>

            </div>
            <div>
          <p className="text-[#3D2314] text-[14px] ml-[7px]"> 9012345678</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 gap-[10px]" >
        <div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Attended</p>
          <p className="text-lg font-semibold ml-[30px]">12</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <p className="text-sm text-gray-600">Clients Converted</p>
          <p className="text-lg font-semibold ml-[30px]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-green-100 text-green-800 text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="w-full gap-2 bg-white border border-[#3D2314] text-[#3D2314] py-2 px-4 rounded-lg flex items-center justify-center">
       
        <TbBrandTelegram className='text-[24px]'/>

        Message
      </button>
    </div>
</div>
</div>  
    </div>
  );
};

export default NotesDetails;