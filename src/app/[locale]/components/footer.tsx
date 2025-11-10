import Image from "next/image"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-50 to-blue-50 dark:from-[#000013] dark:to-gray-700 dark:text-white py-16 px-8">
      <div className="max-w-7xl mx-auto pt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
    
          <div className="flex flex-col items-start">
            <div className="relative w-24 h-24 mb-6 rounded-lg overflow-hidden  flex items-center justify-center">
              <Image
                src={"/images/Copilot_20251107_234223.png"}
                width={80}
                height={80}
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold ">Hands & Hearts</h3>
          </div>

        
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold  uppercase tracking-wider mb-2">Организации</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://mino.tj/biz/lona-blagotvoritelniy-fond-dushanbe" className=" transition-colors duration-200 text-sm">
                  Лона
                </a>
              </li>
              <li>
                <a href="https://fond-ormon.tj/" className=" transition-colors duration-200 text-sm">
                  ОРМОН
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/p/COfPbANhB3m/" className=" transition-colors duration-200 text-sm">
                  Назари Дигар
                </a>
              </li>
            </ul>
          </div>

  
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold  uppercase tracking-wider mb-2">Наши партнёры</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/dasti.yori/" className=" transition-colors duration-200 text-sm">
                  Дасти ёри
                </a>
              </li>
              <li>
                <a href="https://muzaffar.tj/" className=" transition-colors duration-200 text-sm">
                  Музаффар
                </a>
              </li>
              <li>
                <a href="https://mino.tj/biz/delay-dobro-tadzhikistan-dushanbe" className=" transition-colors duration-200 text-sm">
                  Делай Добро
                </a>
              </li>
              <li>
                <a href="https://oriyo.tj/charity" className=" transition-colors duration-200 text-sm">
                  Ориё
                </a>
              </li>
            </ul>
          </div>

      
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold  uppercase tracking-wider mb-2">Контакты</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:hands@gmail.com"
                  className=" transition-colors duration-200 text-sm"
                >
                  Hands@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+992" className=" transition-colors duration-200 text-sm">
                  +992 000 00 00
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-4 pt-4 border-t  border-white/10">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-blue-500/30 transition-colors duration-200 "
              >
                <InstagramIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-blue-600/30 transition-colors duration-200 "
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-blue-400/30 transition-colors duration-200 "
              >
                <TwitterIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-green-600/30 transition-colors duration-200 "
              >
                <WhatsAppIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>
      <hr className=" border border-gray-300" />

        <div className=" mt-[40px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className=" text-sm ml-[-50px]">© 2025 Открытые сердца. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className=" text-sm transition-colors duration-200 ">
                Политика конфиденциальности
              </a>
              <a href="#" className=" text-sm transition-colors duration-200">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
