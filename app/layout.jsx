import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Study Abroad Loans - Education Loan Made Easy",
  description:
    "Get education loans for studying abroad. Quick approval, flexible repayment options, and expert guidance.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
