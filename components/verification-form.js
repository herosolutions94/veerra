import React, { useState } from "react";

const VerificationForm = ({ formPopup, setFormPopup }) => {
  const [tab, setTab] = useState(1);
  return (
    <>
      {formPopup === true ? (
        <div
          className="popup uj_popup uj_verificaton"
          style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div class="contain">
                <div className="form_tabs">
                  <div
                    className="crosBtn"
                    onClick={() => setFormPopup(false)}></div>
                  <div className="top_head">
                    <h4>Get Started on Your Real Estate Journey</h4>
                  </div>
                  <div className="tab_form">
                    <div className="tabs_top">
                      <button
                        className={tab == 1 ? "tab_btn active" : "tab_btn"}
                        type="button"
                        onClick={() => setTab(1)}>
                        Sell
                      </button>
                      <button
                        className={tab == 2 ? "tab_btn active" : "tab_btn"}
                        type="button"
                        onClick={() => setTab(2)}>
                        Buy
                      </button>
                      <button
                        className={tab == 3 ? "tab_btn active" : "tab_btn"}
                        type="button"
                        onClick={() => setTab(3)}>
                        Sell & Buy
                      </button>
                    </div>
                    <div className="tab_content">
                      <form className={tab == 1 ? "active" : ""}>
                        <div class="inner_form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Full Name</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Full Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Email Address</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Email Address"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Phone Number</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Preferred Contact Method</h6>
                                <select className="input">
                                  <option value="0">
                                    Choose Preferred Contact Method
                                  </option>
                                  <option value="1">
                                    Choose Preferred Contact Method
                                  </option>
                                  <option value="2">
                                    Choose Preferred Contact Method
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="txtGrp">
                                <h6>Address</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Address"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="txtGrp">
                                <h6>Message</h6>
                                <textarea
                                  className="input txtArea"
                                  placeholder="Tell us about your current situation and how your agent can provide you the most value to you.  "></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="cta">
                                <button className="site_btn">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <form className={tab == 2 ? "active" : ""}>
                        <div class="inner_form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Full Name</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Full Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Email Address</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Email Address"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Phone Number</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Preferred Contact Method</h6>
                                <select className="input">
                                  <option value="0">
                                    Choose Preferred Contact Method
                                  </option>
                                  <option value="1">
                                    Choose Preferred Contact Method
                                  </option>
                                  <option value="2">
                                    Choose Preferred Contact Method
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="txtGrp">
                                <h6>City or Zip Code</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="City or Zip Code"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="txtGrp">
                                <h6>Purchasing Price Range</h6>
                                <div className="row price_range">
                                  <div className="col-md-5">
                                    <div className="txtGrp2">
                                      <select className="input">
                                        <option value="0">Minimum</option>
                                        <option value="1">Minimum</option>
                                        <option value="2">Minimum</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="txtGrp2">
                                      <p>to</p>
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <div className="txtGrp2">
                                      <select className="input">
                                        <option value="0">Maximum</option>
                                        <option value="1">Minimum</option>
                                        <option value="2">Minimum</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="txtGrp">
                                <h6>Message</h6>
                                <textarea
                                  className="input txtArea"
                                  placeholder="Tell us about your current situation and how your agent can provide you the most value to you.  "></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="cta">
                                <button className="site_btn">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <form className={tab == 3 ? "active" : ""}>
                        <div className="up_detail">
                          <p>
                            Veerra recommends using Sell & Buy when you are
                            relocating in the same region and would be using the
                            same agent. If you are moving to a different region
                            where this agent does not cover, we recommend you
                            contact another agent as well. This allows each
                            agent to solve your needs more effectively.
                          </p>
                        </div>
                        <div class="inner_form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Full Name</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Full Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Email Address</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Email Address"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Phone Number</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="txtGrp">
                                <h6>Preferred Contact Method</h6>
                                <select className="input">
                                  <option value="0">
                                    Choose Preferred Contact Method
                                  </option>
                                  <option value="1">
                                    Choose Preferred Contact Method
                                  </option>
                                  <option value="2">
                                    Choose Preferred Contact Method
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="txtGrp">
                                <h6>Address</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Address"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="txtGrp">
                                <h6>City or Zip Code</h6>
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="City or Zip Code"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="txtGrp">
                                <h6>Message</h6>
                                <textarea
                                  className="input txtArea"
                                  placeholder="Tell us about your current situation and how your agent can provide you the most value to you.  "></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="cta">
                                <button className="site_btn">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default VerificationForm;
