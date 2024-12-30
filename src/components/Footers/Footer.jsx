import React from 'react'
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div>
        <div className='flex items-center justify-center text_footer'>
        <div className="w-64 border-t border-gray-300"></div>
        <div className='flex'>
          <FaInstagram className='text-[#a0a0a0] m-1'/>
        </div>
        <div className='flex uppercase'>
          Bizi instagramda izləyin
        </div>
        <div className="w-64 border-t border-gray-300"></div>
      </div>
      <div className="sb_instagram_header  sbi_medium flex ">
        <div>
          <img loading="lazy" decoding="async" src="https://muse.az/wp-content/uploads/sb-instagram-feed-images/muse.az.jpg" alt="MUSE" width="50" height="50" className='rounded-[50%]' /> 
        </div>
        <div>
          <div className='text-[#a0a0a0]'>muse.az</div>
          <span className='text-[#efaf7a]'>Yeni MUSE'la tanış olun
            <img draggable="false" role="img" class="emoji" alt="✨" src="https://s.w.org/images/core/emoji/15.0.3/svg/2728.svg" className='h-[20px] inline' />
          </span>
            <span className='text-[#efaf7a]'>12:00-18:00 Sifariş ↓</span>
          </div>
      </div>
      <div className='cards flex gap-[10px] max-h-[480px]  object-center overflow-hidden m-5'>
        <div><img className=' overflow-hidden object-cover' decoding="async" src="https://muse.az/wp-content/uploads/sb-instagram-feed-images/350933841_2082829512076654_6009545326874471957_nfull.jpg" alt="ETHEREAL" /></div>
        <div><img className=' overflow-hidden object-cover' decoding="async" src="https://muse.az/wp-content/uploads/sb-instagram-feed-images/350927848_148326854904340_6274293393337558088_nfull.jpg" alt="Amethyst Bundle" /></div>
        <div><img className=' overflow-hidden object-cover' decoding="async" src="https://muse.az/wp-content/uploads/sb-instagram-feed-images/349503594_1391530788365457_5466423774111439849_nfull.jpg" alt="MUSE SHOWROOMUNDA ENDİRİM GÜNLƏRİ!"/></div>
        <div className='min-w-[500px]'></div>
      </div>
      <div>
        <button>LOAD MORE</button>
        <button>FOLLOW ON INSTAGRAM</button>
      </div>
    </div>
    
  )
}

export default Footer