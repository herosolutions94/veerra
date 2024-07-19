import LayoutDashboard from "@/components/layoutDashbaord";
import Link from "next/link";
import React from "react";

const AmbassadorProgram = () => {
  return (
    <>
      <main>
        <section className="uj_smallbanner">
          <div className="contain">
            <div className="inner2">
              <h1>
                Early Bird <br /> Ambassador Program
              </h1>
            </div>
          </div>
        </section>
        <section className="uj_ambdr">
          <div className="contain">
            <div className="inner">
              <div className="photo">
                <div className="image">
                  <img src="/images/ambassador.jpg" />
                </div>
              </div>
              <div className="flex">
                <div className="label">
                  <h5>Your Invitation Code:</h5>
                </div>
                <div className="code">
                  <p>3GRD4Y</p>
                </div>
                <div className="code1">
                  <Link href="">copy</Link>
                </div>
              </div>
              <h3>Total Invitations</h3>
              <div className="image2">
                <img src="/images/zero.png" />
              </div>
              <div className="detail1">
                <p>
                  The Early Bird Ambassador Program is a limited-time event
                  which is our way of rewarding those who are willing to make
                  the leap and make a difference in the experience for buyers
                  and sellers across the country. Fortune favors the bold.
                </p>
              </div>
              <div className="inner2">
                <div className="detail2">
                  <h4>How To Become an Veerra-fied Ambassador</h4>
                  <ol>
                    <li>Find and copy your invitation code</li>
                    <li>
                      Connect and share your invitation code with other licensed
                      real estate agents
                    </li>
                    <li>They sign up using your invitation code</li>
                    <li>Repeat 5 times</li>
                    <li>Congratulations!</li>
                  </ol>
                </div>
                <div className="detail3">
                  <h4>Ambassador Rewards</h4>
                  <ol>
                    <li>
                      Obtain a permanent green Veerra icon on your portrait for
                      everyone to see
                    </li>
                    <li>
                      Receive permium placement priority over other agents in
                      search, including other non-ambassador Pro agents
                    </li>
                    <li>
                      Obtain Pro status for you and your team when Pro drops,
                      under the following schedule:
                      <ul>
                        <li>
                          Solo Agents recieve Pro status FREE for two years
                        </li>
                        <li>
                          Teams get Pro FREE for one year plus three months per
                          additional team member ambassador up to a total of
                          three years Team member bonus applies to the team
                          where the 5th invitation is confirmed
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div className="detail3">
                  <h4>Pro Features</h4>
                  <ol>
                    <li>
                      Obtain a blue Veerra icon on your portrait on both agent
                      search and profile (Pro status management is held by the
                      Team Leader, privileges given to the entire team)
                    </li>
                    <li>
                      Developer API access for integrations and automations
                    </li>
                    <li>Placement priority over non-Pro agents</li>
                    <li>Additional Custom Specialities</li>
                    <li>Custom Add-ons</li>
                    <li>More Bonuses (coming soon!)</li>
                  </ol>
                </div>
                <div className="detail4">
                  <p>
                    So what are you waiting for? The Early Bird Ambassador
                    Program is a limited time event! When Veerra has enough
                    agents to reach all major metropolitan areas in the United
                    States, the program will close forever! Don’t become someone
                    who misses out on the opportunity to get in early and
                    maximize your leads!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AmbassadorProgram;
AmbassadorProgram.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
