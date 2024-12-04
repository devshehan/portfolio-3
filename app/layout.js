import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
  src: [
    {
      path: "./fonts/JetBrains_Mono/static/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/JetBrains_Mono/static/JetBrainsMono-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/JetBrains_Mono/static/JetBrainsMono-Bold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono", 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
