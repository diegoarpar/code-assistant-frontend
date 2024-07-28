import React from "react";

const HomeModule = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import("./HomeModule")
  );
});

const Home = () => {
  return (
      <HomeModule />

  );
};
export default Home;