import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Testimonial() {
  // const containerRef = useRef(null);
  // const wrapperRef = useRef(null);

  // useEffect(() => {
  //   const mm = gsap.matchMedia();

  //   mm.add(
  //     {
  //       horizontalLayout:
  //         "(max-width: 950px), (hover: none) and (pointer: coarse)",
  //     },
  //     (context) => {
  //       if (context.conditions.horizontalLayout && wrapperRef.current && containerRef.current) {
  //         const totalWidth =
  //           wrapperRef.current.scrollWidth - containerRef.current.offsetWidth;

  //         gsap.to(wrapperRef.current, {
  //           x: -totalWidth,
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: containerRef.current,
  //             pin: true,
  //             scrub: true,
  //             start: "top 10%",
  //             end: () => `+=${totalWidth}`,
  //             invalidateOnRefresh: true,
  //             pinSpacing: true,
  //           },
  //         });
  //       }
  //     }
  //   );

  //   return () => {
  //     mm.revert();
  //   };
  // }, []);

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  // Detect route changes and force re-initialization
  useEffect(() => {
    setMounted(false);
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!mounted) return;

    // Kill any existing ScrollTriggers on this element
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === containerRef.current) {
        st.kill();
      }
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        horizontalLayout:
          "(max-width: 950px), (hover: none) and (pointer: coarse)",
      },
      (context) => {
        if (context.conditions.horizontalLayout) {
          // Wait for layout to settle
          requestAnimationFrame(() => {
            if (wrapperRef.current && containerRef.current) {
              // Wait for images to load
              const images = containerRef.current.querySelectorAll("img");
              const imagePromises = Array.from(images).map((img) => {
                if (img.complete) return Promise.resolve();
                return new Promise((resolve) => {
                  img.onload = resolve;
                  img.onerror = resolve;
                  // Timeout fallback in case image fails
                  setTimeout(resolve, 1000);
                });
              });

              Promise.all(imagePromises).then(() => {
                // Double check refs still exist
                if (!wrapperRef.current || !containerRef.current) return;

                const totalWidth =
                  wrapperRef.current.scrollWidth -
                  containerRef.current.offsetWidth;

                gsap.to(wrapperRef.current, {
                  x: -totalWidth,
                  ease: "none",
                  scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    invalidateOnRefresh: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                  },
                });

                // Refresh after a short delay
                setTimeout(() => {
                  ScrollTrigger.refresh();
                }, 100);
              });
            }
          });
        }
      }
    );

    return () => {
      mm.revert();
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) {
          st.kill();
        }
      });
    };
  }, [mounted]);

  return (
    <div id="testimonials">
      <div className="horizontal-container" ref={containerRef}>
        <div className="section-heading">
          <h5 className="heading-label">Testimonials</h5>
          <h2 className="heading-2">
            Trusted by Leaders <span>from various industries</span>
          </h2>
          <p>
            Discover how our advisory solutions have helped businesses gain
            clarity, reduce risk, and make confident decisions.
          </p>
        </div>

        <div ref={wrapperRef} className="horizontal-wrapper">
          {testimonials.map((testimonial, index) => (
            <div className="panel" key={index}>
              <div className="inner-box">
                <p>{testimonial.text}</p>

                <div className="testimonial-info">
                  <img
                    src={testimonial.imgUrl}
                    alt={`${testimonial.name} testimony about FOYSOL CONSULTING`}
                  />
                  <div className="testimonial-info_text">
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.role}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-lg">
        <div className="grid col-7-by-5">
          <figure className="testimonial-figure testimonial-figure-1">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597204/leader_Image_5_nx2mnl.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “What stood out most was FOYSOL’s attention to detail and
              commitment to our business objectives. They did not offer generic
              advice—they delivered tailored solutions.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-2">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597207/leader_Image_9_gjbwyz.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “FOYSOL Consulting added real value to our risk management
              strategy. Their guidance improved our decision-making and
              strengthened our overall risk posture.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-3">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597205/leader_Image_6_gx7oqx.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “The team at FOYSOL is knowledgeable, responsive, and highly
              professional. Their advisory support exceeded our expectations.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-4">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597214/leader_Image_10_eqace4.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “FOYSOL’s expertise helped us optimize our insurance coverage
              while ensuring compliance with regulatory standards. Their
              recommendations were both strategic and practical.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-5">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597207/leader_Image_vn3xxo.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “From initial consultation to final delivery, FOYSOL Consulting
              maintained a high level of professionalism and clarity. We felt
              confident throughout the engagement.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-6">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597159/leader_Image_1_dqjno1.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “FOYSOL provided insightful risk advisory services that helped us
              anticipate challenges rather than react to them. Their
              forward-thinking approach sets them apart.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-7">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597159/leader_Image_2_vh8hlz.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “FOYSOL Consulting delivered clear, well-structured advice that
              empowered our team to make informed decisions with confidence.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-8">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597206/leader_Image_8_l05rvf.webp"
              alt=""
              loading="lazy"
            />
            <p>
              ”FOYSOL Consulting demonstrated exceptional professionalism and
              deep industry knowledge. Their advisory approach helped us
              identify critical risk gaps and implement practical solutions
              quickly.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-9">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597206/leader_Image_7_ooxgby.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “Working with FOYSOL was a seamless experience. Their team broke
              down complex insurance concepts into clear, actionable insights
              that our leadership could immediately apply.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-10">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597186/leader_Image_4_qkypst.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “Their ability to align insurance solutions with our business
              goals was impressive. FOYSOL truly understands how risk impacts
              operations.”
            </p>
          </figure>
          <figure className="testimonial-figure testimonial-figure-11">
            <img
              src="https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597159/leader_Image_3_xp1pqx.webp"
              alt=""
              loading="lazy"
            />
            <p>
              “The training session facilitated by FOYSOL was practical,
              engaging, and highly relevant to our operations. Our team gained
              valuable, real-world knowledge.”
            </p>
          </figure>

          <div className="testimonial-text-card">
            <div className="section-heading">
              <h5 className="heading-label">Testimonials</h5>
              <h2 className="heading-2">
                Trusted by Leaders <span>from various industries</span>
              </h2>
            </div>

            <p>
              Discover how our advisory solutions have helped businesses gain
              clarity, reduce risk, and make confident decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

const testimonials = [
  {
    imgUrl:
      "https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597204/leader_Image_5_nx2mnl.webp",
    text: "What stood out most was FOYSOL’s attention to detail and commitment to our business objectives. They did not offer generic advice—they delivered tailored solutions.",
    name: "Alexandria Sandra",
    role: "lorem ispum",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597207/leader_Image_9_gjbwyz.webp",
    text: "FOYSOL Consulting added real value to our risk management strategy. Their guidance improved our decision-making and strengthened our overall risk posture.",
    name: "Alexandria Sandra",
    role: "lorem ispum",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597205/leader_Image_6_gx7oqx.webp",
    text: "The team at FOYSOL is knowledgeable, responsive, and highly professional. Their advisory support exceeded our expectations.",
    name: "Alexandria Sandra",
    role: "lorem ispum",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597214/leader_Image_10_eqace4.webp",
    text: "FOYSOL’s expertise helped us optimize our insurance coverage while ensuring compliance with regulatory standards. Their recommendations were both strategic and practical.",
    name: "Alexandria Sandra",
    role: "lorem ispum",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597207/leader_Image_vn3xxo.webp",
    text: "From initial consultation to final delivery, FOYSOL Consulting maintained a high level of professionalism and clarity. We felt confident throughout the engagement.",
    name: "Alexandria Sandra",
    role: "lorem ispum",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dbn6k7pg6/image/upload/w_auto,f_auto,q_auto/v1768597159/leader_Image_1_dqjno1.webp",
    text: "FOYSOL provided insightful risk advisory services that helped us anticipate challenges rather than react to them. Their forward-thinking approach sets them apart.",
    name: "Alexandria Sandra",
    role: "lorem ispum",
  },
];
