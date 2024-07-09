import CommonCta from "@/components/common-cta";
import React from "react";

const Article = () => {
  return (
    <>
      {/* === */}
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
                    <img src="images/search_1.svg" alt="" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* === */}
        <section className="uj_article">
          <div className="contain">
            <div className="inner">
              <p>
                Search results for:
                <strong> Understanding Commission Rates?</strong>
              </p>
              <div className="inside">
                <h5>Understanding Commission Rates</h5>
                <p>
                  Commission rates vary by agent. You can view the rates on the
                  agent's profile page under the 'Commission Rates' section.
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                </p>
                <p>
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                  After signing up, you will receive a verification email. Click
                  on the link provided in the email to verify your account.
                </p>
                <p>
                  Go to your profile page by clicking on your username at the
                  top right corner. Click on 'Edit Profile' to update your
                  information. Go to your profile page by clicking on your
                  username at the top right corner. Click on 'Edit Profile' to
                  update your information. Go to your profile page by clicking
                  on your username at the top right corner. Click on 'Edit
                  Profile' to update your information. Go to your profile page
                  by clicking on your username at the top right corner. Click on
                  'Edit Profile' to update your information.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ==== */}
        <CommonCta />
      </main>
    </>
  );
};

export default Article;
