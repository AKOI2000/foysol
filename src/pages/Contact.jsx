import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

function Contact() {
  return (
    <div id="contact">
      <Navbar />

      <div className="sub-hero">
        <img src="/about-subhero.png" alt="" />
        <h1 className="sub-hero_text heading-2">
          Home<span>/About Us</span>
        </h1>
      </div>

      <div className="container">
        <div className="grid col-2_5-by-1">
          <div className="contact-info">
            <h3 className="heading-3">You tell us. We listen.</h3>

            <div className="contact-info_details">
              <div className="detail">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66667 13.3333C1.20833 13.3333 0.816111 13.1703 0.49 12.8442C0.163889 12.5181 0.000555556 12.1256 0 11.6667V1.66667C0 1.20833 0.163333 0.816111 0.49 0.49C0.816667 0.163889 1.20889 0.000555555 1.66667 0H15C15.4583 0 15.8508 0.163333 16.1775 0.49C16.5042 0.816666 16.6672 1.20889 16.6667 1.66667V11.6667C16.6667 12.125 16.5036 12.5175 16.1775 12.8442C15.8514 13.1708 15.4589 13.3339 15 13.3333H1.66667ZM8.33333 7.5L1.66667 3.33333V11.6667H15V3.33333L8.33333 7.5ZM8.33333 5.83333L15 1.66667H1.66667L8.33333 5.83333ZM1.66667 3.33333V1.66667V11.6667V3.33333Z"
                    fill="#121212"
                  />
                </svg>
                <p>info@foysolconsulting.com</p>
              </div>
              <div className="detail">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.52415 13.4756C4.73198 11.68 3.35374 9.51448 2.48581 7.13061C2.00831 5.82728 2.44581 4.39561 3.42748 3.41394L4.03498 2.80727C4.1983 2.64362 4.3923 2.51379 4.60586 2.4252C4.81942 2.33661 5.04836 2.29102 5.27956 2.29102C5.51077 2.29102 5.7397 2.33661 5.95327 2.4252C6.16683 2.51379 6.36082 2.64362 6.52415 2.80727L7.94665 4.22978C8.1103 4.3931 8.24013 4.58709 8.32872 4.80065C8.41731 5.01422 8.4629 5.24315 8.4629 5.47436C8.4629 5.70556 8.41731 5.9345 8.32872 6.14806C8.24013 6.36162 8.1103 6.55562 7.94665 6.71894L7.59665 7.06894C7.45655 7.20901 7.34542 7.3753 7.2696 7.55832C7.19378 7.74134 7.15475 7.9375 7.15475 8.13561C7.15475 8.33371 7.19378 8.52988 7.2696 8.7129C7.34542 8.89592 7.45655 9.06221 7.59665 9.20228L10.7966 12.4031C10.9367 12.5432 11.103 12.6543 11.286 12.7302C11.469 12.806 11.6652 12.845 11.8633 12.845C12.0614 12.845 12.2576 12.806 12.4406 12.7302C12.6236 12.6543 12.7899 12.5432 12.93 12.4031L13.2808 12.0531C13.4441 11.8895 13.6381 11.7596 13.8517 11.671C14.0653 11.5824 14.2942 11.5368 14.5254 11.5368C14.7566 11.5368 14.9855 11.5824 15.1991 11.671C15.4127 11.7596 15.6067 11.8895 15.77 12.0531L17.1925 13.4756C17.3561 13.6389 17.486 13.8329 17.5746 14.0465C17.6631 14.26 17.7087 14.489 17.7087 14.7202C17.7087 14.9514 17.6631 15.1803 17.5746 15.3939C17.486 15.6075 17.3561 15.8015 17.1925 15.9648L16.5858 16.5714C15.6041 17.5539 14.1725 17.9914 12.8691 17.5139C10.4853 16.646 8.31979 15.2678 6.52415 13.4756Z"
                    stroke="#121212"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>0809 167 1462</p>
              </div>
              <div className="detail">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99996 18.3332C14.6025 18.3332 18.3333 14.6023 18.3333 9.99984C18.3333 5.39734 14.6025 1.6665 9.99996 1.6665C5.39746 1.6665 1.66663 5.39734 1.66663 9.99984C1.66663 14.6023 5.39746 18.3332 9.99996 18.3332Z"
                    stroke="#121212"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0033 5V10.0042L13.5362 13.5375"
                    stroke="#121212"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Monday to Saturday. 9am to 7pm.</p>
              </div>
            </div>
          </div>
          <form action="" className="contact-form">
            <h3 className="heading-3">Have any Queries? We’re here to help.</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              required
              autoComplete="false"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="subject"
              required
              autoComplete="false"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="email"
              required
              autoComplete="false"
            />
            <textarea
              name=""
              id=""
              placeholder="message"
              required
              autoComplete="false"
            ></textarea>
            <button className="btn btn-main">Send message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
