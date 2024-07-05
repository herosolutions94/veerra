import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import Image from 'next/image';

export default function BannerTabs() {
   
    const [tab, setTab] = useState(1);
    
    return (
        <div className="tab_banner">
            <div className="tabs_top">
                <button className={tab == 1 ? "tab_btn active" : "tab_btn"} type="button" onClick={()=>setTab(1)}>Sell</button>
                <button className={tab == 2 ? "tab_btn active" : "tab_btn"} type="button" onClick={()=>setTab(2)}>Buy</button>
                <button className={tab == 3 ? "tab_btn active" : "tab_btn"} type="button" onClick={()=>setTab(3)}>Sell & Buy</button>
            </div>
            <div className="tab_content">
                <form className={tab == 1 ? "active" : ""}>
                    <div className="flex_input">
                        <div className="field_col">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" placeholder="Enter city or zip code" className="input"/>
                        </div>
                        <div className="field_col">
                            <label htmlFor="type">Property Type</label>
                            <select name="type" className="input">
                            <option>Choose Property Type</option>
                            <option>Public</option>
                            <option>Commercial</option>
                            </select>
                        </div>
                        <button type="submit" className="site_btn">
                            <Image src="/images/search.svg" width={200} height={200} alt=""/>
                            <span>Shop Agents</span>
                        </button>
                    </div>
                </form>
                <form className={tab == 2 ? "active" : ""}>
                    <div className="flex_input">
                        <div className="field_col">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" placeholder="Enter city or zip code" className="input"/>
                        </div>
                        <div className="field_col">
                            <label htmlFor="type">Property Type</label>
                            <select name="type" className="input">
                            <option>Choose Property Type</option>
                            <option>Public</option>
                            <option>Commercial</option>
                            </select>
                        </div>
                        <button type="submit" className="site_btn">
                            <Image src="/images/search.svg" width={200} height={200} alt=""/>
                            <span>Shop Agents</span>
                        </button>
                    </div>
                </form>
                <form className={tab == 3 ? "active" : ""}>
                    <div className="flex_input">
                        <div className="field_col">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" placeholder="Enter city or zip code" className="input"/>
                        </div>
                        <div className="field_col">
                            <label htmlFor="type">Property Type</label>
                            <select name="type" className="input">
                            <option>Choose Property Type</option>
                            <option>Public</option>
                            <option>Commercial</option>
                            </select>
                        </div>
                        <button type="submit" className="site_btn">
                            <Image src="/images/search.svg" width={200} height={200} alt=""/>
                            <span>Shop Agents</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}