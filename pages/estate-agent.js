import Image from "next/image";
import Link from "next/link";
import React from "react";
const EstateAgent = () => {
  return (
    <>
      {/* ======= */}
      <main>
        <section className="uj_smallbanner">
          <div className="contain">
            <div className="uj_top_content">
              <h3>
                Would You Refuse Warm Leads Searching You For FREE?
                <strong>You means like... specifically YOU!</strong>
                <div className="images">
                  <img src="images/agentarrow.svg" />
                </div>
              </h3>
              <h1>Meet Veerra.</h1>
            </div>
          </div>
        </section>
        <section className="uj_brand_new">
          <div className="contain">
            <div className="content">
              <h3>
                Veerra is the brand new marketplace for buyers and sellers to
                search for rockstar agents like yourself.
              </h3>
              <Link href="" className="site_btn">
                Become a Veerra Agent Today{" "}
              </Link>
              <p>
                <small>
                  Get started in less than 3 minutes - then it’s on autopilot
                </small>
              </p>
              <h4>
                As a reward for the early action takers, get access the Early
                Bird Ambassador Program
              </h4>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <h5>
                    <strong>Veerra-fied Ambassador:</strong>
                  </h5>
                  <h6>Invite five licensed agents to Veerra gives you:</h6>
                  <ul>
                    <li>
                      As an Ambassador you get priority placement over everyone
                      else (including Pros)
                    </li>
                    <li>
                      A green Veerra icon portrait showing everyone your
                      commitment to improving real estate
                    </li>
                    <li>Free Pro when released!</li>
                    <li>
                      The Ambassador program doesn’t last long, and once it
                      ends, it will never come back!
                    </li>
                  </ul>
                  <p>P.S. You’ll keep Ambassador status permanently!</p>
                </div>
                <div className="shape">
                  <img src="images/agentarrow2.svg" />
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/ambassador.jpg" />
                </div>
              </div>
              <div className="col1 col3">
                <div className="inner">
                  <h5>
                    <strong>Veerra-fied Pro: (coming soon)</strong>
                  </h5>
                  <h6>For the agents with the drive and will for success</h6>
                  <ul>
                    <li>Pros get priority placement over non-Pros</li>
                    <li>
                      A blue Veerra icon showing everyone your advanced features
                      to solve your clients needs
                    </li>
                    <li>Integrations/Automations into your favorite CRM</li>
                    <li>Additional Custom Specialties</li>
                    <li>Custom Add-ons</li>
                    <li>Additional features and bonuses (coming soon)</li>
                  </ul>
                  <p>P.S. You’ll keep Ambassador status permanently!</p>
                </div>
                <div className="shape1">
                  <img src="images/agentarrow.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==== */}
        <section className="uj_agent_first ">
          <div className="contain">
            <div className="flex">
              <div className="cols col1">
                <div className="inner center">
                  <h3>Take charge of your real estate career</h3>
                  <p>
                    With Veerra you will obtain phenomenal leads where you are
                    pursued solely for your skills and expertise in your market.
                    We bring the hungry leads to you, and the exceptional value
                    you provide to your clients keeps them coming back.
                  </p>
                </div>
              </div>
              <div className="cols col2">
                <div className="image">
                  <Image width={1200} height={500} src="/images/agent-1.jpg" />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="cols col1">
                <div className="inner center">
                  <h3>Attract the Ideal Client</h3>
                  <p>
                    As a Veerra-fied agent you and your team can custom tailor
                    your profile for clients to learn why their needs are your
                    specialty, making sure even the most indecisive buyer or
                    seller has zero objections for you to become their star
                    agent.
                  </p>
                  <div className="cta">
                    <Link href="" className="site_btn">
                      Become a Veerra Agent Today{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cols col2">
                <div className="image">
                  <Image width={1600} height={500} src="/images/agent-2.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== */}
        <section className="uj_agent_advantage">
          <div className="contain">
            <div className="sec_heading">
              <h2>The Veerra-fied Advantage</h2>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ad_1.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Increased Exposure</h4>
                    <p>
                      Veerra provides you with a platform to showcase your
                      services to a wider audience. This exposure can lead to
                      more potential clients discovering and using your
                      services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ad_2.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Competitive Advantage</h4>
                    <p>
                      It’s not all about the price. On Veerra you can advertise
                      how you set yourself apart from the competition with how
                      you provide your services and any additional benefits you
                      can showcase to your clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ad_3.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Flexibility in Pricing Models</h4>
                    <p>
                      Veerra's platform may allow agents to experiment with
                      different prices, such as strictly base rate commissions
                      or implementing additional services to better solve your
                      client’s needs. This flexibility enables agents to adapt
                      their pricing strategies to better meet the needs and
                      preferences of their target market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ad_4.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Zero-Cost Leads</h4>
                    <p>
                      We do not charge you for leads, they will always be free.
                      Our success comes from your success. When you complete a
                      successful transaction Veerra receives a referral
                      commission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta">
              <Link href="" className="site_btn">
                Become a Veerra Agent Today{" "}
              </Link>
            </div>
          </div>
        </section>
        {/* ===== */}
        {/* <section className="uj_agent_services">
          <div className="contain">
            <div className="sec_heading">
              <h2>
                Some of the many optional add-ons services you can provide to
                your clients
              </h2>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ser_1.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Market Analysis</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ser_2.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Photography</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ser_3.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Home Inspections</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ser_4.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>3D Virtual Tours</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ser_5.png"
                    />
                  </div>
                  <div className="content">
                    <h4>Home Appraisals</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ser_6.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Landscaping</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ====== */}
        <section className="uj_agent_cta">
          <div className="contain">
            <div className="inner">
              <h2>Become a Veerra-fied Agent Today</h2>
              <div className="cta">
                <Link href="" className="site_btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EstateAgent;
