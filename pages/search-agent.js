import Link from "next/link";
import React from "react";

const SearchAgent = () => {
  return (
    <>
      {/* <section className="professional_full_grid">
        <div className="contain">
          <div className="main_flex">
            <div className="colL">
              <button type="button" className="filter_mobile_btn">
                Filters
              </button>

              <div className="categories_filter active">
                <div className="clear_filter_btn">
                  <button type="button">Clear All</button>
                </div>
                <div className="filter_blk">
                  <div className="field_input">
                    <input
                      type="text"
                      name=""
                      className="input"
                      placeholder="Enter zip code"
                    />
                  </div>
                </div>
                <h4>Categories</h4>
                <div className="filter_blk">
                  <div className="lbl_btn">
                    <input
                      type="checkbox"
                      name="category"
                      value=""
                      id="cate1"
                    />
                    <label htmlFor="cate1">Health and Safety Consultant</label>
                  </div>
                  <div className="lbl_btn">
                    <input
                      type="checkbox"
                      name="category"
                      value=""
                      id="cate2"
                    />
                    <label htmlFor="cate2">Fire Risk Assessor</label>
                  </div>
                  <div className="lbl_btn">
                    <input
                      type="checkbox"
                      name="category"
                      value=""
                      id="cate3"
                    />
                    <label htmlFor="cate3">Building Safety Case</label>
                  </div>
                  <div className="lbl_btn">
                    <input
                      type="checkbox"
                      name="category"
                      value=""
                      id="cate4"
                    />
                    <label htmlFor="cate4">ISO45001</label>
                  </div>
                </div>

                <h4>Ratings</h4>
                <div className="filter_blk">
                  <div className="lbl_btn">
                    <input type="checkbox" name="rating" value="" id="rate1" />
                    <label htmlFor="rate1">
                      <div className="filter_rating">
                        <img src="/images/5_star.svg" alt="" />
                        <span>5.0</span>
                      </div>
                    </label>
                  </div>
                  <div className="lbl_btn">
                    <input type="checkbox" name="rating" value="" id="rate2" />
                    <label htmlFor="rate2">
                      <div className="filter_rating">
                        <img src="/images/4_star.svg" alt="" />
                        <span>4.0</span>
                      </div>
                    </label>
                  </div>
                  <div className="lbl_btn">
                    <input type="checkbox" name="rating" value="" id="rate3" />
                    <label htmlFor="rate3">
                      <div className="filter_rating">
                        <img src="/images/3_star.svg" alt="" />
                        <span>3.0</span>
                      </div>
                    </label>
                  </div>
                  <div className="lbl_btn">
                    <input type="checkbox" name="rating" value="" id="rate4" />
                    <label htmlFor="rate4">
                      <div className="filter_rating">
                        <img src="/images/2_star.svg" alt="" />
                        <span>2.0</span>
                      </div>
                    </label>
                  </div>
                  <div className="lbl_btn">
                    <input type="checkbox" name="rating" value="" id="rate5" />
                    <label htmlFor="rate5">
                      <div className="filter_rating">
                        <img src="/images/1_star.svg" alt="" />
                        <span>1.0</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="filter_blk">
                  <div className="field_input">
                    <div className="btn_blk">
                      <button className="site_btn block">Apply Filter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="colR">
              <div className="r_top">
                <p>6 searches found</p>
                <div className="filter_r">
                  <span>Sort by :</span>
                  <select name="" className="input">
                    <option>Ascending</option>
                    <option>Descending</option>
                  </select>
                  <div className="opt_view">
                    <button type="button" className={viewGrid ? "" : "active"}>
                      <img src="/images/map_view.svg" alt="" />
                    </button>
                    <button type="button" className={viewGrid ? "active" : ""}>
                      <img src="/images/grid_view.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              {viewGrid ? (
                <div className="flex">
                  <div className="professional_col">
                    <div className="inner">
                      <div className="footer_flex">
                        <div className="pro_info">
                          <div className="pro_icon">
                            <img src="/images/pro1.jpg" alt="" />
                          </div>
                          <div className="_cntnt">
                            <h4>Stefen Disoza</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro_bdy">
                        <h4>
                          <Link href="">
                            Tailored Services for Large Businesses
                          </Link>
                        </h4>
                        <div className="rating">
                          <img src="/images/star.svg" alt="" />
                          <span>5.0</span>
                          <span>40 reviews</span>
                        </div>
                        <ul>
                          <li>Health and Safety Consultant</li>
                          <li>Fire Risk Assessor</li>
                          <li>Safety Consultant</li>
                        </ul>
                        <Link href="explore/1" className="read_more_new">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="professional_col">
                    <div className="inner">
                      <div className="footer_flex">
                        <div className="pro_info">
                          <div className="pro_icon">
                            <img src="/images/pro2.jpg" alt="" />
                          </div>
                          <div className="_cntnt">
                            <h4>Stefen Disoza</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro_bdy">
                        <p>Fire Risk Assessor</p>
                        <h4>
                          <Link href="">
                            Tailored Services for Large Businesses
                          </Link>
                        </h4>
                        <div className="rating">
                          <img src="/images/star.svg" alt="" />
                          <span>5.0</span>
                          <span>40 reviews</span>
                        </div>
                        <ul>
                          <li>Health and Safety Consultant</li>
                          <li>Fire Risk Assessor</li>
                          <li>Safety Consultant</li>
                        </ul>
                        <Link href="explore/2" className="read_more_new">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="professional_col">
                    <div className="inner">
                      <div className="footer_flex">
                        <div className="pro_info">
                          <div className="pro_icon">
                            <img src="/images/pro3.jpg" alt="" />
                          </div>
                          <div className="_cntnt">
                            <h4>Stefen Disoza</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro_bdy">
                        <h4>
                          <Link href="">
                            Tailored Services for Large Businesses
                          </Link>
                        </h4>
                        <div className="rating">
                          <img src="/images/star.svg" alt="" />
                          <span>5.0</span>
                          <span>40 reviews</span>
                        </div>
                        <ul>
                          <li>Health and Safety Consultant</li>
                          <li>Fire Risk Assessor</li>
                          <li>Safety Consultant</li>
                        </ul>
                        <Link href="explore/1" className="read_more_new">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="professional_col">
                    <div className="inner">
                      <div className="footer_flex">
                        <div className="pro_info">
                          <div className="pro_icon">
                            <img src="/images/pro4.jpg" alt="" />
                          </div>
                          <div className="_cntnt">
                            <h4>Stefen Disoza</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro_bdy">
                        <h4>
                          <Link href="">
                            Tailored Services for Large Businesses
                          </Link>
                        </h4>
                        <div className="rating">
                          <img src="/images/star.svg" alt="" />
                          <span>5.0</span>
                          <span>40 reviews</span>
                        </div>
                        <ul>
                          <li>Health and Safety Consultant</li>
                          <li>Fire Risk Assessor</li>
                          <li>Safety Consultant</li>
                        </ul>
                        <Link href="explore/1" className="read_more_new">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="professional_col">
                    <div className="inner">
                      <div className="footer_flex">
                        <div className="pro_info">
                          <div className="pro_icon">
                            <img src="/images/pro3.jpg" alt="" />
                          </div>
                          <div className="_cntnt">
                            <h4>Stefen Disoza</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro_bdy">
                        <h4>
                          <Link href="">
                            Tailored Services for Large Businesses
                          </Link>
                        </h4>
                        <div className="rating">
                          <img src="/images/star.svg" alt="" />
                          <span>5.0</span>
                          <span>40 reviews</span>
                        </div>
                        <ul>
                          <li>Health and Safety Consultant</li>
                          <li>Fire Risk Assessor</li>
                          <li>Safety Consultant</li>
                        </ul>
                        <Link href="explore/1" className="read_more_new">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="professional_col">
                    <div className="inner">
                      <div className="footer_flex">
                        <div className="pro_info">
                          <div className="pro_icon">
                            <img src="/images/pro4.jpg" alt="" />
                          </div>
                          <div className="_cntnt">
                            <h4>Stefen Disoza</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro_bdy">
                        <h4>
                          <Link href="">
                            Tailored Services for Large Businesses
                          </Link>
                        </h4>
                        <div className="rating">
                          <img src="/images/star.svg" alt="" />
                          <span>5.0</span>
                          <span>40 reviews</span>
                        </div>
                        <ul>
                          <li>Health and Safety Consultant</li>
                          <li>Fire Risk Assessor</li>
                          <li>Safety Consultant</li>
                        </ul>
                        <Link href="explore/1" className="read_more_new">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="professional_col non_register_case_col">
                    <div className="inner">
                      <div className="non_register_notic text-center">
                        <h4>
                          For view more please{" "}
                          <Link href="/signup">Register</Link>
                        </h4>
                      </div>
                      <div className="footer_flex">
                        <div className="pro_info">
                          <div className="pro_icon">
                            <img src="/images/pro1.jpg" alt="" />
                          </div>
                          <div className="_cntnt">
                            <h4>Stefen Disoza</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro_bdy">
                        <h4>
                          <Link href="">
                            Tailored Services for Large Businesses
                          </Link>
                        </h4>
                        <div className="rating">
                          <img src="/images/star.svg" alt="" />
                          <span>5.0</span>
                          <span>40 reviews</span>
                        </div>
                        <ul>
                          <li>Health and Safety Consultant</li>
                          <li>Fire Risk Assessor</li>
                          <li>Safety Consultant</li>
                        </ul>
                        <Link href="explore/1" className="read_more_new">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="map_div">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6228188832406!2d-122.08675812368169!3d37.42238913237985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb9ac68a0753%3A0x2e91e2bde56378e4!2s1600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2s!4v1705412745172!5m2!1sen!2s"
                    width="100%"
                    height="650"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              )}
              <div className="pagination_outer">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default SearchAgent;
