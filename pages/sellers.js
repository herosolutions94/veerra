import CommonCta from "@/components/common-cta";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sellers = () => {
  return (
    <>
      <main>
        {/* ==== */}
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
                    width={1200}
                    height={500}
                    src="/images/uj_seller_why_1.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="cols col1">
                <div className="inner">
                  <p>
                    On Veerra, the choice is yours. As a seller you get to
                    interview licensed real estate agents where their passion is
                    selling your home alongside you at the maximum value. From
                    our Veerra-fied reviews buyers and sellers that used a
                    Veerra agent can display their honest feedback from their
                    experiences with their agent.
                  </p>
                </div>
              </div>
              <div className="cols col2">
                <div className="image">
                  <Image
                    width={1600}
                    height={500}
                    src="/images/uj_seller_why_2.jpg"
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
                    though times are quickly changing. You have the full right
                    to decide how much commission - if at all - to provide to
                    the buyer’s agent. Commissions are always fully negotiable.
                  </p>
                </div>
              </div>
              <div className="cols col2">
                <div className="image">
                  <Image
                    width={1600}
                    height={500}
                    src="/images/uj_seller_why_3.jpg"
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

export default Sellers;
