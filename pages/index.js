import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BannerTabs from "@/components/banner-tabs";
import AsBuyer from "@/components/as-buyer";
import AsSeller from "@/components/as-seller";
import CommonCta from "@/components/common-cta";

export default function Home() {
  const [tabSave, setTabSave] = useState(1);
  return (
    <>
      <main>
        <section className="banner">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <h1>Transparent Commissions, Trusted Transactions</h1>
                <p>
                  Discover and shop the commissions of real estate agents and
                  realtors in your area
                </p>
                <BannerTabs />
              </div>
              <div className="colR">
                <div className="image">
                  <Image
                    src="/images/banner.png"
                    width={500}
                    height={700}
                    alt=""
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
              <div className="btn_blk text-center">
                <button
                  className={tabSave == 1 ? "site_btn" : "site_btn color"}
                  type="button"
                  onClick={() => setTabSave(1)}>
                  As a Seller
                </button>
                <button
                  className={tabSave == 2 ? "site_btn" : "site_btn color"}
                  type="button"
                  onClick={() => setTabSave(2)}>
                  As a Buyer
                </button>
              </div>
              <div className="tab_cntnt">
                {tabSave === 2 ? <AsBuyer /> : null}
                {tabSave === 1 ? <AsSeller /> : null}
              </div>
            </div>
          </div>
        </section>
        <section className="uj_agent_first uj_what_veera">
          <div className="contain">
            <div className="flex">
              <div className="cols col2">
                <div className="image">
                  <Image width={1600} height={500} src="/images/uj_what1.jpg" />
                </div>
              </div>
              <div className="cols col1">
                <div className="inner">
                  <h3>What is Veerra?</h3>
                  <p>
                    Veerra is a real estate marketplace that allows home buyers
                    and sellers to shop around for real estate agents to solve
                    their real estate needs. One of our core values is upfront
                    transparency, where you get to see the core commission and
                    benefits each agent and team provides.
                  </p>
                  <p>
                    With real estate commissions posted upfront for you to shop,
                    each agent has the opportunity to compete for your business
                    through different pricing models and other services they can
                    provide to you. Veerra is completely free for buyers and
                    sellers to use. We take a small referral fee from the
                    agent's commission after a successful transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="uj_index_passionate">
          <div className="contain">
            <div className="sec_heading">
              <h2>Passionate About Being Different</h2>
              <p>Our team is driven by a passion for delivering exception.</p>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image width={1600} height={500} src="/images/uj_p1.svg" />
                  </div>
                  <div className="content">
                    <h4>Customer Focus</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image width={1600} height={500} src="/images/uj_p2.svg" />
                  </div>
                  <div className="content">
                    <h4>Trustworthiness</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image width={1600} height={500} src="/images/uj_p3.svg" />
                  </div>
                  <div className="content">
                    <h4>Professionalism</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image width={1600} height={500} src="/images/uj_p4.svg" />
                  </div>
                  <div className="content">
                    <h4>Communication</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image width={1600} height={500} src="/images/uj_p5.svg" />
                  </div>
                  <div className="content">
                    <h4>Teamwork</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="uj_agent_first uj_what_veera uj_index_choose">
          <div className="contain">
            <div className="flex">
              <div className="cols col1">
                <div className="inner">
                  <h3>Why Choose Us</h3>
                  <p>
                    Veerra empowers home sellers and buyers to compare and
                    select real estate agents based on transparent commission
                    rates, ensuring you get the best value for your money. With
                    our easy-to-use platform, you can find experienced agents
                    who are ready to meet your needs and help you save on
                    commissions.
                  </p>
                </div>
              </div>
              <div className="cols col2">
                <div className="image">
                  <Image
                    width={1600}
                    height={500}
                    src="/images/uj_index_choose.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== */}
        <section className="uj_agent_services uj_index_services">
          <div className="contain">
            <div className="sec_heading">
              <h2>Some optional add-on services provided by our agents</h2>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="inside">
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
                  <p>
                    Learn about the current state of the housing market how it
                    can impact you
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="inside">
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
                  <p>
                    Stellar photos of your property for prospective buyers to
                    dream about
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="inside">
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
                  <p>
                    A thorough examination of your home or your prospective home
                    under contract
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="inside">
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
                  <p>
                    An immersive online walkthrough for buyers to discover your
                    home
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="inside">
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

                  <p>
                    A licensed professional assessment of your home or a
                    prospective home under contract
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="inside">
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
                  <p>Enhance your home’s curb appeal to attract more buyers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="uj_index_subscribe">
          <div className="contain">
            <div className="flex">
              <div className="cols col1">
                <div className="image">
                  <Image width={1600} height={500} src="/images/uj_subs.png" />
                </div>
              </div>
              <div className="cols col2">
                <div className="inner">
                  <h3>
                    We are growing fast, subscribe to get our latest news for
                    you!
                  </h3>
                  <div className="search">
                    <form action="">
                      <input
                        type="text"
                        placeholder="Enter your email..."
                        className="input"
                      />
                      <button className="site_btn">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CommonCta />
      </main>
    </>
  );
}
