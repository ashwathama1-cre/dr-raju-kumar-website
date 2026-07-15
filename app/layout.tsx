import type { Metadata } from "next";

import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";


import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CallButton from "@/components/shared/CallButton";
import MedicalSchema from "@/components/seo/MedicalSchema";



const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter",

});



const playfair = Playfair_Display({

  subsets: ["latin"],

  variable: "--font-playfair",

});




export const metadata: Metadata = {

  title:
    "Dr. Raju Kumar | Best Gastroenterologist & Liver Specialist in Lucknow",


  description:
    "Dr. Raju Kumar is a leading Gastroenterologist in Lucknow specializing in digestive disorders, liver diseases, GERD, IBS, fatty liver and advanced endoscopy procedures.",



  keywords: [

    "Best Gastroenterologist in Lucknow",

    "Gastroenterologist Lucknow",

    "Liver Specialist Lucknow",

    "Endoscopy Specialist Lucknow",

    "Digestive Disease Doctor",

    "Dr Raju Kumar",

  ],



  authors: [

    {
      name: "Dr. Raju Kumar",
    }

  ],



  creator:

    "Dr. Raju Kumar",



  metadataBase:

    new URL(
      "https://your-domain.com"
    ),



  openGraph: {

    title:
      "Dr. Raju Kumar | Gastroenterologist Lucknow",


    description:
      "Advanced digestive care, liver treatment and endoscopy services in Lucknow.",


    type:
      "website",


    locale:
      "en_IN",


    siteName:
      "Dr. Raju Kumar Clinic",

  },



  twitter: {

    card:
      "summary_large_image",


    title:
      "Dr. Raju Kumar | Gastroenterologist Lucknow",


    description:
      "Expert gastroenterology, liver care and endoscopy services in Lucknow.",

  },



  robots: {

    index:true,

    follow:true,

  },


};





export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">


      <body

        className={`
        ${inter.variable}
        ${playfair.variable}
        antialiased
        `}

      >


        {children}



        {/* Google Medical Structured Data */}

        <MedicalSchema />



        {/* Floating Contact Actions */}

        <WhatsAppButton />

        <CallButton />


      </body>


    </html>

  );

}