'use client'
import Image from 'next/image'
import vLogo from './chatLogo.png'
import './chatbot.css'

const Cahatbot = () => {
  return (
    <div className='chatContainer'>
        <Image className='imgLogoChat' src={vLogo}/>
    </div>
  )
}

export default Cahatbot