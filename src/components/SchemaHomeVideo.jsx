import { Helmet } from "react-helmet";

const SchemaHomeVideo = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "Insurance Advisory Overview",
          "description":
            "Introduction to Foysol Consulting and Advisory Co. Ltd and its independent insurance advisory services.",
          "thumbnailUrl": "https://foysolconsulting.com/Foysol-ss.jpg",
          "uploadDate": "2025-01-20",
          "contentUrl": "https://foysolconsulting.com/Foysol.mp4",
          "embedUrl": "https://foysolconsulting.com/"
        })}
      </script>
    </Helmet>
  );
};

export default SchemaHomeVideo;
