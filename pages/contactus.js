import CommonCta from "@/components/common-cta";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Contactus = () => {
  return (
    <>
      <main>
        <section className="uj_contact_us">
          <div className="contain">
            <div className="sec_heading">
              <h2>Get In Touch With Us</h2>
              <p>
                Here at Veerra, our mission is to disrupt the real estate
                industry and promote competition for all. That’s why we know not
                everything we do will always be perfect the first time. Veerra
                is always looking for feedback to continuously improve each day.
                Whether it’s good, bad, or you would like to give an idea to
                help improve our service, fill out the form and let us know!
              </p>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="inner_form">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <select className="input">
                            <option value="0">User Type</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <textarea
                            className="input txtArea"
                            placeholder="Write your message"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="cta">
                          <button className="site_btn">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col2">
                <div className="inner_2">
                  <ul>
                    <li>
                      <h5>For Media Inquiries</h5>
                      <div className="mail_area">
                        <div className="image">
                          <Image
                            src="/images/EnvelopeFill.svg"
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <Link href="">media@veerra.com</Link>
                      </div>
                    </li>
                    <li>
                      <h5>For Career Opportunities</h5>
                      <div className="mail_area">
                        <div className="image">
                          <Image
                            src="/images/EnvelopeFill.svg"
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <Link href="">careers@veerra.com</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* == */}
        <CommonCta />
      </main>
    </>
  );
};

export default Contactus;
