import DashSideBar from "@/components/dash-side-bar";
import Link from "next/link";
import React from "react";
import LayoutDashboard from "@/components/layoutDashbaord";
const DashTeamLeader = () => {
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
                    <div className="inner long_form_pro ">
                      <div className="flex">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Name
                          </label>
                        </div>
                        <div className="field_area percent-area">
                          <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="kyan leireault"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            User ID
                          </label>
                        </div>
                        <div className="field_area percent-area">
                          <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="1234765432"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Email
                          </label>
                        </div>
                        <div className="field_area percent-area">
                          <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="ryan@veerra.com"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Phone Number
                          </label>
                        </div>
                        <div className="field_area percent-area">
                          <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="93248945748"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cta">
                    <button type="" className="site_btn">
                      Save Changes
                    </button>
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

export default DashTeamLeader;
DashTeamLeader.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
