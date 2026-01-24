import { Helmet } from "react-helmet";

const Seo = ({
  title,
  description,
  canonical,
  type = "website",
  image = "https://www.foysolconsulting.com/Logo.png",
}) => {
  return (
    <Helmet>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Independent insurance advisory and consulting firm"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
