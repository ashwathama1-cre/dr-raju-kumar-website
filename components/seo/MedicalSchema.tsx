"use client";

export default function MedicalSchema() {

  const schema = {

    "@context": "https://schema.org",

    "@type": "Physician",


    name: "Dr. Raju Kumar",


    description:
      "Dr. Raju Kumar is a Gastroenterologist, Liver Specialist and Endoscopy Specialist in Lucknow providing advanced digestive care.",


    medicalSpecialty: [

      "Gastroenterology",

      "Hepatology",

      "Endoscopy"

    ],


    address: {

      "@type": "PostalAddress",

      addressLocality: "Lucknow",

      addressRegion: "Uttar Pradesh",

      addressCountry: "India"

    },


    areaServed: {

      "@type": "City",

      name: "Lucknow"

    },


    availableService: [

      {

        "@type": "MedicalProcedure",

        name: "Endoscopy"

      },


      {

        "@type": "MedicalTherapy",

        name: "Liver Disease Treatment"

      },


      {

        "@type": "MedicalTherapy",

        name: "Digestive Disorder Treatment"

      }

    ],


    contactPoint: {

      "@type": "ContactPoint",

      telephone: "+917379755375",

      contactType: "appointment"

    }

  };



  return (

    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{

        __html: JSON.stringify(schema),

      }}

    />

  );

}