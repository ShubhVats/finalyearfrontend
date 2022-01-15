import { useEffect, useState } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

import MainFeaturedPost from "./MainFeaturedPost";
const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export default function MainCarousel(props) {
  const fetchData = async () => {
    const result = await axios
      .get("https://careerheadstart.herokuapp.com/Banners/")
      .then(function (response) {
        // handle success
        setBanner(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const FeaturedPost = {
    title: "banner.title",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    linkText: "Continue reading…",
  };
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel autoplay>
      {Object.values(banner).map((value) => {
        return (
          <div>
            <MainFeaturedPost post={value} />{" "}
          </div>
        );
      })}
      {/* <div>
        <MainFeaturedPost post={FeaturedPost} />
      </div>

      <div>
        <MainFeaturedPost post={mainFeaturedPost} />
      </div>
      <div>
        <MainFeaturedPost post={mainFeaturedPost} />
      </div>
      <div>
        <MainFeaturedPost post={mainFeaturedPost} />
      </div> */}
    </Carousel>
  );
}
