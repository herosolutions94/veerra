import React from "react";

const BecomeFreeMember = ({ formPopup, setFormPopup }) => {
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
                              You are attempting to become a Free Agent. Please
                              read all sections carefully.
                            </p>
                            <p>
                              Current Team Members: Your profile will be removed
                              from your Team Leader's "Our Members” section and
                              will be removed from the team. All leads and
                              clients generated from you will remain with the
                              team and the broker.
                            </p>
                            <p>
                              Current Solo Agents: Your profile will be removed
                              from the public marketplace and will not be
                              visible to anyone. You may work with current leads
                              and clients as long as you remain licensed to
                              practice.
                            </p>
                            <p>
                              Current Team Leaders: You cannot perform this
                              action at this time. To become a Free Agent
                              another Team Member must be promoted to Team
                              Member or the team must be disbanded. Promoting
                              another agent will convert you to a Team Member
                              where you can return here. These actions are
                              performed in the Team Management settings.
                            </p>
                            <p>
                              A change of status does not release your
                              obligations under the Referral Agreement.
                              Converting to a Free Agent cannot be reversed.
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

export default BecomeFreeMember;
