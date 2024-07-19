import Image from "next/image";
import React from "react";

const CreateAgentReview = ({ formPopup, setFormPopup }) => {
  return (
    <>
      {formPopup === true ? (
        <div
          className="popup uj_popup uj_contact_us dash_agent_review"
          style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div class="contain">
                <div className="col1">
                  <div class="inner_form profile_forms">
                    <div
                      className="crosBtn"
                      onClick={() => setFormPopup(false)}></div>
                    <form>
                      <h4>Create an Agent Review</h4>

                      <div className="flex">
                        <div className="inner long_form_pro">
                          <div className="flex">
                            <div className="txtGrp">
                              <p>
                                Provide an honest review of your experience with
                                this agent. Any personal or offensive details
                                may cause your review to be removed.
                              </p>
                            </div>
                          </div>
                          <div className="flex less_width">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                Select Agent for Review <sup>*</sup>
                              </label>
                            </div>
                            <div className="field_area">
                              <select className="input">
                                <option value="1"></option>
                                <option value="2">Select1</option>
                                <option value="3">Select2</option>
                                <option value="4">Select3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex less_width">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                City or Zip Code <sup>*</sup>
                              </label>
                            </div>
                            <div className="field_area">
                              <input
                                type="text"
                                name="name"
                                className="input"
                              />
                            </div>
                          </div>
                          <div className="flex less_width">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                Property Type <sup>*</sup>
                              </label>
                            </div>
                            <div className="field_area">
                              <select className="input">
                                <option value="1"></option>
                                <option value="2">Select1</option>
                                <option value="3">Select2</option>
                                <option value="4">Select3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex less_width">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                Objective <sup>*</sup>
                              </label>
                            </div>
                            <div className="field_area">
                              <select className="input">
                                <option value="1"></option>
                                <option value="2">Select1</option>
                                <option value="3">Select2</option>
                                <option value="4">Select3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                Rating <sup>*</sup>
                              </label>
                            </div>
                            <div className="field_area">
                              <ul>
                                <li>
                                  {" "}
                                  <Image
                                    width={1200}
                                    height={500}
                                    src="/images/star.svg"
                                  />
                                </li>
                                <li>
                                  {" "}
                                  <Image
                                    width={1200}
                                    height={500}
                                    src="/images/star.svg"
                                  />
                                </li>
                                <li>
                                  {" "}
                                  <Image
                                    width={1200}
                                    height={500}
                                    src="/images/star.svg"
                                  />
                                </li>
                                <li>
                                  {" "}
                                  <Image
                                    width={1200}
                                    height={500}
                                    src="/images/star.svg"
                                  />
                                </li>
                                <li>
                                  {" "}
                                  <Image
                                    width={1200}
                                    height={500}
                                    src="/images/star.svg"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                Feedback <sup>*</sup>
                              </label>
                            </div>
                            <div className="field_area">
                              <textarea
                                placeholder="Define what unique value(s) you bring to your potential client and how you stand out from the crowd"
                                className="input txtArea"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cta">
                        <button className="site_btn">Submit</button>
                      </div>
                    </form>
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

export default CreateAgentReview;
