import { Helmet } from "react-helmet";

const SchemaFAQ = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does FOYSOL Consulting & Advisory provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FOYSOL Consulting & Advisory is licensed to provide insurance consulting and advisory services, specializing in independent risk analysis, insurance needs assessment, program structuring, policy optimization, and claims advisory support for corporate organizations, SMEs, NGOs, and regulated industries. The firm also organizes tailor-made training and capacity building for in-house insurance, risk, HR, and finance teams."
              }
            },
            {
              "@type": "Question",
              "name": "Are you an insurance broker or an insurance company?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FOYSOL Consulting & Advisory is neither an insurance broker nor an insurance company. The firm operates strictly as a client advisor and does not underwrite or place insurance business. It collaborates with NAICOM-licensed brokers and insurance companies while remaining independent advisors to its clients."
              }
            },
            {
              "@type": "Question",
              "name": "Who can work with FOYSOL Consulting & Advisory Co. Ltd?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FOYSOL Consulting & Advisory works with individuals and organizations needing insurance advice, insurance providers such as insurers and reinsurers, skilled professionals including accountants, lawyers, HMOs, and engineers, regulators and government bodies, as well as freelancers and specialists."
              }
            },
            {
              "@type": "Question",
              "name": "How do you help with insurance placement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FOYSOL Consulting & Advisory reviews a client’s business operations, assets, personnel, and risk exposures. The firm identifies statutory and optional insurance requirements, evaluates insurable risks such as property, liability, health, and life, and reviews policy documents for accuracy and completeness. Coverage is assessed against advisory recommendations to identify gaps, errors, or compliance issues, with post-placement advisory support also provided."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help review our existing insurance policies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. FOYSOL Consulting & Advisory provides reviews of existing insurance policies."
              }
            },
            {
              "@type": "Question",
              "name": "What industries do you specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FOYSOL Consulting & Advisory specializes in delivering strategic insurance consulting and advisory services to corporates, institutions, and project-based enterprises. Industries served include corporate and commercial businesses such as SMEs, large enterprises, manufacturing, trading and services; construction and real estate; oil and gas and energy; healthcare; financial services; transport and logistics; education; agriculture and agro-allied sectors; as well as NGOs, government, and development projects."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SchemaFAQ;
