import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function FAQs() {
  const [hoverIndex, setHoverIndex] = useState(0); // desktop hover
  const [openIndex, setOpenIndex] = useState(null); // mobile accordion

  return (
    <div id="faqs">
      <div className="grid col-2-by-1 faq">
        {/* Questions */}
        <div className="faq-questions">
          {Faqs.map((faq, index) => (
            <div
              className={`faq-question ${openIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              onMouseEnter={() => {
                if (
                  window.matchMedia("(hover: hover) and (pointer: fine)")
                    .matches
                ) {
                  setHoverIndex(index);
                }
              }}
            >
              <div className="faq-question-heading">
                <p>{faq.question}</p>
                <svg
                  className="faq-arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#1E1E1E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="faq-question-body">
                <ReactMarkdown>{faq.answer}</ReactMarkdown>
                {/* <p>{faq.answer}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Right panel for desktop */}
        <div className="faq-answers">
          <h2 className="heading-2">FAQs</h2>
          <div className="faq-answer-wrapper">
            <div className="faq-answer">
              <ReactMarkdown>{Faqs[hoverIndex].answer}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Faqs = [
  {
    question: "What services does FOYSOL Consulting & Advisory provide?",
    answer: `
Our firm is licensed to provide **insurance consulting** and **advisory services**, specializing in independent **risk analysis**, insurance needs assessment, program structuring, policy optimization, and claims advisory support for corporate organizations, SMEs, NGOs, and regulated industries. 
We organize tailor-made  trainings and capacity building for in-house insurance, risk, HR, and finance teams. `,
  },
  {
    question: "Who can work with FOYSOL?",
    answer: ` 
We work with a wide range of people and organizations, summarized below: 
      
1. **Clients** - individuals or organizations needing insurance advice 
      
2. **Insurance Providers** (Insurers and Re-insurers) 
      
3. **Skilled Professionals** (Accountants, Lawyers, HMOs, Engineers etc) 
      
4. **Regulators and Government bodies** (Freelancers and Specialists)`,
  },
  {
    question: "Are you an insurance broker or an insurance company?",
    answer: `FOYSOL Consulting & Advisory  is neither a broke nor an insurance company. We operate strictly as client advisors and do not underwrite or place insurance business but we collaborate with NAICOM-licensed brokers and insurance companies while remaining independent advisors to our clients..`,
  },
  {
    question: "How do you help with insurance placement?",
    answer: `We review the client's business operations, assets, personnel, and exposures, identify statutory and optional insurance requirements, identify insurable risks e.g. property, liability, health, life etc.. We review policy documents for accuracy and completeness and confirms that coverage aligns with advisory recommendations in order to highlight gaps, errors or compliance issues for correction. also we offer post-placement advisory support`,
  },
  {
    question: "Can you help review our existing insurance policies?",
    answer: "Yes, we can",
  },
  {
    question: "What industries do you specialize in?",
    answer: `Our core specialisation lies in delivering strategis insurance consulting and advisory services to corporates, institutions, and project-based enterprises, requiring sophisticated, compliant, and cost-effective insurance solutions, such as:
      
1. **Corporate & Commercial businesses** e.g. SMEs, Large enterprises, Manufacturing, Trading and Services
      
2. **Construction & Real Estate** e.g. Contractors and Developers, Infrastructure Projects
      
3. **Oil & Gas/Energy** e.g. Upstream and Downstream operators, Energy Service companies
      
4. **Healthcare** e.g. Hospitals, Clinics, Laboratories, Pharmaceutical companies, HMOs- Financial Services e.g. Banks, FinTechs, MFIs, Cooperatives

5. **Transport and Logistics**
6. **Education Sector**
7. **Agriculture & Agro-Allied**
8. **NGOs, Government & Development Projects**`
},
];
