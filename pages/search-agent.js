import CommonCta from "@/components/common-cta";
import Pagination from "@/components/pagination";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchAgent = () => {
  return (
    <>
      <main>
        <section className="uj_search_agent">
          <div className="contain">
            <div className="tab_banner">
              <div className="tab_content">
                <form>
                  <div className="flex_input">
                    <div className="field_col">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Enter city or zip code"
                        className="input"
                      />
                    </div>
                    <div className="field_col">
                      <label htmlFor="type">Seeking to</label>
                      <select name="type" className="input">
                        <option>Sell</option>
                        <option>Buy</option>
                      </select>
                    </div>
                    <div className="field_col">
                      <label htmlFor="type">Property Type</label>
                      <select name="type" className="input">
                        <option>Choose Property Type</option>
                        <option>Public</option>
                        <option>Commercial</option>
                      </select>
                    </div>
                    <button type="submit" className="cta_btn">
                      <Image
                        src="/images/search.svg"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="uj_filters">
          <div className="contain-fluid">
            <div className="flex">
              <div className="col1">
                <div className="col1_inner">
                  <div className="top_heading">
                    <h5>Filters</h5>
                  </div>
                  <div className="lower_content">
                    <div className="filter_blk">
                      <p>Seller Add-Ons</p>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Comparative Analysis</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Photography</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Landscaping</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">3D Virtual Tours</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Home Cleanings</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Home Inspections</label>
                      </div>
                    </div>
                    <div className="filter_blk">
                      <p>Buyer Add-Ons</p>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Market Analysis</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Remote Tours</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Home Inspections</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Home Appraisals</label>
                      </div>
                    </div>
                    <div className="filter_blk">
                      <p>Languages Spoken</p>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Spanish</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Chinese</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">French</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">German</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Tagalog</label>
                      </div>
                      <div className="lbl_btn">
                        <input
                          type="checkbox"
                          name="category"
                          value=""
                          id="cate1"
                        />
                        <label htmlFor="cate1">Arabic</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="col2_inner">
                  <div className="top_bar">
                    <div className="searches">
                      <p>8 searches found</p>
                    </div>
                    <div className="assc">
                      <span>Sort by :</span>
                      <form action="">
                        <select name="" id="" className="input">
                          <option value="1">Asscending</option>
                          <option value="2">Descending</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <div className="bottom_area">
                    <div className="flex flexRow">
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                      <div className="cols">
                        <div className="inner">
                          <div className="inside">
                            <div className="image">
                              <Image
                                width={1200}
                                height={500}
                                src="/images/agent-1.jpg"
                              />
                            </div>
                            <div className="content">
                              <h5>Aleena Gilbert</h5>
                              <p>Keller William Realty</p>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <div className="stars">
                                <p>5.0</p>
                                <ul>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                  <li>
                                    {" "}
                                    <Image
                                      width={1200}
                                      height={500}
                                      src="/images/star.svg"
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>- 25 Veerra-fied Reviews</span>
                                </p>
                              </div>
                              <p>
                                <span>License # : 832984284</span>
                              </p>
                            </div>
                          </div>
                          <div className="com_rate">
                            <p>1.75% Base Commission Rate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination_outer">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CommonCta />
      </main>
    </>
  );
};

export default SearchAgent;
