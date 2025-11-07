"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function HomePage() {
  // interface User {
  //   id: number;
  //   name: string;
  // }

  // const [data, setData] = useState<User[]>([]);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     try {
  //       const res = await axios.get("/db.json");
  //       setData(res.data.users);
  //     } catch (error) {
  //       console.error("Ошибка при загрузке пользователей:", error);
  //     }
  //   }
  //   fetchUsers();
  // }, []);

  const t = useTranslations("HomePage");

  return (
    <div className="dark:bg-gray-900 pb-[100px] ">
      <section className="pt-20 pb-20">
        <div className="relative">
          <Image
            src="/images/Copilot_20251106_154617.png"
            alt="hero background"
            className="w-[100%] mx-auto brightness-60 dark:brightness-50 h-96 sm:h-[500px] lg:h-[630px] object-cover shadow-2xl blur-xs"
            width={1200}
            height={630}
            priority
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fc991fde] text-center drop-shadow-2xl tracking-tight">
              Hands & Hearts
            </h1>
            <p className="text-sm sm:text-base font-medium max-w-2xl text-center text-[#fee9cccc] drop-shadow-xl leading-6">
              {t("a7")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center text-slate-900 dark:text-slate-50 mb-16 tracking-tight">
            {t("a8")}
          </h2>


 
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
      1280: { slidesPerView: 3.8, spaceBetween: 24 },
    }}
    modules={[Autoplay]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    speed={800}
    grabCursor={true}
    className="mySwiper"
  >
  <SwiperSlide>
    <Link href={"/deti"} className="block h-full">
      <div className="relative w-[350px] sm:max-w-[400px] h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer">
        <Image
          width={400}
          height={450}
          alt="Children"
          src="/images/detdom.jpg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent "></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-[#fffffff1] text-lg sm:text-xl lg:text-[18px] font-bold leading-snug tracking-wide drop-shadow-lg transition-all duration-700  group-hover:opacity-100">
            {t("a11")}
          </h3>
        </div>
      </div>
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link href={"/grandparents"} className="block h-full">
      <div className="relative w-[350px] sm:max-w-[400px] h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer">
        <Image
          width={400}
          height={450}
          alt="Grandparents"
          src="/images/2.jpg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent "></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-[#fffffff1] text-lg sm:text-xl lg:text-[18px] font-bold leading-snug tracking-wide drop-shadow-lg transition-all duration-700  group-hover:opacity-100">
            {t("a12")}
          </h3>
        </div>
      </div>
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link href={"/cat"} className="block h-full">
      <div className="relative w-[350px] sm:max-w-[400px] h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer">
        <Image
          width={400}
          height={450}
          alt="Categories"
          src="/images/главная.jpg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent "></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-[#fffffff1] text-lg sm:text-xl lg:text-[18px] font-bold leading-snug tracking-wide drop-shadow-lg transition-all duration-700  group-hover:opacity-100">
            {t("a14")}
          </h3>
        </div>
      </div>
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative w-[350px] sm:max-w-[400px] h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer">
      <Image
        width={400}
        height={450}
        alt="Children activities"
        src="/images/deti.webp"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent "></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-[#fffffff1] text-lg sm:text-xl lg:text-[18px] font-bold leading-snug tracking-wide drop-shadow-lg transition-all duration-700  group-hover:opacity-100">
          {t("a16")}
        </h3>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <Link href={"/Volunteering"} className="block h-full">
      <div className="relative w-[350px] sm:max-w-[400px] h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer">
        <Image
          width={400}
          height={450}
          alt="Volunteering"
          src="/images/ф2.jpg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent "></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-[#fffffff1] text-lg sm:text-xl lg:text-[18px] font-bold leading-snug tracking-wide drop-shadow-lg transition-all duration-700  group-hover:opacity-100">
            {t("a6")}
          </h3>
        </div>
      </div>
    </Link>
  </SwiperSlide>
</Swiper>
</div>


   
      </section>

      {/* <div>
        {data.map((e) => (
          <div key={e.id}>
            <h1>{e.name}</h1>
          </div>
        ))}
      </div> */}


<h1 className="text-3xl text-center font-bold mt-[100px] dark:text-white">{t('a20')}</h1>


<div className="flex justify-around flex-wrap gap-6 mt-[60px]">

  <div className="w-[320px] h-[250px] bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-[#292929] shadow-2xl pt-[20px] rounded-2xl transform transition duration-500 hover:scale-105 hover:shadow-lg">
    <AccountBalanceIcon className="dark:invert" sx={{ fontSize: '34px', marginLeft: '150px', color: 'inherit' }} />
    <h1 className="text-center font-bold mt-[18px] text-[19px] text-gray-800 dark:text-white">{t('a21')}</h1>
    <h1 className="text-center text-sm leading-7 mt-[15px] w-[90%] ml-[5%] text-[#8e8e8e] dark:text-gray-400">{t('a22')}</h1>
  </div>

  <div className="w-[320px] h-[250px] bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-[#292929] shadow-2xl pt-[20px] rounded-2xl transform transition duration-500 hover:scale-105 hover:shadow-lg">
    <GroupIcon className="dark:invert" sx={{ fontSize: '34px', marginLeft: '150px', color: 'inherit' }} />
    <h1 className="text-center font-bold mt-[18px] text-[19px] text-gray-800 dark:text-white">{t('a23')}</h1>
    <h1 className="text-center text-sm leading-7 mt-[15px] w-[90%] ml-[5%] text-[#8e8e8e] dark:text-gray-400">{t('a24')}</h1>
  </div>

  <div className="w-[320px] h-[250px] bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-[#292929] shadow-2xl pt-[20px] rounded-2xl transform transition duration-500 hover:scale-105 hover:shadow-lg">
    <CalendarMonthIcon className="dark:invert" sx={{ fontSize: '34px', marginLeft: '150px', color: 'inherit' }} />
    <h1 className="text-center font-bold mt-[18px] text-[19px] text-gray-800 dark:text-white">{t('a25')}</h1>
    <h1 className="text-center text-sm leading-7 mt-[15px] w-[90%] ml-[5%] text-[#8e8e8e] dark:text-gray-400">{t('a26')}</h1>
  </div>

  <div className="w-[320px] h-[250px] bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-[#292929] shadow-2xl pt-[20px] rounded-2xl transform transition duration-500 hover:scale-105 hover:shadow-lg">
    <FavoriteBorderIcon className="dark:invert" sx={{ fontSize: '34px', marginLeft: '150px', color: 'inherit' }} />
    <h1 className="text-center font-bold mt-[18px] text-[19px] text-gray-800 dark:text-white">{t('a27')}</h1>
    <h1 className="text-center text-sm leading-7 mt-[15px] w-[90%] ml-[5%] text-[#8e8e8e] dark:text-gray-400">{t('a28')}</h1>
  </div>

</div>








































    </div>
  );
}
