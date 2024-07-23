import React, { useState } from "react";
import DashSideBar from "@/components/dash-side-bar";
import WarningForm from "@/components/warning-form";
import BecomeMember from "@/components/become_member";
import BecomeTeamLeader from "@/components/become-team-leader";
import BecomeSoloAgent from "@/components/become-solo-agent";
import BecomeFreeMember from "@/components/become-free-member";
import PromoteTeam from "@/components/promote-team";
import RemoveMember from "@/components/remove-member";
import LayoutDashboard from "@/components/layoutDashbaord";
const DashTeamManagement = () => {
  const [formPopup, setFormPopup] = useState(false);
  // const [formPopup2, setFormPopup2] = useState(false);
  // const [formPopup3, setFormPopup3] = useState(false);
  // const [formPopup4, setFormPopup4] = useState(false);
  // const [formPopup5, setFormPopup5] = useState(false);
  // const [formPopup6, setFormPopup6] = useState(false);
  return (
    <>
      <main>
        <section className="dash_team_form profile_forms dash_team_management">
          <div className="contain">
            <div className="inner_form">
              <div className="left_bar">
                <DashSideBar />
              </div>
              <div className="sub_contain">
                <form action="">
                  <div className="flex">
                    <div className="inner long_form_pro uj_leader_form">
                      <div className="flex less_input">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Team Name
                          </label>
                        </div>
                        <div className="field_area ">
                          <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Team Member"
                          />
                          <div className="sub_btn">
                            <button type="button">Save</button>
                          </div>
                        </div>
                      </div>
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
                            placeholder="54hg24"
                          />
                          <div className="style_btn">
                            <button type="button">copy</button>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="lbl_detail">
                          <h4>Modify Team Members</h4>
                        </div>
                      </div>
                      <div className="flex less_input">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Member
                          </label>
                        </div>
                        <div className="field_area ">
                          <select className="input">
                            <option value="0"></option>
                            <option value="1">active</option>
                            <option value="2">inactive</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex less_input">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Action
                          </label>
                        </div>
                        <div className="field_area ">
                          <select className="input">
                            <option value="0"></option>
                            <option value="1">active</option>
                            <option value="2">inactive</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex less_input">
                        <div className="red_btn">
                          <button
                            type="button"
                            onClick={() => setFormPopup(true)}>
                            {" "}
                            Disband Team
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <WarningForm formPopup={formPopup} setFormPopup={setFormPopup} /> */}
        {/* <BecomeMember formPopup={formPopup} setFormPopup={setFormPopup} /> */}
        <BecomeTeamLeader formPopup={formPopup} setFormPopup={setFormPopup} />
        {/* <BecomeSoloAgent formPopup={formPopup} setFormPopup={setFormPopup} /> */}
        {/* <BecomeFreeMember formPopup={formPopup} setFormPopup={setFormPopup} /> */}
        {/* <PromoteTeam formPopup={formPopup} setFormPopup={setFormPopup} /> */}
        {/* <RemoveMember formPopup={formPopup} setFormPopup={setFormPopup} /> */}
      </main>
    </>
  );
};

export default DashTeamManagement;
DashTeamManagement.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
