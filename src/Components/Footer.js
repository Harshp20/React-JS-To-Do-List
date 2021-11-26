import React from "react";

export const Footer = () => {
  const footerStyles = {
    position: "relative",
    height: "60px",
    width: "100%",
    top: "6.5vh",
    
  };
  return (
    <>
      <footer className="bg-dark text-light text-center py-3" style={footerStyles}>
        
        <span style={{marginTop: "50px"}}> Copyright &copy; Harsh Pradhan 2021 </span> 
      </footer>
    </>
  );
};


