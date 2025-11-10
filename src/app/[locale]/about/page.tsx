"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';

export default function AboutUs() {
  const t = useTranslations("HomePage");
  return (
    <div className="pt-[100px] pb-[150px]  bg-gradient-to-br from-orange-50 to-blue-50 dark:from-[#000013] dark:to-gray-700">
      <h1 className="text-center text-3xl dark:text-white font-bold">{t("a2")}</h1>

      <div className="flex justify-around mt-[40px]">
      <h1 className="w-[48%] mt-[20px] text-lg font-serif leading-9 dark:text-white text-gray-800  drop-shadow-md">{t("a55")}</h1>

        <Image
          className="w-[550px] h-[400px] object-cover rounded-xl"
          alt="Волонтёры"
          width={450}
          height={300}
          src="/images/volontyori.jpg"
        />
      </div>

      <h1 className="text-center text-3xl font-bold dark:text-white mt-[100px]">{t("a3")}</h1>


  <div className="w-[88%] dark:from-[#000013] dark:to-gray-800 h-[400px] flex mt-[90px] ml-[6%] pt-[50px] rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 shadow-2xl ">

  <div className="w-[420px]  ml-[80px] h-[300px] bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">

    <div>
      <h1 className="font-bold text-[20px] text-gray-800 ">
        {t("a56")}
      </h1>
      <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
    </div>


    <div className="flex flex-col gap-4 pl-3 text-gray-700 mt-4">
      <div className="flex items-center gap-3 hover:text-blue-500 transition-all duration-300 cursor-pointer">
        <LocalPhoneIcon className="text-blue-500" />
        <span>+992 900 00 00 00</span>
      </div>
      <div className="flex items-center gap-3 hover:text-blue-500 transition-all duration-300 cursor-pointer">
        <EmailIcon className="text-yellow-400" />
        <span>info@Hands.Hearts.org</span>
      </div>
      <div className="flex items-center gap-3 hover:text-blue-500 transition-all duration-300 cursor-pointer">
        <TelegramIcon className="text-blue-500" />
        <span>@Hands_help</span>
      </div>
      <div className="flex items-center gap-3 hover:text-green-500 transition-all duration-300 cursor-pointer">
        <WhatsAppIcon className="text-green-500" />
        <span>+992 900 00 00 00</span>
      </div>
      <div className="flex items-center gap-3 hover:text-pink-500 transition-all duration-300 cursor-pointer">
        <InstagramIcon className="text-pink-500" />
        <span>@Hands.Hearts_team</span>
      </div>
    </div>
  </div>

  <div className="w-[650px] h-[300px] ml-[100px] rounded-2xl shadow-2xl bg-white">

    <div className="flex justify-around pt-[20px]">
        <input className="border border-gray-300 w-[280px] h-[50px] rounded-[10px] pl-[20px]" placeholder="Name" type="text" />
        <input className="border border-gray-300 w-[280px] h-[50px] rounded-[10px] pl-[20px]" placeholder="Surname" type="text" />
    </div>

    <div className="flex justify-around pt-[20px]">
        <input className="border border-gray-300 w-[280px] h-[50px] rounded-[10px] pl-[20px]" placeholder="Email" type="text" />
        <input className="border border-gray-300 w-[280px] h-[50px] rounded-[10px] pl-[20px]" placeholder="New password" type="text" />
    </div>

    <input className="border border-gray-300 ml-[23px] mt-[20px] w-[605px] h-[50px] rounded-[10px] pl-[20px]" placeholder="Your Message" type="text" />

    <div className="flex gap-[15px] mt-[20px] ml-[335px]">
        <Button sx={{width:'140px', border:'1px solid gray', color:'gray'}} variant="outlined">Cancel</Button>
        
        <Button sx={{backgroundColor:'gray', width:'140px'}} variant="contained">Sign Up</Button>
    </div>



    

  </div>





</div>




























      
    </div>
  );
}
