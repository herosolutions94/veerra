import Pagination from "@/components/pagination";
import Image from "next/image";
import React from "react";

const TeamDetail = () => {
  return (
    <>
      <main>
        <section className="uj_team_detail">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="col2_inner">
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
                  <div className="pagination_outer">
                    <Pagination />
                  </div>
                </div>
              </div>
              <div className="col2"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TeamDetail;
