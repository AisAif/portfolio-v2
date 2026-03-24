import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Isbarul Fahmi",
  description:
    "I am a dedicated software engineer specializing in modern Software Development. My expertise includes backend technologies such as Laravel, Node.js, and Golang, alongside frontend skills in Vue.js or React. I am proficient in multiple programming languages, including TypeScript, PHP, Golang, and Python, enabling me to craft innovative and efficient solutions for complex challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/img" href="/logo.png" />
        <meta property="og:site_name" content="Abdullah Isbarul Fahmi" />
        <meta
          property="og:title"
          content="Abdullah Isbarul Fahmi's Portfolio"
        />
        <meta
          property="og:description"
          content="I am a dedicated software engineer specializing in modern Software Development. My expertise includes backend technologies such as Laravel, Node.js, and Golang, alongside frontend skills in Vue.js or React. I am proficient in multiple programming languages, including TypeScript, PHP, Golang, and Python, enabling me to craft innovative and efficient solutions for complex challenges."
        />
        <meta name="author" content="Abdullah Isbarul Fahmi" />
        <meta
          name="keywords"
          content="Abdullah Isbarul Fahmi, Abdullah, Isbarul, Fahmi, Ais Aif, Ais, Aif, Web Developer, Software Engineer, Laravel, Node.js, Golang, Vue.js, React, TypeScript, PHP, Golang, Python"
        />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}

