

function AboutSection() {
  return (
    <div id="about-section">
      <div className="container">
        <div className="section-heading">
          <h5 className="heading-label">About us</h5>
          <h2 className="heading-2">Who we are</h2>
        </div>

        <div className="grid col-2-by-1">
          <div className="img-box">
            <img src="../../public/Right Side.png" alt="" />
          </div>

          <div className="grid col-2-by-1 about-section_cards">
            <div className="about-section_card about-section_card-1">
              <div className="about-section_card-heading-box">
                <div className="about-section_card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.99996L12.295 2.30996C12.2018 2.27008 12.1014 2.24951 12 2.24951C11.8986 2.24951 11.7982 2.27008 11.705 2.30996L12 2.99996ZM12 21L11.628 21.651C11.7413 21.7157 11.8695 21.7497 12 21.7497C12.1305 21.7497 12.2587 21.7157 12.372 21.651L12 21ZM11.704 2.31096L5.312 5.04996L5.9 6.42996L12.294 3.68996L11.704 2.31096ZM4.25 6.65896V13.519H5.75V6.65896H4.25ZM7.651 19.379L11.628 21.651L12.372 20.349L8.395 18.076L7.651 19.379ZM12.372 21.651L16.349 19.379L15.605 18.076L11.628 20.349L12.372 21.651ZM19.75 13.518V6.65996H18.25V13.52L19.75 13.518ZM18.69 5.05096L12.295 2.31096L11.705 3.68896L18.099 6.42996L18.69 5.05096ZM19.75 6.65996C19.75 5.95996 19.333 5.32696 18.69 5.05096L18.099 6.42996C18.1439 6.44933 18.1821 6.48144 18.209 6.52232C18.2358 6.5632 18.2501 6.61106 18.25 6.65996H19.75ZM16.349 19.379C17.3821 18.7886 18.2408 17.9357 18.838 16.9066C19.4353 15.8775 19.7499 14.7088 19.75 13.519H18.25C18.2498 14.4443 18.0051 15.3531 17.5406 16.1533C17.0761 16.9536 16.4083 17.6168 15.605 18.076L16.349 19.379ZM4.25 13.519C4.25011 14.7088 4.56473 15.8775 5.16199 16.9066C5.75925 17.9357 6.61792 18.7886 7.651 19.379L8.395 18.076C7.59151 17.6168 6.92367 16.9533 6.45917 16.1529C5.99468 15.3524 5.75002 14.4434 5.75 13.518L4.25 13.519ZM5.31 5.04996C4.99541 5.18494 4.72731 5.40922 4.5389 5.69503C4.35049 5.98084 4.25004 6.31664 4.25 6.65896H5.75C5.75 6.55896 5.81 6.46796 5.902 6.42796L5.31 5.04996Z"
                      fill="#121212"
                    />
                    <path
                      d="M15 10L11 14L9 12"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="about-section_card-heading">Our Identity</h4>
              </div>
              <p className="about-section_card-paragraph">
                FOYSOL Consulting & Advisory Co. Ltd is a dynamic insurance
                consulting and advisory firm offering comprehensive insurance
                and risk solutions tailored to organizations.
              </p>
            </div>
            <div className="about-section_card about-section_card-2">
              <div className="about-section_card-heading-box">
                <div className="about-section_card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1459 7.02251C11.5259 6.34084 11.7159 6 12 6C12.2841 6 12.4741 6.34084 12.8541 7.02251L12.9524 7.19887C13.0603 7.39258 13.1143 7.48944 13.1985 7.55334C13.2827 7.61725 13.3875 7.64097 13.5972 7.68841L13.7881 7.73161C14.526 7.89857 14.895 7.98205 14.9828 8.26432C15.0706 8.54659 14.819 8.84072 14.316 9.42898L14.1858 9.58117C14.0429 9.74833 13.9714 9.83191 13.9392 9.93531C13.9071 10.0387 13.9179 10.1502 13.9395 10.3733L13.9592 10.5763C14.0352 11.3612 14.0733 11.7536 13.8435 11.9281C13.6136 12.1025 13.2682 11.9435 12.5773 11.6254L12.3986 11.5431C12.2022 11.4527 12.1041 11.4075 12 11.4075C11.8959 11.4075 11.7978 11.4527 11.6014 11.5431L11.4227 11.6254C10.7318 11.9435 10.3864 12.1025 10.1565 11.9281C9.92674 11.7536 9.96476 11.3612 10.0408 10.5763L10.0605 10.3733C10.0821 10.1502 10.0929 10.0387 10.0608 9.93531C10.0286 9.83191 9.95713 9.74833 9.81418 9.58117L9.68403 9.42898C9.18097 8.84072 8.92945 8.54659 9.01723 8.26432C9.10501 7.98205 9.47396 7.89857 10.2119 7.73161L10.4028 7.68841C10.6125 7.64097 10.7173 7.61725 10.8015 7.55334C10.8857 7.48944 10.9397 7.39258 11.0476 7.19887L11.1459 7.02251Z"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7.35111 15L6.71424 17.323C6.0859 19.6148 5.77173 20.7607 6.19097 21.3881C6.3379 21.6079 6.535 21.7844 6.76372 21.9008C7.41635 22.2331 8.42401 21.7081 10.4393 20.658C11.1099 20.3086 11.4452 20.1339 11.8014 20.0959C11.9335 20.0818 12.0665 20.0818 12.1986 20.0959C12.5548 20.1339 12.8901 20.3086 13.5607 20.658C15.576 21.7081 16.5837 22.2331 17.2363 21.9008C17.465 21.7844 17.6621 21.6079 17.809 21.3881C18.2283 20.7607 17.9141 19.6148 17.2858 17.323L16.6489 15"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <h4 className="about-section_card-heading">Our Expertise</h4>
              </div>
              <p className="about-section_card-paragraph">
                Backed by over 30 years of leadership experience in
                underwriting, claims, risk management, broking, compliance, and
                consultancy.
              </p>
            </div>
            <div className="about-section_card about-section_card-3">
              <div className="about-section_card-heading-box">
                <div className="about-section_card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2 12L5 12"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19 12L22 12"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 22L12 19"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 5L12 2"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10 12H12H14"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 14L12 12L12 10"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="about-section_card-heading">Our Purpose</h4>
              </div>
              <p className="about-section_card-paragraph">
                We help organizations protect assets, manage risks, and
                strengthen financial security through clarity-driven, strategic
                advisory.
              </p>
            </div>
            <div className="about-section_card about-section_card-4">
              <div className="about-section_card-heading-box">
                <div className="about-section_card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13.024 14.5591C10.7142 15.483 9.5593 15.945 8.89964 15.4967C8.74324 15.3904 8.60834 15.2555 8.50206 15.0991C8.0538 14.4395 8.51575 13.2846 9.43967 10.9748C9.63673 10.4821 9.73527 10.2358 9.90474 10.0426C9.94792 9.99331 9.99429 9.94695 10.0435 9.90376C10.2368 9.73429 10.4831 9.63576 10.9758 9.43869C13.2856 8.51478 14.4405 8.05282 15.1001 8.50108C15.2565 8.60736 15.3914 8.74226 15.4977 8.89867C15.946 9.55832 15.484 10.7132 14.5601 13.023C14.363 13.5157 14.2645 13.762 14.095 13.9552C14.0518 14.0045 14.0055 14.0509 13.9562 14.094C13.763 14.2635 13.5166 14.362 13.024 14.5591Z"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <h4 className="about-section_card-heading">Our Approach</h4>
              </div>
              <p className="about-section_card-paragraph">
                We deliver client-centric, insight-driven solutions combining
                industry knowledge, practical experience, and bespoke
                strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
