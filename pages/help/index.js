import CommonCta from "@/components/common-cta";
import FaqTwo from "@/components/faq_two";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Help = () => {
  return (
    <>
      <main>
        <section className="uj_smallbanner2">
          <div className="contain">
            <div className="inner">
              <h2>How can we help?</h2>
            </div>
            <div class="search">
              <form action="">
                <input type="text" placeholder="Ask question" class="input" />
                <button>
                  <div class="image">
                    <img src="/images/search_1.svg" alt="" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* ===== */}
        <section className="uj_help_step">
          <div className="contain">
            <div className="flex">
              <div className="cols">
                <Link href="/help/search-found" className="inner">
                  <div className="image">
                    <Image
                      width={500}
                      height={500}
                      src="/images/uj_help1.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Account Management</h4>
                    <p>
                      Managing your account efficiently is crucial for a.....
                    </p>
                  </div>
                </Link>
              </div>
              <div className="cols">
                <Link href="/help/search-found" className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_help2.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Agent Profiles</h4>
                    <p>
                      Learn how to create and optimize your agent profile to...
                    </p>
                  </div>
                </Link>
              </div>
              <div className="cols">
                <Link href="/help/search-found" className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_help3.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Using the Platform</h4>
                    <p>
                      Navigate our platform with ease using our detailed guides.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="cols">
                <Link href="/help/search-found" className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_help4.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Security & Privacy</h4>
                    <p>
                      Your security and privacy are our top priorities. In this
                      section...
                    </p>
                  </div>
                </Link>
              </div>
              <div className="cols">
                <Link href="/help/search-found" className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_help5.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Technical Issues</h4>
                    <p>
                      Encountering technical problems? This section offers.....
                    </p>
                  </div>
                </Link>
              </div>
              <div className="cols">
                <Link href="/help/search-found" className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_help6.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Agent Profiles</h4>
                    <p>
                      Learn how to create and optimize your agent profile to...
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ==== */}
        <section className="uj_popular">
          <div className="contain">
            <div className="sec_heading">
              <h2>Popular Articles</h2>
            </div>
            <div class="inner">
              <ul>
                <li>
                  <Link href="/help/search-found">How to Create an Account?</Link>
                </li>
                <li>
                  <Link href="/help/search-found">How to Search for Real Estate Agents?</Link>
                </li>
                <li>
                  <Link href="/help/search-found">How to Reset Your Password?</Link>
                </li>
                <li>
                  <Link href="/help/search-found">How to Reset Your Password?</Link>
                </li>
                <li>
                  <Link href="/help/search-found">How to Contact an Agent?</Link>
                </li>
                <li>
                  <Link href="/help/search-found">Understanding Commission Rates</Link>
                </li>
                <li>
                  <Link href="/help/search-found">How to Create an Account?</Link>
                </li>
                <li>
                  <Link href="/help/search-found">How to Search for Real Estate Agents?</Link>
                </li>
                <li>
                  <Link href="/help/search-found">How to Reset Your Password?</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* === */}
        <FaqTwo />
        <CommonCta />
      </main>
    </>
  );
};

export default Help;
