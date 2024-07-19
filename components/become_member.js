import React from "react";

const BecomeMember = ({ formPopup, setFormPopup }) => {
  return (
    <>
      {formPopup === true ? (
        <div
          className="popup uj_popup uj_contact_us dash_warning form_change"
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
                      <h4>Warning!</h4>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="txtGrp">
                            <p>
                              You must currently be a Free Agent to ioin a team.
                              You will be become a leam Member with all leads
                              and contacts remaining with the team in the event
                              of departure A chande of status does not release
                              your obligations under the Refferal Agreement.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="txtGrp">
                            <div className="flex less_input">
                              <div className="lbl_area">
                                <label className="form_lbl_pro" htmlFor="name">
                                  Team Code
                                </label>
                              </div>
                              <div className="field_area ">
                                <input
                                  type="text"
                                  name="name"
                                  className="input"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="txtGrp">
                            <div className="flex">
                              <input type="checkbox" />
                              <label className="form_lbl_pro" htmlFor="name">
                                I understand and wish to proceed
                              </label>
                            </div>
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
};

export default BecomeMember;
