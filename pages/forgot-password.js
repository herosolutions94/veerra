import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const [showPassword2, setShowPassword2] = useState(false);
  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevState) => !prevState);
  };
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
                          <div
                            className="icos"
                            onClick={togglePasswordVisibility}
                            style={{ cursor: "pointer" }}>
                            <Image
                              src={
                                showPassword
                                  ? "/images/uj_eye_open.png"
                                  : "images/EyeSlash.svg"
                              }
                              alt=""
                              width={1000}
                              height={100}
                            />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            className="input"
                            name="Password"
                            placeholder="New Password"
                            id="password"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <div
                            className="icos"
                            onClick={togglePasswordVisibility2}
                            style={{ cursor: "pointer" }}>
                            <Image
                              src={
                                showPassword2
                                  ? "/images/uj_eye_open.png"
                                  : "images/EyeSlash.svg"
                              }
                              alt=""
                              width={1000}
                              height={100}
                            />
                          </div>
                          <input
                            type={showPassword2 ? "text" : "password"}
                            className="input"
                            name="Password"
                            placeholder="Confirm Password"
                            id="password"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="flex txtGrp">
                          <div className="lbl_btn2">
                            <p>Password must have atleast:</p>
                            <ul>
                              <li>8 characters</li>
                              <li>1 number</li>
                              <li>1 symbol</li>
                            </ul>
                          </div>
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

export default ForgetPassword;
