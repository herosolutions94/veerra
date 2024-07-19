import DashSideBar from "@/components/dash-side-bar";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import DateSelector from "@/components/date-selector";
import SelectAdd from "@/components/select-add";
import LayoutDashboard from "@/components/layoutDashbaord";
const DashAgentForm = () => {
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
                    <div className="colL">
                      <div className="inner long_form_pro">
                        <div className="flex">
                          <div className="lbl_area">
                            <label className="form_lbl_pro" htmlFor="name">
                              Name <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <input type="text" name="name" className="input" />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label
                              className="form_lbl_pro"
                              htmlFor="brokerage_name">
                              Brokerage Name <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <input
                              type="text"
                              name="brokerage_name"
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label
                              className="form_lbl_pro"
                              htmlFor="brokerage_location">
                              Brokerage Location <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <input
                              type="text"
                              name="brokerage_location"
                              className="input"
                            />
                            <div className="flex_3">
                              <div className="col">
                                <input
                                  type="text"
                                  name="city"
                                  className="input"
                                  placeholder="City"
                                />
                              </div>
                              <div className="col">
                                <input
                                  type="text"
                                  name="state"
                                  className="input"
                                  placeholder="State"
                                />
                              </div>
                              <div className="col">
                                <input
                                  type="text"
                                  name="zip"
                                  className="input"
                                  placeholder="Zip"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label
                              className="form_lbl_pro"
                              htmlFor="brokerage_phone">
                              Brokerage Phone Number <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <PhoneNumberInput />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label
                              className="form_lbl_pro"
                              htmlFor="brokerage_phone">
                              Primary Phone Number <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <PhoneNumberInput />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label className="form_lbl_pro" htmlFor="name">
                              Email Address <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <input type="text" name="name" className="input" />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label className="form_lbl_pro" htmlFor="name">
                              Profile Name <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <input type="text" name="name" className="input" />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_detail">
                            <h4>License Details</h4>
                            <p>Real Estate Agent License</p>
                          </div>
                        </div>
                        <div className="form-block flex">
                          {formBlocks.map((block, index) => (
                            <div key={block.id} className="block-1">
                              <div className="flex">
                                <div className="lbl_area">
                                  <label
                                    className="form_lbl_pro"
                                    htmlFor="name">
                                    License# <sup>*</sup>
                                  </label>
                                </div>
                                <div className="field_area">
                                  <input
                                    type="text"
                                    name="name"
                                    className="input"
                                  />
                                </div>
                              </div>
                              <div className="flex">
                                <div className="lbl_area">
                                  <label
                                    className="form_lbl_pro"
                                    htmlFor="brokerage_phone">
                                    Expiration <sup>*</sup>
                                  </label>
                                </div>
                                <div className="field_area">
                                  <DateSelector />
                                </div>
                              </div>
                              <div className="flex">
                                <div className="lbl_area">
                                  <label
                                    className="form_lbl_pro"
                                    htmlFor="brokerage_phone">
                                    State/Province <sup>*</sup>
                                  </label>
                                </div>
                                <div className="field_area">
                                  <SelectAdd />
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

                        <div className="flex">
                          <div className="lbl_detail">
                            <p>
                              Other Relevant Licenses <span>(Optional)</span>
                            </p>
                          </div>
                        </div>
                        <div className="form-block flex">
                          {formBlocks.map((block, index) => (
                            <div key={block.id} className="block-1">
                              <div className="flex">
                                <div className="lbl_area">
                                  <label
                                    className="form_lbl_pro"
                                    htmlFor="name">
                                    Description:
                                  </label>
                                </div>
                                <div className="field_area">
                                  <select className="input">
                                    <option value="1">Select</option>
                                    <option value="2">Select1</option>
                                    <option value="3">Select2</option>
                                    <option value="4">Select3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="lbl_area">
                                  <label
                                    className="form_lbl_pro"
                                    htmlFor="name">
                                    License#:
                                  </label>
                                </div>
                                <div className="field_area">
                                  <input
                                    type="text"
                                    name="name"
                                    className="input"
                                  />
                                </div>
                              </div>
                              <div className="flex">
                                <div className="lbl_area">
                                  <label
                                    className="form_lbl_pro"
                                    htmlFor="brokerage_phone">
                                    Expiration:
                                  </label>
                                </div>
                                <div className="field_area">
                                  <DateSelector />
                                </div>
                              </div>
                              <div className="flex">
                                <div className="lbl_area">
                                  <label
                                    className="form_lbl_pro"
                                    htmlFor="brokerage_phone">
                                    State/Province:
                                  </label>
                                </div>
                                <div className="field_area">
                                  <SelectAdd />
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
                        <div className="flex">
                          <div className="lbl_detail">
                            <h4>Experience</h4>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label
                              className="form_lbl_pro"
                              htmlFor="brokerage_phone">
                              Experienced Agent Since <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area no_day">
                            <DateSelector />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label
                              className="form_lbl_pro"
                              htmlFor="brokerage_phone">
                              Experienced Agent Since <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area no_day">
                            <DateSelector />
                          </div>
                        </div>
                        <div className="form-block  flex">
                          <div className="flex">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                Real Estate Specialties <sup>*</sup>
                                <br />
                                <span>(6 Max)</span>
                              </label>
                            </div>
                            <div className="field_area">
                              <select className="input">
                                <option value="1">select1</option>
                              </select>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={addFormBlock}
                            className="style_it">
                            Add +
                          </button>
                        </div>
                        <div className="flex">
                          <div className="lbl_area"></div>
                          <div className="field_area">
                            <div className="input txtArea"></div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label
                              className="form_lbl_pro"
                              htmlFor="brokerage_phone">
                              Real Estate Focus <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <div className="body-content">
                              <ul>
                                <li>
                                  <p>
                                    <strong>Property Type</strong>
                                  </p>
                                  <p className="right">
                                    <strong>Sell</strong>
                                  </p>
                                  <p className="right">
                                    <strong>Buy</strong>
                                  </p>
                                </li>
                                <li>
                                  <p>Single Family</p>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                </li>
                                <li>
                                  <p>Townhomes</p>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                </li>
                                <li>
                                  <p>Mobile Homes</p>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                </li>
                                <li>
                                  <p>Multifamily</p>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                </li>
                                <li>
                                  <p>Apartments</p>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                </li>
                                <li>
                                  <p>Condos</p>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                </li>
                                <li>
                                  <p>Co-ops</p>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                </li>
                                <li>
                                  <p>Vacant Land</p>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                  <div className="tick">
                                    <input type="checkbox" name="check" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="form-block  flex">
                          <div className="flex">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                Areas Served <sup>*</sup>
                                <br />
                                <span>(20 Max)</span>
                              </label>
                            </div>
                            <div className="field_area">
                              <select className="input">
                                <option value="1">select1</option>
                              </select>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={addFormBlock}
                            className="style_it">
                            Add +
                          </button>
                        </div>
                        <div className="flex">
                          <div className="lbl_area"></div>
                          <div className="field_area">
                            <div className="input txtArea"></div>
                          </div>
                        </div>
                        <div className="form-block  flex">
                          <div className="flex">
                            <div className="lbl_area">
                              <label className="form_lbl_pro" htmlFor="name">
                                Languages Fluent <sup>*</sup>
                                <br />
                                <span>(10 Max)</span>
                              </label>
                            </div>
                            <div className="field_area">
                              <select className="input">
                                <option value="1">select1</option>
                              </select>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={addFormBlock}
                            className="style_it">
                            Add +
                          </button>
                        </div>
                        <div className="flex">
                          <div className="lbl_area"></div>
                          <div className="field_area">
                            <div className="input txtArea"></div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label className="form_lbl_pro" htmlFor="name">
                              About You <sup>*</sup>
                              <br />
                              <span>(1000 Characters Max)</span>
                            </label>
                          </div>
                          <div className="field_area">
                            <textarea
                              placeholder="Your Intro"
                              className="input"></textarea>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label className="form_lbl_pro" htmlFor="name">
                              Primary Timezone <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <select className="input">
                              <option value="1">select1</option>
                              <option value="2">select2</option>
                              <option value="3">select3</option>
                              <option value="4">select4</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="lbl_area">
                            <label className="form_lbl_pro" htmlFor="name">
                              Agent Role <sup>*</sup>
                            </label>
                          </div>
                          <div className="field_area">
                            <select className="input">
                              <option value="1"></option>
                              <option value="2">select2</option>
                              <option value="3">select3</option>
                              <option value="4">select4</option>
                            </select>
                          </div>
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

export default DashAgentForm;
DashAgentForm.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
