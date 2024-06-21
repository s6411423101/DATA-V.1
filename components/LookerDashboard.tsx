import React from "react";

const LookerDashboard: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        title="Looker Dashboard"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        src="https://lookerstudio.google.com/embed/reporting/f1837c75-6dd4-4355-9966-ca1785d14302/page/4OrWB"
      ></iframe>
    </div>
  );
};

export default LookerDashboard;
