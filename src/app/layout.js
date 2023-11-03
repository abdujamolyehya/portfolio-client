import "@/style/main.scss";
import Header from "@/components/Header/Header";
export const metadata = {
  title: "Yehya",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/images/logo.png" />
        <meta
          name="description"
          content="I'm a Software Engineer, weaving innovation and design into digital wonders. My code is the brush, and the web is my canvas. Let's explore the art of technology together."
        ></meta>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
