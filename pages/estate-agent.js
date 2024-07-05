import Image from "next/image";
import React from "react";
const EstateAgent = () => {
  return (
    <>
      {/* ======= */}
      <main>
        <section className="uj_smallbanner">
          <div className="contain">
            <div className="inner">
              <h2>Real Estate Agents</h2>
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
        <section className="uj_agent_first">
          <div className="contain">
            <div className="">
              <h2>The Veerra-fied Advantage</h2>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image width={1600} height={500} src="" />
                  </div>
                  <div className="content">
                    <h5>Increased Exposure</h5>
                    <p>
                      Veerra provides you with a platform to showcase your
                      services to a wider audience. This exposure can lead to
                      more potential clients discovering and using your
                      services.
                    </p>
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

export default EstateAgent;
