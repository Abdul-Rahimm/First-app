// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

import React from "react";

// rathen than importing we are destructing because they are available as props

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <>
      <div>{children}</div>
      {/* <UserAnalytics />
      <RevenueMetrics />
      <Notifications /> */}

      <div style={{ display: "flex", backgroundColor: "white" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}
