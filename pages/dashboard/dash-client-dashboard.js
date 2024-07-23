import CreateAgentReview from "@/components/create-agent-review";
import CreateVeerraFiedReview from "@/components/create-veerra-fied-review";
import Pagination from "@/components/pagination";
import React, { useState } from "react";
import LayoutDashboard from "@/components/layoutDashbaord";
const DashClientDashboard = () => {
  const [formPopup, setFormPopup] = useState(false);
  const [formPopup1, setFormPopup1] = useState(false);
  return (
    <>
      <main>
        <section className="ut_agent_dashboard ut_client_dashboard">
          <div className="contain">
            <div className="top_bar">
              <div className="heading">
                <h4>Dashboard</h4>
              </div>
            </div>
            <div className="flex">
              <div className="col2">
                <div className="tab_content">
                  <div className="dash_table ut_common_bg active">
                    <table>
                      <thead>
                        <tr>
                          <th width="10%">Date</th>
                          <th width="16%">Agent</th>
                          <th width="9%">Objective</th>
                          <th width="13%">Property Type</th>
                          <th width="13%">Status</th>
                          <th width="14%">Contact Code</th>
                          <th width="13%">Phone Number</th>
                          <th width="14%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div className="copy">
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>Sell & Buy</td>
                          <td>Mobile Homes</td>
                          <td>Deal Completed</td>
                          <td>ABCD-234-ASDF</td>
                          <td>345-543-7654</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                </div>
              </div>
              <div className="col1">
                <div className="lblock">
                  <h4>Create a Veerra-fied Review</h4>
                  <div className="dash_table ut_common_bg ut_in_height">
                    <table>
                      <thead>
                        <tr>
                          <th width="33%">Date</th>
                          <th width="42%">Agent</th>
                          <th width="25%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td>
                            <div
                              className="copy"
                              onClick={() => setFormPopup1(true)}>
                              <p>Review</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="lblock">
                  <h4>Completed Reviews</h4>
                  <div className="dash_table ut_common_bg ut_in_height">
                    <table>
                      <thead>
                        <tr>
                          <th width="33%">Date</th>
                          <th width="42%">Agent</th>
                          <th width="25%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>05/24/2024</td>
                          <td>John Stefen Alvarado</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CreateVeerraFiedReview
        formPopup1={formPopup1}
        setFormPopup1={setFormPopup1}
      />
      <CreateAgentReview formPopup={formPopup} setFormPopup={setFormPopup} />
    </>
  );
};

export default DashClientDashboard;
DashClientDashboard.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
