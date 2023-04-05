import React from "react";
import Blog from "./components/Blog";
import BannerImg from "./BannerImg";
import bannerPicture from "../../assets/bannerImg.jpg";

function Home() {
  return (
    <main className="home">
      <BannerImg img={bannerPicture}></BannerImg>

      <Blog title="Trending"></Blog>
    </main>
  );
}

export default Home;
