import React from "react";
import "./Home.css";
import Product from "../../Components/Product/Product";
import UncontrolledExample from "../../Components/Carousel/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__imageWrapper">
          {/* <img className="home__image" src="" alt="Hero" /> */}
          <UncontrolledExample />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title={
              "HP Pavilion Gaming 11th Gen Intel Core i5 15.6'(39.6cm) (8GB RAM/512GB SSD/RTX 3050 4GB Graphics/144 Hz/B&O/Windows 10 Home/MS Office/2.23Kg), 15-dk2012TX"
            }
            price={71990}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/41j6O0FtwTL._SX300_SY300_QL70_FMwebp_.jpg"
            }
            alt={"HP Pavilio Gaming Laptop"}
          />

          <Product
            id="12389041"
            title={
              "Wonderchef Nutri-blend Mixer | Powerful 400W 22000 RPM motor | 2 Years warranty | Black"
            }
            price={2564}
            image={
              "https://m.media-amazon.com/images/I/61BGNSBBwYL._SL1080_.jpg"
            }
            rating={4}
            alt={"Wonderchef Nutri-blend Mixer"}
          />
        </div>

        <div className="home__row">
          <Product
            id="12382941"
            title={"Apple 2021 iPad (Wi-Fi, 64GB) - Silver"}
            price={30900}
            image={
              "https://m.media-amazon.com/images/I/61PnHlc0HCL._SL1500_.jpg"
            }
            rating={5}
            alt={"Apple Ipad"}
          />

          <Product
            id="12337841"
            title={"Apple iPhone 14 Pro 128GB Space Black"}
            price={122999}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61XO4bORHUL._SL1500_.jpg"
            }
            alt={"Apple Iphone 14"}
          />

          <Product
            id="12390341"
            title={"Apple 2022 MacBook Air Laptop"}
            price={107990}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/710TJuHTMhL._SL1500_.jpg"
            }
            alt={"Apple Macbook Air"}
          />
        </div>

        <div className="home__row">
          <Product
            id={"12389241"}
            title={
              "LG 86cm Ultra Wide Curved Gaming LCD Monitor 160Hz 1ms -QHD (2K 3440 x 1440 Pixels) sRGB HDR 10 Color Calibrated, Free Sync Premium, HDM1, 2 DP, 7W Speaker, Tilt & Height Adjust - 34WP65C Black"
            }
            price={42731}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61Y0JHgpWJL._SL1500_.jpg"
            }
            alt={"LG Ultra Wide Curved Gaming LCD Monitor"}
          />
        </div>

        <div className="home__row">
          <Product
            id={"12307641"}
            title={"Casio Vintage Series Digital Gold Dial Women's"}
            price={4495}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61esRgxTtmL._UL1100_.jpg"
            }
            alt={"Casio Vintage Digital Gold"}
          />

          <Product
            id={"12378941"}
            title={"Noise ColorFit Pulse Grand Smart Watch (Jet Black)"}
            price={3999}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/61Q0R5cdxWL._SL1500_.jpg"
            }
            alt={"Noise Colorfit Pulse"}
          />

          <Product
            id={"12348341"}
            title={"Havells HD3151 1200 W Hair Dryer (Hot/Cool/Warm)"}
            price={1415}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61iuV9nzuKL._SL1500_.jpg"
            }
            alt={"Havells Hair Dryer"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
