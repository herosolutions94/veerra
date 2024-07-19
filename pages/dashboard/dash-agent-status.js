import React, { useState } from "react";
import DashSideBar from "@/components/dash-side-bar";
import LayoutDashboard from "@/components/layoutDashbaord";
const DashAgentStatus = () => {
  return (
    <>
      <main>
        <section className="dash_team_form profile_forms">
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
                            Current Agent Status
                          </label>
                        </div>
                        <div className="field_area ">
                          <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Team Member"
                          />
                        </div>
                      </div>
                      <div className="flex less_input">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Select New Status
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
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DashAgentStatus;
DashAgentStatus.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
