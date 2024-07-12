import Link from "next/link";
import React from "react";
export default function Team_form({ formPopup, setFormPopup }) {
  return (
    <>
      {formPopup === true ? (
        <div
          className="popup uj_popup uj_contact_us"
          style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div class="contain">
                <div className="col1">
                  <div class="inner_form">
                    <div
                      className="crosBtn"
                      onClick={() => setFormPopup(false)}></div>
                    <form>
                      <h4>Report a Problem</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="txtGrp">
                            <h6>Name</h6>
                            <input
                              className="input"
                              type="text"
                              placeholder="Name"
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

                        <div className="col-md-12">
                          <div className="txtGrp">
                            <h6>Category</h6>
                            <select className="input">
                              <option value="0">Choose Category</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="txtGrp">
                            <h6>Describe the issue</h6>
                            <textarea
                              className="input txtArea"
                              placeholder="Write your issue here"></textarea>
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
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
