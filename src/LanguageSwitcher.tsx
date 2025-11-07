'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value
    const segments = pathname.split('/')
    segments[1] = newLang
    const newPath = segments.join('/')
    startTransition(() => {
      router.push(newPath)
    })
  }

  const flagSrc =
    currentLang === 'ru'
      ? '/images/Круглый флаг России.png'
      : currentLang === 'en'
      ? '/images/Круглый значок флага США.png'
      : '/images/Флаг Таджикистана на кнопке.png'

  return (
    <div className="inline-flex items-center gap-2 px-3  py-2 rounded-full border transition-colors duration-300
      border-gray-300 bg-white shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      
<div className='w-[24px] h-[24px] rounded-[50%] bg-[white]'>
        <Image
        src={flagSrc}
        alt="flag"
        width={24}
        height={24}
        className="rounded-full border border-gray-200 dark:border-gray-600"
      />
</div>
      
      <select
        value={currentLang}
        onChange={handleChange}
        className="bg-transparent outline-none text-gray-800 dark:text-gray-200 font-medium cursor-pointer
          hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      >
        <option className='dark:text-[black]' value="ru">Русский</option>
        <option className='dark:text-[black]' value="en">English</option>
        <option className='dark:text-[black]' value="tj">Тоҷикӣ</option>
      </select>
    </div>
  )
}
