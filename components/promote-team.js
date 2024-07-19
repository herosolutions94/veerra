import React from "react";

const PromoteTeam = ({ formPopup, setFormPopup }) => {
  return (
    <>
      {formPopup === true ? (
        <div
          className="popup uj_popup uj_contact_us dash_warning"
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
                              You are about to promote a Team Member to Team
                              Leader. All Principal Agent and Team Management
                              settings will transfer to the new Team Leader and
                              you will become a Team Member. This can not be
                              reversed.
                            </p>
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

export default PromoteTeam;
