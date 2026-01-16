import { Helmet } from "react-helmet";

const SchemaLocalBusiness = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Foysol Consulting and Advisory Co. Ltd",
          "url": "https://foysolconsulting.com",
          "description":
            "Independent insurance advisory and consulting firm offering policy analysis and risk assessment services.",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "NG"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Lagos"
                },
                {
                  "@type": "City",
                  "name": "Abuja"
                },
                {
                  "@type": "Country",
                  "name": "Nigeria"
                }
              ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Insurance Consultation",
            "email": "consult@foysolconsulting.com"
          }
        })}
      </script>
    </Helmet>
  );
};



export default SchemaLocalBusiness;
