import React from "react";

interface LookerDashboardProps {
  className?: string;
}

const LookerDashboard: React.FC<LookerDashboardProps> = ({ className }) => {
  return (
    <div className={className}>
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
        src="https://lookerstudio.google.com/embed/reporting/d3fcf77a-2aac-4cb8-bcaa-606ed68ca89e/page/5Y23D"
      ></iframe>
    </div>
  );
};

export default LookerDashboard;
