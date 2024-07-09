import React from "react";
import CommonCta from "@/components/common-cta";
const SearchFound = () => {
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
        <section className="uj_article uj_search_found">
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
                </p>
              </div>
              <div className="inside">
                <h5>How to Reset Your Password?</h5>
                <p>
                  Click on 'Forgot Password' on the login page. Enter your
                  registered email address, and we'll send you instructions to
                  reset your password.
                </p>
              </div>
              <div className="inside">
                <h5>How to Search for Real Estate Agents?</h5>
                <p>
                  Use the 'Search Agents' feature by entering keywords related
                  to the agent's expertise, location, or name. You can also
                  filter results based on commission rates and areas of work.
                </p>
              </div>
              <div className="inside">
                <h5>
                  What should I do if I don't receive a verification email?
                </h5>
                <p>
                  Use the 'Search Agents' feature by entering keywords related
                  to the agent's expertise, location, or name. You can also
                  filter results based on commission rates and areas of work.
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

export default SearchFound;
