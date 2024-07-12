import React from "react";

const PageHeader = ({ title, subtitle, img }) => {
  const headerStyle = {
    backgroundImage: `url(${img})`, // Use url() to set the background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "14px",
  };

  return (
    <section className="page-header" style={headerStyle}>
      <div className="header-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
