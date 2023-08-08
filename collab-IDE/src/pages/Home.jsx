import React from 'react'
import Banner from "../assets/Logo1.svg"
import frag from "../assets/frag.svg"
import {v4 as uuidv4} from "uuid"
import { useState } from 'react'
const Home = () => {
    const [roomId,setRoomId] = useState("");
    const [username, setUsername] = useState("");
    const createNewRoom = (e)=>{
        e.preventDefault();
        const id= uuidv4();
        setRoomId(id);
    }

  return (
    <div className='flex md:flex-row flex-col justify-around items-center h-screen w-screen bg-black'>

        <img src={frag} className='fixed z-0 w-[80%]'/>
        <img src={Banner} alt='Collab' className='w-[35%] z-10'/>
            <div className='flex flex-col gap-4 p-16 bg-[#2c2c2c9f] rounded-md z-10'>
                <h4 className='text-white'>Paste Invitation ROOM ID</h4>
                <input type='text' placeholder='Room Number' className='p-2 rounded-md' value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
                <input type='text' placeholder='Enter your Name' className='p-2 rounded-md' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <button className='text-white p-2 bg-gradient-to-r from-[#7525F6] via-[#C49547] to-[#A1C50D] rounded-md'>Join</button>
                <span className='text-white'>
                    If you don't have an invite then create &nbsp;
                    <a href='' className='text-[#7525F6] font-bold underline' onClick={createNewRoom}>New Room</a>
                </span>
                <p className='text-white mt-4 text-center'>Build with ❤ by <a href=''>Debajit Paul</a></p>
            </div>
        
    </div>
  )
}

export default Home