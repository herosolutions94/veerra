import Link from "next/link";
import React, { useState } from "react";

const TeamMemberForm = () => {
  return (
    <>
      <main>
        <section className="profile_forms">
          <div className="contain">
            <div className="sub_contain">
              <div className="uj_inner">
                <h2>Team Members Details</h2>
                <div className="uj_cta">
                  <Link href="" className="site_btn">
                    Previous
                  </Link>
                </div>
              </div>
              <form action="">
                <div className="flex">
                  <div className="inner long_form_pro uj_leader_form">
                    <div className="flex less_input">
                      <div className="lbl_area">
                        <label className="form_lbl_pro" htmlFor="name">
                          Team Code <sup>*</sup>
                        </label>
                      </div>
                      <div className="field_area ">
                        <input type="text" name="name" className="input" />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="lbl_check">
                        <input type="checkbox" />
                        <label className="form_lbl_pro" htmlFor="name">
                          By checking this box you agree to our{" "}
                          <Link href="">Referral Agreement</Link> and that all
                          entered information is correct and accurate
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="cta">
                <Link href="" className="site_btn">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TeamMemberForm;
