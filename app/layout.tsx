import type { Metadata } from "next";

import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";


import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CallButton from "@/components/shared/CallButton";



const inter = Inter({

  subsets:["latin"],

  variable:"--font-inter",

});



const playfair = Playfair_Display({

  subsets:["latin"],

  variable:"--font-playfair",

});




export const metadata: Metadata = {

  title:
    "Dr. Raju Kumar | Best Gastroenterologist & Liver Specialist in Lucknow",


  description:
    "Dr. Raju Kumar is a leading Gastroenterologist in Lucknow specializing in liver diseases, digestive disorders, GERD, IBS and advanced endoscopy procedures.",


  keywords:[

    "Gastroenterologist Lucknow",

    "Best Gastroenterologist in Lucknow",

    "Liver Specialist Lucknow",

    "Endoscopy Specialist",

    "Digestive Disease Specialist",

    "Dr Raju Kumar",

  ],



  authors:[

    {
      name:"Dr. Raju Kumar",
    }

  ],



  creator:
    "Dr. Raju Kumar",



  openGraph:{


    title:
      "Dr. Raju Kumar | Gastroenterologist Lucknow",


    description:
      "Advanced digestive care, liver treatment and endoscopy services in Lucknow.",


    type:"website",


    locale:"en_IN",


    siteName:
      "Dr. Raju Kumar Clinic",

  },



  twitter:{


    card:"summary_large_image",


    title:
      "Dr. Raju Kumar | Gastroenterologist Lucknow",


    description:
      "Expert gastroenterology and liver care in Lucknow.",

  },


  robots:{


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



        <WhatsAppButton />


        <CallButton />


      </body>


    </html>

  );

}