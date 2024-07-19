import Pagination from "@/components/pagination";
import LayoutDashboard from "@/components/layoutDashbaord";
import React, { useState, useEffect, useRef } from "react";

const Index = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <main>
        <section className="ut_agent_dashboard">
          <div className="contain">
            <div className="top_bar">
              <div className="heading">
                <h4>Agent Dashboard</h4>
              </div>
              <div class="search">
                <form action="">
                  <input type="text" placeholder="Search" class="input" />
                  <button>
                    <div class="image">
                      <img src="/images/search_1.svg" alt="" />
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="inner_card ut_common_bg">
                  <div className="head">
                    <h5>Client Status Composition</h5>
                  </div>
                  <div className="body-content">
                    <ul className="Expertise Seller">
                      <li>
                        <p>Active Leads</p>
                        <p>12</p>
                      </li>
                      <li>
                        <p>In Agency</p>
                        <p>3</p>
                      </li>
                      <li>
                        <p>In Escrow</p>
                        <p>4</p>
                      </li>
                      <li>
                        <p>Deal Completed</p>
                        <p>2</p>
                      </li>
                      <li>
                        <p>Not Interested</p>
                        <p>33</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="inner_card ut_common_bg">
                  <div className="head">
                    <h5>Statistics</h5>
                  </div>
                  <div className="body-content">
                    <ul className="Expertise Seller">
                      <li>
                        <p>All Time Contacts</p>
                        <p>112</p>
                      </li>
                      <li>
                        <p>Current Clients</p>
                        <p>5</p>
                      </li>
                      <li>
                        <p>Conversion Rate</p>
                        <p>3.65%</p>
                      </li>
                      <li>
                        <p>Closing Rate</p>
                        <p>1.20%</p>
                      </li>
                      <li>
                        <p>Total Sales</p>
                        <p>4</p>
                      </li>
                      <li>
                        <p>Total Sales Volume</p>
                        <p>$964,000</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="tabs_top">
                  <button
                    className={tab == 1 ? "tab_btn active" : "tab_btn"}
                    type="button"
                    onClick={() => setTab(1)}>
                    Leads
                  </button>
                  <button
                    className={tab == 2 ? "tab_btn active" : "tab_btn"}
                    type="button"
                    onClick={() => setTab(2)}>
                    In Agency
                  </button>
                  <button
                    className={tab == 3 ? "tab_btn active" : "tab_btn"}
                    type="button"
                    onClick={() => setTab(3)}>
                    In Escrow
                  </button>
                  <button
                    className={tab == 4 ? "tab_btn active" : "tab_btn"}
                    type="button"
                    onClick={() => setTab(4)}>
                    Deal Completed
                  </button>
                  <button
                    className={tab == 5 ? "tab_btn active" : "tab_btn"}
                    type="button"
                    onClick={() => setTab(5)}>
                    Not Interested
                  </button>
                  <button
                    className={tab == 6 ? "tab_btn active" : "tab_btn"}
                    type="button"
                    onClick={() => setTab(6)}>
                    Selling
                  </button>
                  <button
                    className={tab == 7 ? "tab_btn active" : "tab_btn"}
                    type="button"
                    onClick={() => setTab(7)}>
                    Buying
                  </button>
                  <button
                    className={tab == 8 ? "tab_btn active" : "tab_btn"}
                    type="button"
                    onClick={() => setTab(8)}>
                    Selling & Buying
                  </button>
                </div>
                <div className="tab_content">
                  <div className={tab == 1 ? "active" : ""}>
                    <div className="dash_table ut_common_bg">
                      <table>
                        <thead>
                          <tr>
                            <th width="10%">Date</th>
                            <th width="16%">Name</th>
                            <th width="9%">Objective</th>
                            <th width="13%">Property Type</th>
                            <th width="13%">Status</th>
                            <th width="14%">Lead ID Number</th>
                            <th width="13%">Phone Number</th>
                            <th width="14%">Email Address</th>
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
                              <div className="copy">
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
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
                                <p>Copy</p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <Pagination />
                    </div>
                  </div>
                  <div className={tab == 2 ? "active" : ""}>
                    <table>
                      <thead>
                        <tr>
                          <th width="10%">Date</th>
                          <th width="16%">Name</th>
                          <th width="9%">Objective</th>
                          <th width="13%">Property Type</th>
                          <th width="13%">Status</th>
                          <th width="14%">Lead ID Number</th>
                          <th width="13%">Phone Number</th>
                          <th width="14%">Email Address</th>
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
                            <div className="copy">
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                  <div className={tab == 3 ? "active" : ""}>
                    <table>
                      <thead>
                        <tr>
                          <th width="10%">Date</th>
                          <th width="16%">Name</th>
                          <th width="9%">Objective</th>
                          <th width="13%">Property Type</th>
                          <th width="13%">Status</th>
                          <th width="14%">Lead ID Number</th>
                          <th width="13%">Phone Number</th>
                          <th width="14%">Email Address</th>
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
                            <div className="copy">
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                  <div className={tab == 4 ? "active" : ""}>
                    <table>
                      <thead>
                        <tr>
                          <th width="10%">Date</th>
                          <th width="16%">Name</th>
                          <th width="9%">Objective</th>
                          <th width="13%">Property Type</th>
                          <th width="13%">Status</th>
                          <th width="14%">Lead ID Number</th>
                          <th width="13%">Phone Number</th>
                          <th width="14%">Email Address</th>
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
                            <div className="copy">
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                  <div className={tab == 5 ? "active" : ""}>
                    <table>
                      <thead>
                        <tr>
                          <th width="10%">Date</th>
                          <th width="16%">Name</th>
                          <th width="9%">Objective</th>
                          <th width="13%">Property Type</th>
                          <th width="13%">Status</th>
                          <th width="14%">Lead ID Number</th>
                          <th width="13%">Phone Number</th>
                          <th width="14%">Email Address</th>
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
                            <div className="copy">
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                  <div className={tab == 6 ? "active" : ""}>
                    <table>
                      <thead>
                        <tr>
                          <th width="10%">Date</th>
                          <th width="16%">Name</th>
                          <th width="9%">Objective</th>
                          <th width="13%">Property Type</th>
                          <th width="13%">Status</th>
                          <th width="14%">Lead ID Number</th>
                          <th width="13%">Phone Number</th>
                          <th width="14%">Email Address</th>
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
                            <div className="copy">
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                  <div className={tab == 7 ? "active" : ""}>
                    <table>
                      <thead>
                        <tr>
                          <th width="10%">Date</th>
                          <th width="16%">Name</th>
                          <th width="9%">Objective</th>
                          <th width="13%">Property Type</th>
                          <th width="13%">Status</th>
                          <th width="14%">Lead ID Number</th>
                          <th width="13%">Phone Number</th>
                          <th width="14%">Email Address</th>
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
                            <div className="copy">
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                  <div className={tab == 8 ? "active" : ""}>
                    <table>
                      <thead>
                        <tr>
                          <th width="10%">Date</th>
                          <th width="16%">Name</th>
                          <th width="9%">Objective</th>
                          <th width="13%">Property Type</th>
                          <th width="13%">Status</th>
                          <th width="14%">Lead ID Number</th>
                          <th width="13%">Phone Number</th>
                          <th width="14%">Email Address</th>
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
                            <div className="copy">
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
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
                              <p>Copy</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
Index.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
