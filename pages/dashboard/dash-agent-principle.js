import React, { useState } from "react";
import DashSideBar from "@/components/dash-side-bar";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
const DashAgentPrinciple = () => {
  const [formBlocks, setFormBlocks] = useState([{ id: Date.now() }]);

  const addFormBlock = () => {
    setFormBlocks([...formBlocks, { id: Date.now() }]);
  };
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
                      <div className="flex less_width">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Base Commission Rate <sup>*</sup>
                          </label>
                        </div>
                        <div className="field_area percent-area">
                          <input type="text" name="name" className="input" />
                          <div className="percent">
                            <p>%</p>
                          </div>
                        </div>
                      </div>

                      <div className="form-block flex form_block2">
                        <div className="flex">
                          <div className="lbl_area">
                            <label
                              className="form_lbl_pro"
                              htmlFor="brokerage_phone">
                              State/Province <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <div className="serve_area">
                              {formBlocks.map((block, index) => (
                                <div key={block.id} className="block-1">
                                  <div className="flex width_less">
                                    <div className="cols">
                                      <div className="flex1">
                                        <div className="lbl_area">
                                          <label
                                            className="form_lbl_pro"
                                            htmlFor="name">
                                            Seller Services
                                          </label>
                                        </div>
                                        <div className="field_area">
                                          <select className="input">
                                            <option value="1">
                                              1225364785
                                            </option>
                                            <option value="2">Select1</option>
                                            <option value="3">Select2</option>
                                            <option value="4">Select3</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cols">
                                      <div className="flex1">
                                        <div className="lbl_area">
                                          <label
                                            className="form_lbl_pro"
                                            htmlFor="name">
                                            Cost Structure
                                          </label>
                                        </div>
                                        <div className="field_area">
                                          <select className="input">
                                            <option value="1">
                                              Cost Structure
                                            </option>
                                            <option value="2">
                                              Percentage
                                            </option>
                                            <option value="3">Select2</option>
                                            <option value="4">Select3</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cols">
                                      <div className="flex1">
                                        <div className="lbl_area">
                                          <label
                                            className="form_lbl_pro"
                                            htmlFor="name">
                                            Amount
                                          </label>
                                        </div>
                                        <div className="field_area percent-area amount">
                                          <input
                                            type="text"
                                            name="name"
                                            className="input"
                                          />
                                          <div className="percent">
                                            <p>%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <button
                                type="button"
                                onClick={addFormBlock}
                                className="style_it">
                                Add +
                              </button>
                            </div>
                            <div className="serve_area">
                              {formBlocks.map((block, index) => (
                                <div key={block.id} className="block-1 block-2">
                                  <div className="flex width_less">
                                    <div className="cols">
                                      <div className="flex1">
                                        <div className="lbl_area">
                                          <label
                                            className="form_lbl_pro"
                                            htmlFor="name">
                                            Buyers Services
                                          </label>
                                        </div>
                                        <div className="field_area">
                                          <select className="input">
                                            <option value="1">
                                              1225364785
                                            </option>
                                            <option value="2">Select1</option>
                                            <option value="3">Select2</option>
                                            <option value="4">Select3</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cols">
                                      <div className="flex1">
                                        <div className="lbl_area">
                                          <label
                                            className="form_lbl_pro"
                                            htmlFor="name">
                                            Cost Structure
                                          </label>
                                        </div>
                                        <div className="field_area">
                                          <select className="input">
                                            <option value="1">
                                              Cost Structure
                                            </option>
                                            <option value="2">
                                              Percentage
                                            </option>
                                            <option value="3">Select2</option>
                                            <option value="4">Select3</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cols">
                                      <div className="flex1">
                                        <div className="lbl_area">
                                          <label
                                            className="form_lbl_pro"
                                            htmlFor="name">
                                            Amount
                                          </label>
                                        </div>
                                        <div className="field_area percent-area amount">
                                          <input
                                            type="text"
                                            name="name"
                                            className="input"
                                          />
                                          <div className="percent">
                                            <p>%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <button
                                type="button"
                                onClick={addFormBlock}
                                className="style_it">
                                Add +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="lbl_area">
                          <label className="form_lbl_pro" htmlFor="name">
                            Our Unique Value <sup>*</sup>
                            <br />
                            <span>(1000 Characters Max)</span>
                          </label>
                        </div>
                        <div className="field_area">
                          <textarea
                            placeholder="Define what unique value(s) you bring to your potential client and how you stand out from the crowd"
                            className="input"></textarea>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="lbl_check">
                          <input type="checkbox" />
                          <label className="form_lbl_pro" htmlFor="name">
                            By Checking this box you agree to our Referral
                            <Link href="">Agreement</Link> and
                            <Link href=""> Terms of Service</Link>
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

export default DashAgentPrinciple;
DashAgentPrinciple.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
