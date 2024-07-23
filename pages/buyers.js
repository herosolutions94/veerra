import AsBuyer from "@/components/as-buyer";
import BannerTabs from "@/components/banner-tabs";
import CommonCta from "@/components/common-cta";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Buyers = () => {
  return (
    <>
      <main>
        {/* ==== */}
        <section className="uj_smallbanner uj_sell_buy_smb">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <h2>Looking to purchase a home?</h2>
                  <p>
                    Veerra allows you to shop and compare all of the real estate
                    agents in your area to find the one that meets your needs.
                  </p>
                </div>
                <BannerTabs />
              </div>
              <div className="col2">
                <div className="image">
                  <Image
                    src="/images/smb_2.jpg"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="save_sec">
          <div className="contain">
            <div className="sec_heading text-center">
              <h2>How Much Can You Save With a Veerra Agent?</h2>
            </div>
            <div className="save_tabs">
              <div className="tab_cntnt">
                <AsBuyer />
              </div>
            </div>
          </div>
        </section>
        <section className="uj_seller_why">
          <div className="contain">
            <div className="sec_heading">
              <h2>Why Veerra?</h2>
              <p>
                Veerra enables buyers to shop around for real estate agents to
                help them find the perfect property. Our objective at Veerra is
                to keep more money in your pocket.
              </p>
            </div>
            <div className="flex">
              <div className="cols col1">
                <div className="inner">
                  <p>
                    On Veerra, the choice is yours. As a buyer you get to
                    interview licensed real estate agents where their passion is
                    finding you your home for the best deal. From our
                    Veerra-fied reviews buyers and sellers that used a Veerra
                    agent can display their honest feedback from their
                    experiences with their agent.
                  </p>
                </div>
              </div>
              <div className="cols col2">
                <div className="image">
                  <Image
                    width={1200}
                    height={500}
                    src="/images/uj_buyer_why_1.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="cols col1">
                <div className="inner">
                  <p>
                    With Veerra you can be sure that your needs and challenges
                    are our top priority. Our Veerra-fied agents display their
                    additional add-on services to you at your convenience to
                    create the ideal selling experience at the click of a
                    button.
                  </p>
                </div>
              </div>
              <div className="cols col2">
                <div className="image">
                  <Image
                    width={1600}
                    height={500}
                    src="/images/uj_buyer_why_2.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="cols col1">
                <div className="inner">
                  <p>
                    Traditionally it is routine for a seller to provide the
                    commission of a property sale for both the buyer’s and
                    seller's agent. Current industry norms of the seller's and
                    buyer’s agent commission is between 2.50 - 3.00% each,
                    though times are quickly changing. In the event a seller
                    elects not to provide a buyer’s agent compensation, it is
                    important you know what commission you and your agent agree
                    on. Commissions are always fully negotiable.
                  </p>
                </div>
              </div>
              <div className="cols col2">
                <div className="image">
                  <Image
                    width={1600}
                    height={500}
                    src="/images/uj_buyer_why_3.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* === */}
        <CommonCta />
      </main>
    </>
  );
};

export default Buyers;
