import Link from "next/link";
import React from "react";

const DashSideBar = () => {
  return (
    <>
      <div className="dash-side-bar">
        <ul>
          <li className="active">
            <Link href="/dashboard/dash-team-leader">Personal Details</Link>
          </li>
          <li>
            <Link href="/dashboard/dash-agent-form">Agent Details</Link>
          </li>
          <li>
            <Link href="/dashboard/dash-agent-status">Agent Status</Link>
          </li>
          <li>
            <Link href="/dashboard/dash-agent-principle">
              Principal Agent Details
            </Link>
          </li>
          <li>
            <Link href="/dashboard/dash-team-management">Team Management</Link>
          </li>
          <li>
            <Link href="/dashboard/dash-refferal-exclusion">
              Refferal Exclusion
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashSideBar;
