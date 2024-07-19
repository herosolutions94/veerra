import DashSideBar from "@/components/dash-side-bar";
import React from "react";
import LayoutDashboard from "@/components/layoutDashbaord";
const DashRefferalExclusion = () => {
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
                    <div className="inner long_form_pro uj_leader_form dash_refferal">
                      <div className="flex less_input">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Select Lead or Client
                          </label>
                        </div>
                        <div className="field_area ">
                          <div className="field_area ">
                            <select className="input">
                              <option value="0"></option>
                              <option value="1">active</option>
                              <option value="2">inactive</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex ">
                        <div className="lbl_areap">
                          <p>
                            An referral exclusion is a lead/client that has
                            proven communication with you or your team at least
                            one day before using contact on Veerra. A
                            lead/client that has been excluded remains in the
                            dashboard and can have all actions taken similar to
                            any other lead. However, excluded clients cannot
                            create Veerra-fied reviews and do not contribute to
                            statistics on Veerra. Leads/clients can be
                            designated a referral exclusion within 5 calendar
                            days from contacting you using Veerra. This action
                            can be reversed by contacting support@veerra.com. In
                            the event of a transaction no referral fees are due
                            for referral exclusion.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="lbl_check">
                          <input type="checkbox" />
                          <label className="form_lbl_pro" htmlFor="name">
                            I understand and wish to proceed
                          </label>
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

export default DashRefferalExclusion;
DashRefferalExclusion.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
