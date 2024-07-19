import Link from "next/link";
import React from "react";

const FreeAgent = () => {
  return (
    <>
      <main>
        <section className="profile_forms">
          <div className="contain">
            <div className="sub_contain">
              <div className="uj_inner">
                <h2>Free Agent Details</h2>
                <div className="uj_cta">
                  <Link href="" className="site_btn">
                    Previous
                  </Link>
                </div>
              </div>
              <form action="">
                <div className="flex">
                  <div className="inner long_form_pro uj_leader_form">
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

export default FreeAgent;
