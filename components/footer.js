import Link from "next/link";
import React from "react";

export default function Footer() {
  const data = {
    list_02: [
      {
        id: 1,
        text: "About Us",
        link: "/about",
      },
      {
        id: 2,
        text: "Contact Us",
        link: "/contact",
      },
      {
        id: 3,
        text: "Our Process",
        link: "/process",
      },
      {
        id: 4,
        text: "FAQ",
        link: "/faq",
      },
    ],
    list_03: [
      {
        id: 5,
        text: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        id: 6,
        text: "Term of Service",
        link: "/term-service",
      },
      {
        id: 7,
        text: "Profile",
        link: "/profile",
      },
    ],
  };
  return (
    <footer>
      <div className="contain">
        <div className="flex_row main_row row">
          <div className="col-xl-4">
            <div className="in_col">
              <h4>Follow Us</h4>
              <div className="social_logon">
                <Link href="/" target="_blank" rel="noreferrer">
                  <img src="/images/facebook.svg" alt="" />
                </Link>
                <Link href="/" target="_blank" rel="noreferrer">
                  <img src="/images/twitter.svg" alt="" />
                </Link>
                <Link href="/" target="_blank" rel="noreferrer">
                  <img src="/images/instagram.svg" alt="" />
                </Link>
                <Link href="/" target="_blank" rel="noreferrer">
                  <img src="/images/linkedin.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg mid_col">
            <div className="in_col">
              <h4>About</h4>
              <div className="flex">
                <ul className="list">
                  {data.list_02.map((val) => {
                    return (
                      <li key={val.id}>
                        <Link href={val.link}>{val.text}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul className="list">
                  {data.list_02.map((val) => {
                    return (
                      <li key={val.id}>
                        <Link href={val.link}>{val.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="in_col">
              <h4>Contact Us</h4>
              <ul className="contact_lst">
                <li>
                  <Link href="">
                    <img src="/images/send.svg" alt="" />
                    <span>support@veerra.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="text-center">
            © 2024 Veerra. All Rights Reserved. Veerra, LLC is a{" "}
            <Link href="">licensed</Link> brokerage in the state of Florida.
          </p>
        </div>
      </div>
    </footer>
  );
}
