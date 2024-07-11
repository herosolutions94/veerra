import CommonCta from "@/components/common-cta";
import FaqTwo from "@/components/faq_two";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowItworks = () => {
  return (
    <>
      <main>
        <section className="uj_smallbanner">
          <div className="contain">
            <div className="inner how_it">
              <h1>How it works</h1>
              <p>
                Welcome to veerra! Our platform bridges the gap between real
                estate agents and clients, making it easier for you to find the
                perfect match. Whether you're an agent looking to showcase your
                expertise or a client seeking the best agents in your area, our
                platform provides a dynamic and transparent solution to meet
                your needs.
              </p>
            </div>
          </div>
        </section>
        {/* ===== */}
        <section className="uj_work_steps">
          <div className="contain">
            <div className="sec_heading">
              <h2>Steps for Users</h2>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_work_1.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Sign Up</h4>
                    <p>
                      Creating an account is the first step. Click on the 'Sign
                      Up' button at the top right corner of our homepage. Fill
                      in your personal details, verify your email address, and
                      you’re ready to start.
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
                      src="/images/uj_work_2.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Search for Agents</h4>
                    <p>
                      Use the 'Search Agents' feature to find real estate agents
                      based on specific criteria like location, specialization,
                      and commission rates. Our advanced search filters help you
                      narrow down your options to find the best fit for your
                      needs.
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
                      src="/images/uj_work_3.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>View Agent Details</h4>
                    <p>
                      Click on an agent’s profile to view their detailed
                      information. Here, you can see their bio, work areas,
                      commission rates, client reviews, and contact information.
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
                      src="/images/uj_work_4.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Contact Agents</h4>
                    <p>
                      Once you find an agent you’re interested in, use the
                      'Contact Agent' button on their profile. Fill out the
                      contact form with your details and message. The agent will
                      receive your inquiry and respond to you directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== */}
        <section className="uj_work_steps2">
          <div className="contain">
            <div className="sec_heading">
              <h2>Steps for Agents</h2>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <Image
                      width={1600}
                      height={500}
                      src="/images/uj_ag_step1.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Sign Up</h4>
                    <p>
                      Creating an account is the first step. Click on the 'Sign
                      Up' button at the top right corner of our homepage. Fill
                      in your personal details, verify your email address, and
                      you’re ready to start.
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
                      src="/images/uj_ag_step2.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Create Profile</h4>
                    <p>
                      Create a detailed profile to highlight your expertise,
                      areas of operation, and commission rates. Complete your
                      profile by adding a professional photo, bio, and any
                      relevant certifications.
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
                      src="/images/uj_ag_step3.svg"
                    />
                  </div>
                  <div className="content">
                    <h4>Respond to Client Inquiries</h4>
                    <p>
                      When clients contact you through the platform, you'll
                      receive an email notification. Log in to your account to
                      view and respond to inquiries promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== */}
        <section className="uj_work_feature">
          <div className="contain">
            <div className="sec_heading">
              <h2>Features and Benefits</h2>
              <p>
                Our platform offers a variety of features designed to enhance
                the experience for both agents and clients:
              </p>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="content">
                    <h4>Comprehensive Profiles:</h4>
                    <p>
                      Agents can create detailed profiles that highlight their
                      expertise and attract potential clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="content">
                    <h4>Advanced Search Filters:</h4>
                    <p>
                      Clients can search for agents based on location,
                      specialization, and commission rates, ensuring they find
                      the best match.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="content">
                    <h4>Direct Communication:</h4>
                    <p>
                      Our platform facilitates direct communication between
                      agents and clients, making it easy to start conversations
                      and build relationships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="content">
                    <h4>Verified Reviews:</h4>
                    <p>
                      Clients can read verified reviews from other users,
                      helping them make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="content">
                    <h4>Secure Transactions:</h4>
                    <p>
                      We ensure all interactions and transactions on our
                      platform are secure and confidential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* === */}
        <FaqTwo />
        {/* === */}
        <CommonCta />
      </main>
    </>
  );
};

export default HowItworks;
