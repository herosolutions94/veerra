import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResetPassword = () => {
  return (
    <>
      <section className="uj_login uj_forget">
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <div className="signup_btn">
                <p>Already have an account </p>
                <Link href="/login" className="site_btn">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="col2">
              <div className="inner">
                <div className="inside">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src="images/logo.svg"
                        alt=""
                        width={1000}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className="up_cntent">
                    <h1>Reset Password</h1>
                  </div>
                  <form action="">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <div className="icos">
                            <Image
                              src="images/uj_mail.svg"
                              alt=""
                              width={1000}
                              height={100}
                            />
                          </div>
                          <input
                            type="email"
                            className="input"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="cta">
                          <button className="site_btn">Reset Password</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
