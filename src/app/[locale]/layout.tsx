import { routing } from '@/I18n/routing'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import "../globals.css";

import Link from 'next/link'
import Navbar from './components/navbar';
import Footer from './components/footer';

type Props = {
 children: React.ReactNode
 params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
 const { locale } = await params
 if (!hasLocale(routing.locales, locale)) {
  notFound()
 }
 return (
  <html lang="ru">
   <body>
    <NextIntlClientProvider>
      <Navbar locale={locale}/>


    

         <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="hover:text-gray-300"></Link>
                </li>

                

                <li>
                  <Link href="/deti" className="hover:text-gray-300"></Link>
                </li>
                 <li>
                  <Link href="/Volunteering" className="hover:text-gray-300"></Link>
                </li>
                <li>
                  <Link href="/grandparents" className="hover:text-gray-300"></Link>
                </li>
                 <li>
                  <Link href="/cat" className="hover:text-gray-300"></Link>
                </li>
                 <li>
                  <Link href="/about" className="hover:text-gray-300"></Link>
                </li>
                <li>
                  <Link href="/page3" className="hover:text-gray-300"></Link>
                </li>
                <li>
                  <Link href="/kids" className="hover:text-gray-300"></Link>
                </li>
              </ul>
            </nav>
     {children}
     <Footer/>

  
    </NextIntlClientProvider>
   </body>
  </html>
 )
}
