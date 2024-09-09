import React from "react";

const styles = {
  container: {
    maxWidth: "120rem",
    padding: "3.2rem",
    margin: "50px auto",
    width: "800px",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  },

  heading: {
    color: "#333333",
    letterSpacing: "0.1rem",
  },

  list: {
    marginLeft: "20px",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
  },

  list_item: {
    color: "#333333",
    letterSpacing: "1.2px",
    fontSize: "1.6rem",
    alignItems: "center",
    padding: "0.2rem",
    borderRadius: "0.3rem",
  },
};
const FallbackPage = () => {
  return (

      <div style={styles.container}>
        <div>
          <h1 style={styles.heading}> Loading the page </h1>
          
        </div>
      </div>

  );
};
export default FallbackPage;