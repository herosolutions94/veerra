import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <section className="uj_login">
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <div className="signup_btn">
                <p>Looking to Get Started?</p>
                <Link href="" className="site_btn">
                  Sign Up
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
                    <h1>Sign In</h1>
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
                        <div class="flex txtGrp">
                          <div class="lbl_btn">
                            <input
                              type="checkbox"
                              name="remember"
                              id="remember"
                              value="remember"
                            />
                            <label for="remember">Remember me</label>
                          </div>
                          <Link href="/forgot-password">Forgot Password ?</Link>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="cta">
                          <button className="site_btn">Sign In</button>
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

export default Login;
