import Pagination from "@/components/pagination";
import Image from "next/image";
import Link from "next/link";
import Team_form from "@/components/team-form";
import React, { useState } from "react";
const TeamDetail = () => {
  const [formPopup, setFormPopup] = useState(false);

  return (
    <>
      <main>
        <section className="uj_team_detail uj_solo_deatail">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="col1_inner">
                  <div className="inner inner2">
                    <div className="image2">
                      <Image
                        width={700}
                        height={500}
                        src="/images/warning.svg"
                        onClick={() => setFormPopup(true)}
                      />
                    </div>
                    <div className="inside">
                      <div className="image">
                        <Image
                          width={1200}
                          height={500}
                          src="/images/agent-1.jpg"
                        />
                      </div>
                      <div className="content">
                        <p>Member of the Real Team</p>
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
                          <span>27 Years of Experience</span>
                        </p>
                      </div>
                    </div>
                    <p className="down_p">1.75% Base Commission Rate</p>
                  </div>
                  <div className="inner inner2">
                    <h4>Meet the Team</h4>

                    <div className="flex">
                      <div className="inside inside2">
                        <div className="image">
                          <Image
                            width={1200}
                            height={500}
                            src="/images/agent-1.jpg"
                          />
                        </div>
                        <div className="content">
                          <h5>Aleena Gilbert</h5>
                          <div className="stars">
                            <p>4.5</p>
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
                              <span>Reviews</span>
                            </p>
                          </div>
                          <p>
                            <span>27 Years of Experience</span>
                          </p>
                        </div>
                      </div>
                      <div className="inside inside2">
                        <div className="image">
                          <Image
                            width={1200}
                            height={500}
                            src="/images/agent-1.jpg"
                          />
                        </div>
                        <div className="content">
                          <h5>Aleena Gilbert</h5>

                          <div className="stars">
                            <p>4.5</p>
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
                              <span>Reviews</span>
                            </p>
                          </div>
                          <p>
                            <span>27 Years of Experience</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner_area">
                    <h5>Our Unique Value</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly
                    </p>
                  </div>
                  <div className="inner_area">
                    <h5>About Ryan Tetreault</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable.
                    </p>
                  </div>
                  <div className="inner_area">
                    <h5>Broker Location</h5>
                    <p>
                      245 N Deltona St, Suite 47
                      <br /> Deltona, FL 34567
                    </p>
                  </div>
                  <div className="inner_area">
                    <h5>Reviews</h5>
                    <div className="select_area">
                      <div className="assc">
                        <span>Filter by: :</span>
                        <form action="">
                          <select name="" id="" className="input">
                            <option value="1">Sell & Buy</option>
                            <option value="2">Descending</option>
                          </select>
                        </form>
                      </div>
                      <div className="assc">
                        <span>Filter by: :</span>
                        <form action="">
                          <select name="" id="" className="input">
                            <option value="1">Most recent</option>
                            <option value="2">Descending</option>
                          </select>
                        </form>
                      </div>
                    </div>
                    <div className="inner">
                      <div className="inside">
                        <div className="content">
                          <div className="stars">
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
                              <span>5.0 - Eleena Gilbert</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>Bought Single Family on 9/22/21</p>
                    </div>

                    <p>
                      “There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.”
                    </p>
                  </div>
                  <div className="inner_area">
                    <div className="inner">
                      <div className="inside">
                        <div className="content">
                          <div className="stars">
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
                              <span>5.0 - Eleena Gilbert</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>Bought Single Family on 9/22/21</p>
                    </div>

                    <p>
                      “There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.”
                    </p>
                  </div>
                  <div className="inner_area">
                    <div className="inner">
                      <div className="inside">
                        <div className="content">
                          <div className="stars">
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
                              <span>5.0 - Eleena Gilbert</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>Bought Single Family on 9/22/21</p>
                    </div>

                    <p>
                      “There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.”
                    </p>
                  </div>
                  <div className="pagination_outer">
                    <Pagination />
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="col2_inner">
                  <div className="inner_card">
                    <div className="head">
                      <h5>Optional Add-ons</h5>
                    </div>
                    <div className="body-content">
                      <ul className="Expertise Seller">
                        <li>
                          <p>
                            <strong>Seller Services</strong>
                          </p>
                          <p>
                            <strong>Price</strong>
                          </p>
                        </li>
                        <li>
                          <p>Comparative Analysis</p>
                          <p>Free</p>
                        </li>
                        <li>
                          <p>Home Sign</p>
                          <p>Free</p>
                        </li>
                        <li>
                          <p>Home Cleaning</p>
                          <p>$769</p>
                        </li>
                        <li>
                          <p>3D Virtual Tour</p>
                          <p>$750</p>
                        </li>
                        <li>
                          <p>Photography</p>
                          <p>$869</p>
                        </li>
                        <li>
                          <p>Landscaping</p>
                          <p>$869</p>
                        </li>
                        <li>
                          <p>Moving Services</p>
                          <p>$869</p>
                        </li>
                        <li>
                          <p>Staging</p>
                          <p>$869</p>
                        </li>
                        <li>
                          <p>
                            <strong>Buyer Services</strong>
                          </p>
                          <p>
                            <strong>Price</strong>
                          </p>
                        </li>
                        <li>
                          <p>Market Analysis</p>
                          <p>$869</p>
                        </li>
                        <li>
                          <p>Remote Tour</p>
                          <p>$869</p>
                        </li>
                        <li>
                          <p>Remote Tour</p>
                          <p>$869</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cta">
                    <Link href="" className="site_btn">
                      Contact Us
                    </Link>
                  </div>
                  <div className="inner_card">
                    <div className="head">
                      <h5>Specialties</h5>
                    </div>
                    <div className="body-content">
                      <ul className="Specialties">
                        <li>
                          <p>Flexible Hours</p>
                        </li>
                        <li>
                          <p>Out of State Buyers</p>
                        </li>
                        <li>
                          <p>Short Sale</p>
                        </li>
                        <li>
                          <p>Forclosure</p>
                        </li>
                        <li>
                          <p>Investor Friendly</p>
                        </li>
                        <li>
                          <p>New Construction</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner_card">
                    <div className="head">
                      <h5>Real Estate Expertise</h5>
                    </div>
                    <div className="body-content">
                      <ul className="Expertise">
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
                            <img src="images/tick1.svg" alt="" />
                          </div>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Townhomes</p>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Mobile Homes</p>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Multifamily</p>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Apartments</p>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Condos</p>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Co-ops</p>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Vacant Land</p>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                          <div className="tick">
                            <img src="images/tick1.svg" alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner_card">
                    <div className="head">
                      <h5>Areas We Serve</h5>
                    </div>
                    <div className="body-content">
                      <ul className="Serve">
                        <li>
                          <p>Sedgwick County, KS</p>
                          <p>Los Angeles, KS</p>
                        </li>
                        <li>
                          <p>Goddard, KS</p>
                          <p>Bel Aire, KS</p>
                        </li>
                        <li>
                          <p>Deltona, KS</p>
                          <p>Haysville, KS</p>
                        </li>
                        <li>
                          <p>Orlando, KS</p>
                          <p>Maize, KS</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner_card">
                    <div className="head">
                      <h5>Licenses</h5>
                    </div>
                    <div className="body-content">
                      <ul className="Licenses">
                        <li>
                          <p>New Mexico</p>
                          <p>12345334</p>
                        </li>
                        <li>
                          <p>Missouri</p>
                          <p>KB-232424</p>
                        </li>
                        <li>
                          <p>Florida</p>
                          <p>24664645</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner_card">
                    <div className="head">
                      <h5>Languages Spoken</h5>
                    </div>
                    <div className="body-content">
                      <ul className="Languages">
                        <li>
                          <p>English, German, Spanish</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Team_form formPopup={formPopup} setFormPopup={setFormPopup} />
    </>
  );
};

export default TeamDetail;
