'use client'
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page3() {
    const t = useTranslations("HomePage")
  return (
    <div className="pt-[110px] pb-[100px] bg-gradient-to-br from-orange-100 to-blue-100 dark:from-[#000013] dark:to-gray-700">
        <h1 className="text-center text-3xl font-bold dark:text-white">{t("a68")}</h1>


      <div className="w-[90%] flex flex-col mt-[50px] md:flex-row items-center bg-white shadow-2xl rounded-2xl m-auto p-6 gap-6">
  {/* Изображение */}
  <Image
    className="w-full md:w-[500px] h-[270px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
    alt="Волонтёры"
    width={500}
    height={270}
    src="/images/1.jpg"
  />

  {/* Текстовая часть */}
  <div className="flex-1">
    <h1 className="text-lg md:text-[16px] font-bold text-gray-800 leading-7 mb-4">
      {t('a57')}
    </h1>

    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
      <li className="font-semibold"> {t('a58')} </li>
      <li className="font-semibold"> {t('a59')} </li>
      <li className="font-semibold"> {t('a60')} </li>
      <li className="font-semibold"> {t('a61')} </li>
    </ul>
  </div>
</div>


      <div className="w-[90%] flex flex-col mt-[50px] md:flex-row items-center bg-white shadow-2xl rounded-2xl m-auto p-6 gap-6">
  {/* Изображение */}
  <Image
    className="w-full md:w-[500px]  h-[270px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
    alt="Волонтёры"
    width={500}
    height={270}
    src="/images/4.webp"
  />

  {/* Текстовая часть */}
  <div className="flex-1">
    <h1 className="text-lg md:text-[16px] font-bold text-gray-800 leading-7 mb-4">
      {t('a62')}
    </h1>

    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
      <li className="font-semibold"> {t('a63')} </li>
      <li className="font-semibold"> {t('a64')} </li>
      <li className="font-semibold"> {t('a65')} </li>
      <li className="font-semibold"> {t('a66')} </li>
    </ul>
  </div>
</div>


      <div className="w-[90%] flex flex-col mt-[50px] md:flex-row items-center bg-white shadow-2xl rounded-2xl m-auto p-6 gap-6">
  {/* Изображение */}
  <Image
    className="w-full md:w-[500px]  h-[270px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
    alt="Волонтёры"
    width={500}
    height={270}
    src="/images/5.jpg"
  />

  {/* Текстовая часть */}
  <div className="flex-1">
    <h1 className="text-lg md:text-[16px] font-bold text-gray-800 leading-7 mb-4">
      {t('a67')}
    </h1>

    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
      <li className="font-semibold"> {t('a63')} </li>
      <li className="font-semibold"> {t('a64')} </li>
      <li className="font-semibold"> {t('a65')} </li>
      <li className="font-semibold"> {t('a66')} </li>
    </ul>
  </div>
</div>



















    </div>
  );
}
