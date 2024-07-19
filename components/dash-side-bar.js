import Link from "next/link";
import React from "react";

const DashSideBar = () => {
  return (
    <>
      <div className="dash-side-bar">
        <ul>
          <li className="active">
            <Link href="/dash-team-leader">Personal Details</Link>
          </li>
          <li>
            <Link href="/dash-agent-form">Agent Details</Link>
          </li>
          <li>
            <Link href="/dash-agent-status">Agent Status</Link>
          </li>
          <li>
            <Link href="/dash-agent-principle">Principal Agent Details</Link>
          </li>
          <li>
            <Link href="/dash-team-management">Team Management</Link>
          </li>
          <li>
            <Link href="/dash-refferal-exclusion">Refferal Exclusion</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashSideBar;
