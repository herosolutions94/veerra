import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BannerTabs from "@/components/banner-tabs";
import AsBuyer from "@/components/as-buyer";
import AsSeller from "@/components/as-seller";

export default function Home() {
  const[tabSave, setTabSave] = useState(1);
  return (
    <>
    <main>
      <section className="banner">
        <div className="contain">
          <div className="flex">
            <div className="colL">
              <h1>Transparent Commissions, Trusted Transactions</h1>
              <p>Discover and shop the commissions of real estate agents and realtors in your area</p>
              <BannerTabs/>
            </div>
            <div className="colR">
              <div className="image">
                <Image src="/images/banner.png" width={500} height={700} alt=""/>
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
                <button className={tabSave == 1 ? "site_btn" : "site_btn color"} type="button" onClick={()=>setTabSave(1)}>As a Seller</button>
                <button className={tabSave == 2 ? "site_btn" : "site_btn color"} type="button" onClick={()=>setTabSave(2)}>As a Buyer</button>
              </div>
              <div className="tab_cntnt">
                {tabSave === 2 ? <AsBuyer /> : null}
                {tabSave === 1 ? <AsSeller /> : null}
              </div>
            </div>
        </div>
      </section>
    </main>
    </>
);
}
