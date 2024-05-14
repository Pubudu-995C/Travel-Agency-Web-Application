import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Car from "../images/wallpapers/premio.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Vehicles() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="xl:h-[550px] lg:h-[400px] h-[300px]">
          <img
            src={Car}
            className="object-cover w-full h-full"
            alt="Wallpaper"
          />
        </div>
        <div className="mt-10 2xl:px-40 xl:px-24 lg:px-20 px-5">
          <p className="text-center lg:text-3xl md:text-2xl text-lg font-bold text-[#54B435]">
            Need a reliable car and driver in Sri Lanka? Look no further! Travel
            Mango has got you covered with the finest chauffeur-guides in the
            country.
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            When you hit the roads of Sri Lanka, safety and comfort should be
            your top priorities. That's where our expert team steps in. Whether
            you're navigating through bustling traffic or winding rural roads,
            our chauffeur-guides ensure a smooth ride. Forget the stress of
            finding a trustworthy driver; with us, you're in good hands.
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            Price is important, sure, but there's more to choosing a driver than
            just the cost. Our chauffeur-guides prioritize your safety and
            relaxation above all else. Fluent in English and armed with
            extensive local knowledge, they not only drive but also double up as
            knowledgeable tour guides. They know all the hidden gems and can
            make your holiday truly unforgettable.
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            We take pride in our chauffeur-guides, who are hailed as the best in
            the business. With years of experience, boundless enthusiasm, and
            glowing reviews from satisfied customers, they elevate your travel
            experience to the next level. Whether you're a seasoned traveler, a
            family with kids, or a solo female adventurer, rest assured, our
            chauffeur-guides have got your back.
          </p>
          <p className="lg:text-3xl md:text-2xl text-lg font-bold mt-10 text-[#54B435]">
            Experience the Convenience of Our Flexible Rental Options
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            When it comes to traveling around Sri Lanka, car and minivan rentals
            remain the top choice for Travel Mango adventurers. You'll be
            pleased to discover that booking your own vehicle or minivan with a
            chauffeur-guide won't break the bank.
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            Sure, we get it—if you're up for the thrill of navigating packed and
            sometimes risky public transportation, we've been there too. But
            opting for a Travel Mango driver doesn't mean sacrificing your
            freedom. In fact, it offers you the ultimate flexibility to explore
            wherever and whenever you please.
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            At Travel Mango, we're all about catering to your needs. Whether you
            need airport transfers for a warm welcome after a lengthy flight or
            just want a car for certain legs of your journey—like during island
            tours—we've got you covered. You can even arrange transport-only
            bookings if you've already sorted out the rest of your holiday plans
            independently. And with our competitive prices, you might just be
            pleasantly surprised.
          </p>
          <p className="lg:text-3xl md:text-2xl text-lg font-bold mt-10 text-[#54B435]">
            Our Vehicles
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            At Travel Mango, we take pride in our diverse vehicle fleet,
            primarily comprising Mercedes Vans and Honda CRV SUVs, all
            meticulously maintained. Additionally, we collaborate with trusted
            independent owners to supplement our fleet.
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            Our vehicle options cater to various needs:
          </p>
          <ul className="list-disc lg:text-lg md:text-base text-sm mt-5 md:ml-10 ml-8">
            <li>A cozy car suitable for 2-3 passengers.</li>
            <li>A spacious mini-van perfect for groups of 4-6.</li>
            <li>
              An upscale SUV, offering enhanced comfort and elegance, ideal for
              navigating Sri Lankan rural routes.
            </li>
          </ul>
          <p className="lg:text-lg md:text-base text-sm pt-5 text-justify">
            Upon request, we can arrange luxury vehicles, minibuses, and coaches
            to accommodate specific preferences or larger groups.
          </p>
        </div>
        <div className="mb-10">
          <div className="2xl:px-40 xl:px-24 lg:px-20 md:px-10 px-5">
            <div className="lg:grid grid-cols-2 mt-10 bg-slate-200 items-center shadow-md">
              <div className="">
                <Slider {...settings}>
                  <img
                    src="./vehicles/rav4/rav4-5.jpg"
                    className="xl:h-[300px] w-full lg:h-[400px] h-[300px] object-cover"
                    alt=""
                  />
                  <img
                    src="./vehicles/rav4/rav4-2.jpg"
                    className="xl:h-[300px] w-full lg:h-[400px] h-[300px] object-cover"
                    alt=""
                  />
                  <img
                    src="./vehicles/rav4/rav4-3.jpg"
                    className="xl:h-[300px] w-full lg:h-[400px] h-[300px] object-cover"
                    alt=""
                  />
                  <img
                    src="./vehicles/rav4/rav4-4.jpg"
                    className="xl:h-[300px] w-full lg:h-[400px] h-[300px] object-cover"
                    alt=""
                  />
                </Slider>
              </div>
              <div className="p-5">
                <p className="font-bold md:text-xl text-lg">TOYOTA RAV4</p>
                <p className="mt-4 text-justify md:text-base text-sm">
                  The Toyota RAV4 is a compact crossover SUV known for its
                  reliability, versatility, and efficiency. Introduced in 1994,
                  it has since evolved through multiple generations, offering
                  spacious interiors, advanced safety features, and impressive
                  off-road capabilities. With various trim levels including
                  hybrid options, the RAV4 appeals to a wide range of drivers,
                  from urban commuters to outdoor enthusiasts. Its reputation
                  for durability and resale value makes it a popular choice in
                  its segment. Equipped with Toyota's latest technology,
                  including Toyota Safety Sense, it prioritizes safety without
                  compromising on performance or style, solidifying its position
                  as a top-selling SUV globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
