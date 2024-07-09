import Link from "next/link";
import React from "react";

const CommonCta = () => {
  return (
    <>
      <section className="uj_common_cta">
        <div className="contain">
          <div className="inner">
            <h2>Get shopping today.</h2>
            <div className="content">
              <p>Find your agent.</p>
            </div>
            <ul className="cta">
              <li>
                <Link href="" className="site_btn">
                  I’m Selling
                </Link>
              </li>
              <li>
                <Link href="" className="site_btn">
                  I’m Buying
                </Link>
              </li>
              <li>
                <Link href="" className="site_btn">
                  I’m Selling and Buying
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonCta;
