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
1. **Insurance Consultancy**: Portfolio reviews, gap analysis, and optimization. 

2. **Risk Advisory Services**: Identification, mitigation, and business continuity planning.

3. **Strategic Placement**: Negotiating favorable terms with insurers.
      
4. **Claims Management & Advocacy**: End-to-end support to secure fair settlements. 

5. **Training Programs**: Practical workshops for insurance and risk teams. 

6. **Regulatory Advisory**: Ensuring compliance with local and global standards. `,
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
    answer:
      `FOYSOL Consulting & Advisory  is neither an **insurance company nor a broker**. We are a **dynamic insurance consulting and advisory** firm, offering comprehensive **insurance solutions, risk management strategies** and bespoke training programs. We deliver **insights** that help **organizations protect their assets**, **manage risks**, and achieve **financial security**.`,
  },
  {
    question: "How do you help with insurance placement?",
    answer:
      `We review the client's business operations, assets, and exposures, identify insurable risks e.g. property, liability, health, life etc., identify statutory insurance requirements. We ultimately act as the professional bridge between the client and the insurance providers, ensuring the client gets the right cover, at the right price, with the right insurer`,
  },
  {
    question: "Can you help review our existing insurance policies?",
    answer: "Yes, we can",
  },
  {
    question: "What industries do you specialize in?",
    answer: `We specialize across key industries where risk exposure and insurance needs are significant, such as:
      
1. **Corporate & Commercial businesses** e.g. SMEs, Large enterprises, Manufacturing, Trading and Services
      
2. **Construction & Real Estate** e.g. Contractors and Developers, Infrastructure Projects
      
3. **Oil & Gas/Energy** e.g. Upstream and Downstream operators, Energy Service companies
      
4. **Healthcare** e.g. Hospitals, Clinics, Laboratories, Pharmaceutical companies, HMOs- Financial Services e.g. Banks, FinTechs, MFIs, Cooperatives`,
  },
];
