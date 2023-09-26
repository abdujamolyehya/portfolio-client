import '@/style/main.scss'
import Header from '@/components/Header/Header'
export const metadata = {
  title: 'Yehya',
  description: 'Software Engineer',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
