import { Libre_Baskerville, Nunito_Sans, Lato } from 'next/font/google'

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
})

export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-nunito-sans',
})

export const combineFontClasses = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}