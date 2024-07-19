import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const DashHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <div className="contain">
          <div className="logo">
            <Link href="/dashboard">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
          </div>
          <nav className="ease">
            <div className="proIco _dropDown" ref={dropdownRef}>
              <div
                className={`user_img _dropBtn ${
                  dropdownVisible ? "active" : ""
                }`}
                onClick={handleDropdownToggle}>
                <div className="ico">
                  <img src="/images/user.webp" alt="User" />
                </div>
                <div className="smal_icon">
                  <img src="/images/down_che.svg" alt="Dropdown Icon" />
                </div>
              </div>
              {dropdownVisible && (
                <div className="proDrop _dropCnt">
                  <ul className="dropLst">
                    <li>
                      <Link href="/dashboard/dash-agent-dashboard">
                        <span>Agent Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/dashboard/dash-client-dashboard">
                        <span>Client Dashboard</span>
                      </Link>
                    </li>

                    <li>
                      <Link href="/dashboard/ambassador-program">
                        <span>Ambassador Program</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/dashboard/refferal-agreement">
                        <span>Refferal Agreement</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
};

export default DashHeader;
