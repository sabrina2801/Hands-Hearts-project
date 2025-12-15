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
                  <Link href="/" ></Link>
                </li>

                

                <li>
                  <Link href="/deti" ></Link>
                </li>
                 <li>
                  <Link href="/Volunteering" ></Link>
                </li>
                <li>
                  <Link href="/grandparents" ></Link>
                </li>
                 <li>
                  <Link href="/cat" ></Link>
                </li>
                 <li>
                  <Link href="/about" ></Link>
                </li>
                <li>
                  <Link href="/page3" ></Link>
                </li>
                <li>
                  <Link href="/kids" ></Link>
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
