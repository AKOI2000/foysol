import { Helmet } from "react-helmet";

const SchemaWebsite = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Foysol Consulting and Advisory Co. Ltd",
          "url": "https://foysolconsulting.com",
          "publisher": {
            "@type": "Organization",
            "name": "Foysol Consulting and Advisory Co. Ltd"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SchemaWebsite;
