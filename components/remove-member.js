import React from "react";

const RemoveMember = ({ formPopup, setFormPopup }) => {
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
                              You are about to remove a Team Member from the
                              team, including the “Team Members” section of the
                              Team Leader profile. All leads and clients remain
                              with the team including contacts made through the
                              removed team member. This decision can not be
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

export default RemoveMember;
