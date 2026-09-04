import './globals.css'

export const metadata = {
  title: 'YAAI - Modern Design Studio',
  description: 'Created with Claude Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
