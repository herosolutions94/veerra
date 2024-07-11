import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <>
      <section className="uj_login uj_signup">
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <div className="signup_btn">
                <p>Already have an account?</p>
                <Link href="" className="site_btn">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="col2">
              <div className="inner">
                <div className="inside">
                  <div className="logo">
                    <Link href="">
                      <Image
                        src="images/logo.svg"
                        alt=""
                        width={1000}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className="up_cntent">
                    <h1>Sign Up</h1>
                  </div>
                  <form action="">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            type="email"
                            className="input"
                            name="email"
                            placeholder="Name"
                          />
                        </div>
                      </div>
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
                        <div className="txtGrp">
                          <div className="icos">
                            <Image
                              src="images/EyeSlash.svg"
                              alt=""
                              width={1000}
                              height={100}
                            />
                          </div>
                          <input
                            type="Password"
                            className="input"
                            name="Password"
                            placeholder="Your Password"
                            id="password"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="flex txtGrp">
                          <div className="lbl_btn">
                            <p>
                              Password must have atleast: 8 characters 1 number
                              and 1 symbol
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="cta">
                          <button className="site_btn">Sign Up</button>
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

export default Signup;
