"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk"
import ChatIcon from "@mui/icons-material/Chat"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay } from "swiper/modules"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"

export default function HomePage() {
  const t = useTranslations("HomePage")

  interface statistica {
    id: number
    name: string
  }
  const [data, setData] = useState<statistica[]>([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("/db.json")
        setData(res.data.statistica)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="pb-[150px] md:pb-[150px] dark:bg-gray-900">
      <div className="w-[100%] h-[400px] sm:h-[500px] md:h-[590px] bg-gradient-to-br from-orange-300 to-blue-300 dark:from-[#000013] dark:to-gray-700 ">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white drop-shadow-lg pt-[100px] sm:pt-[150px] md:pt-[240px] tracking-wide"
        >
          Hands & Hearts
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-white w-[85%] sm:w-[70%] md:w-[50%] leading-6 sm:leading-7 m-auto text-center text-sm sm:text-base md:text-[17px] mt-[15px] sm:mt-[20px]"
        >
          {t("a7")}
        </motion.h1>
      </div>

      <div className=" flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-around bg-[#fffffff4] dark:bg-gray-950  shadow-2xl w-[95%] sm:w-[90%] h-auto sm:h-[210px] ml-[2.5%] sm:ml-[5%] rounded-3xl mt-[-80px] sm:mt-[-100px] gap-4 sm:gap-0 p-4 sm:p-0">
        <div className="flex flex-col items-center text-center pt-[20px] sm:pt-[30px] max-w-[250px] mx-auto sm:mx-4">
          <h1 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">{t("a31")}</h1>
          <h1 className="text-xs sm:text-sm text-gray-500 mt-[10px] dark:text-gray-300">{t("a32")}</h1>
          <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-3 sm:p-4 mt-[18px] rounded-full shadow-lg mb-4 ml-0 sm:ml-[-10px] flex justify-center items-center">
            <PhoneAndroidIcon className="text-2xl sm:text-4xl text-white" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center pt-[20px] sm:pt-[30px] max-w-[250px] mx-auto sm:mx-4">
          <h1 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">{t("a33")}</h1>
          <h1 className="text-xs sm:text-sm text-gray-500 mt-[10px] dark:text-gray-300">{t("a34")}</h1>
          <div className="bg-gradient-to-br from-blue-400 mt-[18px] to-indigo-500 p-3 sm:p-4 rounded-full shadow-lg mb-4 flex justify-center items-center">
            <ArrowUpwardIcon className="text-2xl sm:text-4xl text-white" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center pt-[20px] sm:pt-[30px] max-w-[180px] mx-auto sm:mx-4">
          <h1 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">{t("a37")}</h1>
          <h1 className="text-xs sm:text-sm text-gray-500 mt-[10px] dark:text-gray-300">{t("a38")}</h1>
          <div className="bg-gradient-to-br mt-[18px] from-purple-400 to-pink-500 p-3 sm:p-4 rounded-full shadow-lg mb-4 flex justify-center items-center">
            <VolunteerActivismIcon className="text-2xl sm:text-4xl text-white" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center pt-[20px] sm:pt-[30px] max-w-[150px] mx-auto sm:mx-4">
          <h1 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">{t("a39")}</h1>
          <h1 className="text-xs sm:text-sm text-gray-500 mt-[10px] dark:text-gray-300">{t("a40")}</h1>
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 sm:p-4 mt-[18px] ml-0 sm:ml-[10px] rounded-full shadow-lg mb-4 flex justify-center items-center">
            <DirectionsWalkIcon className="text-2xl sm:text-4xl text-white" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center pt-[20px] sm:pt-[30px] max-w-[180px] mx-auto sm:mx-4">
          <h1 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white ">{t("a35")}</h1>
          <h1 className="text-xs sm:text-sm text-gray-500  mt-[10px] dark:text-gray-300">{t("a36")}</h1>
          <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 sm:p-4 mt-[18px] rounded-full shadow-lg mb-4 flex justify-center items-center">
            <ChatIcon className="text-2xl sm:text-4xl text-white" />
          </div>
        </div>
      </div>

      <h1 className="text-center text-2xl sm:text-3xl font-bold mt-[80px] sm:mt-[150px] dark:text-white px-4">
        {t("a8")}
      </h1>

      <div className="w-[94%] ml-[3%] mt-12 sm:mt-16">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={900}
          grabCursor={true}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <Link href="/deti" className="block h-full">
              <div className="relative w-[280px] sm:w-[350px] md:max-w-[400px] h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group cursor-pointer">
                <Image
                  src="/images/detdom.jpg"
                  alt="Children"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold leading-snug drop-shadow-lg transition-opacity duration-700 group-hover:opacity-100">
                    {t("a11")}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <Link href="/grandparents" className="block h-full">
              <div className="relative w-[280px] sm:w-[350px] md:max-w-[400px] h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group cursor-pointer">
                <Image
                  src="/images/2.jpg"
                  alt="Grandparents"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold leading-snug drop-shadow-lg transition-opacity duration-700 group-hover:opacity-100">
                    {t("a12")}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <Link href="/cat" className="block h-full">
              <div className="relative w-[280px] sm:w-[350px] md:max-w-[400px] h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group cursor-pointer">
                <Image
                  src="/images/главная.jpg"
                  alt="Categories"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold leading-snug drop-shadow-lg transition-opacity duration-700 group-hover:opacity-100">
                    {t("a14")}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <Link href="/kids" className="block h-full">
                   <div className="relative w-[280px] sm:w-[350px] md:max-w-[400px] h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group cursor-pointer">
              <Image
                src="/images/deti.webp"
                alt="Children activities"
                width={400}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold leading-snug drop-shadow-lg transition-opacity duration-700 group-hover:opacity-100">
                  {t("a16")}
                </h3>
              </div>
            </div>
            </Link>
     
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <Link href="/Volunteering" className="block h-full">
              <div className="relative w-[280px] sm:w-[350px] md:max-w-[400px] h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group cursor-pointer">
                <Image
                  src="/images/ф2.jpg"
                  alt="Volunteering"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold leading-snug drop-shadow-lg transition-opacity duration-700 group-hover:opacity-100">
                    {t("a6")}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-[#fbfbfe]  dark:bg-gray-950  w-[96%] ml-[2%] rounded-2xl shadow-2xl h-auto md:h-[400px] mt-[100px] md:mt-[150px] p-8 md:p-0">
        <h1 className="text-center text-2xl sm:text-3xl pt-[30px] md:pt-[50px] font-bold dark:text-white">
          {t("a41")}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-0 md:justify-around mt-[30px] md:mt-[50px]">
          {data.map((e) => {
            return (
              <div
                className="w-[140px] sm:w-[160px] md:w-[180px] flex justify-center  items-center text-3xl sm:text-4xl md:text-5xl dark:text-black font-bold text-[#1e1e1eb3] h-[140px] sm:h-[160px] md:h-[180px] rounded-[50%] bg-gradient-to-br from-orange-100 shadow-2xl to-blue-100 dark:from-blue-300 dark:to-gray-800   "
                key={e.id}
              >
                <h1 className="">{e.name}</h1>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-around gap-3 sm:gap-0 mt-[30px] font-bold dark:text-white text-sm sm:text-base md:text-[17px] text-center">
          <h1 className="sm:ml-[50px] md:ml-[60px]">{t("a42")}</h1>
          <h1 className="sm:ml-[50px] md:ml-[150px]">{t("a43")}</h1>
          <h1 className="sm:ml-[50px] md:ml-[170px]">{t("a44")}</h1>
          <h1 className="sm:ml-[50px] md:ml-[100px]">{t("a45")}</h1>
          <h1 className="sm:ml-[50px] md:ml-[70px]">{t("a46")}</h1>
        </div>
      </div>
    </div>
  )
}
