import { useState } from "react";

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
             if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
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
             <p>{faq.answer}</p>
           </div>
         </div>
         
          ))}
        </div>

        {/* Right panel for desktop */}
        <div className="faq-answers">
          <h2 className="heading-2">FAQs</h2>
          <div className="faq-answer-wrapper">
            <p key={hoverIndex} className="faq-answer">
              {Faqs[hoverIndex].answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


const Faqs = [
  {
    question: "What services does FOYSOL Consulting & Advisory provide?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iste ipsam natus laboriosam! Veritatis, quod incidunt quae commodi neque odio laboriosam alias aspernatur enim eos tempora illo ipsum dolore laudantium? 111",
  },
  {
    question: "Who can work with FOYSOL?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iste ipsam natus laboriosam! Veritatis, quod incidunt quae commodi neque odio laboriosam alias aspernatur enim eos tempora illo ipsum dolore laudantium? 222",
  },
  {
    question: "Are you an insurance broker or an insurance company?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iste ipsam natus laboriosam! Veritatis, quod incidunt quae commodi neque odio laboriosam alias aspernatur enim eos tempora illo ipsum dolore laudantium? 333",
  },
  {
    question: "How do you help with insurance placement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iste ipsam natus laboriosam! Veritatis, quod incidunt quae commodi neque odio laboriosam alias aspernatur enim eos tempora illo ipsum dolore laudantium? 444",
  },
  {
    question: "Can you help review our existing insurance policies?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iste ipsam natus laboriosam! Veritatis, quod incidunt quae commodi neque odio laboriosam alias aspernatur enim eos tempora illo ipsum dolore laudantium? 555",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iste ipsam natus laboriosam! Veritatis, quod incidunt quae commodi neque odio laboriosam alias aspernatur enim eos tempora illo ipsum dolore laudantium? 666",
  },
];
