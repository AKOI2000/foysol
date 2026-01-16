import { Helmet } from "react-helmet";

const SchemaOrganization = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Foysol Consulting and Advisory Co. Ltd",
          "url": "https://foysolconsulting.com",
          "description":
            "Independent insurance advisory and consulting firm providing policy reviews, risk assessment, and unbiased insurance guidance. The firm does not sell insurance policies.",
          "sameAs": [
            "https://www.linkedin.com/company/yourcompany"
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

export default SchemaOrganization;
