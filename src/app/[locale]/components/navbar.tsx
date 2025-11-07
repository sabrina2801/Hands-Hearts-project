'use client';
import LanguageSwitcher from "@/LanguageSwitcher";
import { useTranslations } from "next-intl";
import useDarkMode from "./useDarkMode";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  locale: string;
}

export default function Navbar({ locale }: HeaderProps) {
const t = useTranslations("HomePage")
  const [theme, toggleTheme] = useDarkMode();


return (
    <div className="dark:bg-gray-950 z-20 shadow px-3 py-3 h-[80px] bg-[#fcf0fee8]  w-[100%] justify-around flex items-center fixed">
<Image src="/images/Copilot_20251107_234223.png" alt="logo" className="w-[50px] h-[50px]" width={70} height={60}/>
<Link href={'/'}>
      <button className="dark:text-white hover:text-purple-950 text-[#6d536b]"><b>{t("a1")}</b></button>
</Link>
      <button className="dark:text-white hover:text-purple-950 text-[#6d536b]"><b>{t("a2")}</b></button>
      <button className="dark:text-white hover:text-purple-950 text-[#6d536b]"><b>{t("a3")}</b></button>
      <button className="dark:text-white hover:text-purple-950 text-[#6d536b]"><b>{t("a4")}</b></button>
      <button className="dark:text-white hover:text-purple-950 text-[#6d536b]"><b>{t("a5")}</b></button>
      <button className="dark:text-white hover:text-purple-950 text-[#6d536b]"><b>{t("a6")}</b></button>

      
<div className="flex items-center gap-[30px]">
          <LanguageSwitcher currentLang={locale} />
           <button
            onClick={toggleTheme}
            className=" rounded-full   transition-colors"
          >
            {theme === 'dark' ? (
              <DarkModeIcon sx={{ fontSize: 25 }} className="md:text-2xl invert" />
            ) : (
              <WbSunnyIcon sx={{ fontSize: 25 }} className="md:text-2xl" />
            )}
          </button>
</div>
    </div>
)
}