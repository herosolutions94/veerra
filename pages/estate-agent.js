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
            <div className="inner">
              <h1>Real Estate Agents</h1>
            </div>
          </div>
        </section>
        {/* ==== */}
        <section className="uj_agent_first">
          <div className="contain">
            <div className="flex">
              <div className="cols col1">
                <div className="inner">
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
                <div className="inner">
                  <h3>Attract the Ideal Client</h3>
                  <p>
                    As a Veerra-fied agent you and your team can custom tailor
                    your profile for clients to learn why their needs are your
                    specialty, making sure even the most indecisive buyer or
                    seller has zero objections for you to become their star
                    agent.
                  </p>
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
          </div>
        </section>
        {/* ===== */}
        <section className="uj_agent_services">
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
        </section>
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
