import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Sigiriya from "../../images/wallpapers/sigiriya.jpg";
import ContactForm from "../Contact-Form";
import WhatsApp from "../../components/WhatsApp";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { Breadcrumbs } from "@material-tailwind/react";
import Gallery from "../Gallery";

export default function SevenDays() {
  const [activeTab, setActiveTab] = useState("overview");

  const dateList = [
    {
      day: `Day 01`,
      topic: `Airport to Sigiriya`,
      img: `./trips/pinnawala.jpg`,
      detail: `Upon arrival, our proficient chauffeur guide, fluent in English, alongside the attentive airport team, warmly welcomes you, ensuring all your needs are met. Upon reaching your hotel, indulge in a leisurely day of relaxation, recuperating from your journey. Delight in the freedom to unwind at your own pace. Your adventure continues with an overnight stay at a hotel in Sigiriya, where the majestic Pinnawala Elephant Orphanage awaits. Immerse yourself in the tranquility of this haven, embracing the essence of Sri Lanka's natural beauty and cultural richness throughout your stay.`,
      accommodation: `As Your Request`,
      activities: `Pinnawala Elephant Orphanage - Overnight Stay in a Hotel at Sigiriya`,
    },
    {
      day: `Day 02`,
      topic: `Sigiriya to Kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `Embark on a cultural journey beginning at the majestic Sigiriya Rock Fortress, also known as Lion Rock, where ancient engineering meets breathtaking views. Explore the historic Dambulla Royal Cave Temple and Golden Temple, adorned with intricate frescoes and statues. In Matale, wander through a vibrant Spice Garden before visiting the colorful Muthumariamman Temple. In Kandy, marvel at the sacred Temple of the Tooth Relic, a revered Buddhist site. Experience the traditional Kandy Cultural Dance Show, a captivating display of Sri Lankan heritage. Conclude your enriching day with an overnight stay in a comfortable hotel in Kandy, surrounded by the city’s scenic beauty.`,
      accommodation: `As Your Request`,
      activities: `Sigiriya Rock Fortress (Lion Rock) - Dambulla Royal Cave Temple and Golden Temple - Spice Garden - Matale Muthumariamman Temple - Temple of Tooth Relic - Kandy Cultural Dance Show - Overnight Stay in a Hotel at Kandy`,
    },
    {
      day: `Day 03`,
      topic: `Kandy to Ella`,
      img: `./trips/damro.jpg`,
      detail: `On this journey, start by marveling at the stunning Ramboda Falls, a cascading wonder set amidst lush greenery. Next, visit the Damro Labookellie Tea Centre to savor the aroma of fresh Ceylon tea and tour the scenic plantations. Continue to Gregory Lake, a serene spot perfect for boating and picnicking in the heart of Nuwara Eliya. Don’t miss the historic Nuwara Eliya Post Office, an iconic red-brick building dating back to colonial times. Finally, unwind with an overnight stay at a cozy hotel in Ella, a charming town known for its breathtaking landscapes and vibrant atmosphere.`,
      accommodation: `As Your Request`,
      activities: `Ramboda Falls - Damro Labookellie Tea Centre - Gregory Lake - Nuwara Eliya Post Office - Overnight Stay in a Hotel at Ella`,
    },
    {
      day: `Day 04`,
      topic: `Ella to Yala`,
      img: `./trips/nineArch.jpg`,
      detail: `Explore Little Adam's Peak for breathtaking views, then marvel at the architectural wonder of the Nine Arches Bridge. Next, visit the stunning Ravana Falls, a majestic cascade steeped in legend. Embark on an exhilarating Yala Safari to encounter diverse wildlife, from leopards to elephants, in their natural habitat. Conclude your adventure with a comfortable overnight stay at a hotel in Yala, offering a perfect blend of relaxation and adventure. This journey through Sri Lanka's picturesque landscapes promises unforgettable experiences and serene moments.`,
      accommodation: `As Your Request`,
      activities: `Little adam's peak - Nine Arches Bridge - Ravana Falls - Yala Safari - Overnight Stay in a Hotel at Yala`,
    },
    {
      day: `Day 05`,
      topic: `Yala to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Embark on an enchanting journey along the southern coast of Sri Lanka, beginning at the picturesque Coconut Tree Hill, offering panoramic views of Mirissa Bay's azure waters. Delve into the vibrant culture at the local fish market, brimming with the day's fresh catch. Venture into the vast expanse of the ocean for an unforgettable experience of whale and dolphin watching. Then, unwind on the pristine shores of Unawatuna Beach, where golden sands meet the gentle lapping waves. Conclude your day with an idyllic overnight stay in the charming town of Mirissa, where tranquility and beauty converge for an unforgettable coastal retreat.`,
      accommodation: `As Your Request`,
      activities: `Coconut Tree Hill - Mirissa Bay - Fish Market - Whale watching - Dolphin Watching - Unawatuna Beach - Overnight Stay in a Hotel at Mirissa`,
    },
    {
      day: `Day 06`,
      topic: `Mirissa to Bentota`,
      img: `./trips/Galle_Fort.jpg`,
      detail: `On this trip, explore the historic Galle Fort, a UNESCO World Heritage site known for its colonial architecture and vibrant culture. Visit the Turtle Farm & Hatchery, dedicated to the conservation and protection of sea turtles. Cruise along the Madu River, a biodiverse sanctuary with lush mangroves and scenic waterways. End your adventure with an overnight stay in a charming hotel at Bentota, offering a perfect blend of relaxation and comfort amidst the beautiful coastal surroundings. Enjoy the serene ambiance and warm hospitality as you unwind after a day filled with fascinating experiences and natural wonders.`,
      accommodation: `As Your Request`,
      activities: `Galle Fort - Turtle Farm & Hatchery - Madu River - Overnight Stay in a Hotel at Bentota`,
    },
    {
      day: `Day 07`,
      topic: `Bentota to Airport`,
      img: `./trips/airplane_landing.jpg`,
      detail: ``,
      accommodation: ``,
      activities: ``,
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="xl:h-[550px] lg:h-[400px] h-[300px]">
          <img
            src={Sigiriya}
            className="object-cover w-full h-full"
            alt="Wallpaper"
          />
        </div>
        <div className="p-3 w-full md:flex justify-between bg-[#54B435] 2xl:px-40 xl:px-24 lg:px-20 px-5">
          <p className="xl:text-2xl lg:text-xl md:text-base text-sm font-semibold text-white">
            Sri Lanka Tour 07 Days Package{" "}
            <span className="lg:text-lg text-sm lg:font-bold text-[#F0FF42]">
              (07 Days 06 Nights)
            </span>
          </p>
          <p className="xl:text-2xl lg:text-lg md:text-base text-sm font-medium text-white md:mt-0 mt-2">
            Starting from <span className="font-bold"> USD 1200</span> per
            person
          </p>
        </div>

        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/sevendays" className="opacity-60 font-bold">
            <span>SEVEN DAYS</span>
          </a>
        </Breadcrumbs>
        {/* ===========Breadcrumbs=========== */}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:mt-5 mt-0">
          <button
            className={`md:m-2 m-1 w-40 md:w-auto md:px-14 md:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "overview" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto md:px-14 md:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "itinerary" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto md:px-14 md:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "gallery" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>
        {activeTab === "overview" && (
          <div>
            <div className="flex justify-center my-10 2xl:px-40 xl:px-24 lg:px-20 md:px-5 px-0">
              <iframe
                class="w-full h-[500px]"
                src="https://www.google.com/maps/embed?pb=!1m58!1m12!1m3!1d1013886.6552091112!2d80.01799022669655!3d6.950817195451891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x3ae2efb735f22d5d%3A0x6ebd702103828b37!2sBandaranaike%20International%20Airport%20(CMB)%2C%20Katunayake!3m2!1d7.180155999999999!2d79.8842559!4m5!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!3m2!1d7.954108499999999!2d80.75469799999999!4m5!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!3m2!1d7.2905714999999995!2d80.6337262!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!4m5!1s0x3ae5d3a62ffb9359%3A0x3bb623d70b5a3314!2sYala%20National%20Park!3m2!1d6.463961299999999!2d81.47188469999999!4m5!1s0x3ae13fce3177dc59%3A0xa2d8a78b36dc9c90!2sMirissa!3m2!1d5.948262!2d80.4715866!4m5!1s0x3ae22e900168ca21%3A0x96c438f00a68c060!2sBentota!3m2!1d6.4189175!2d80.005979!5e0!3m2!1sen!2slk!4v1715923992026!5m2!1sen!2slk"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="7 Days Trip"
              ></iframe>
            </div>
            <div className="2xl:px-40 xl:px-24 lg:px-20 py-5">
              <ContactForm />
            </div>
          </div>
        )}
        {activeTab === "itinerary" && (
          <div>
            <div className="grid grid-cols-1 gap-y-10 my-10 2xl:px-40 xl:px-24 lg:px-20 px-5">
              {dateList.map((date, index) => (
                <div class="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow lg:flex-row hover:bg-yellow-50 transition-colors duration-300 w-full">
                  <img
                    class="object-cover xl:w-[400px] lg:w-[300px] w-full lg:h-full md:h-[200px] rounded-t-lg lg:rounded-none lg:rounded-s-lg"
                    src={date.img}
                    alt=""
                  />
                  <div class="flex flex-col justify-center p-4 leading-normal w-full h-full">
                    <div className="md:flex items-baseline gap-x-20">
                      <p class="mb-2 lg:text-xl text-lg font-bold tracking-tight text-gray-900">
                        {date.day}
                      </p>
                      <p class="mb-3 lg:text-base text-sm font-medium text-gray-700 italic">
                        {date.topic}
                      </p>
                    </div>
                    <p class="font-normal text-gray-700 lg:text-base text-sm text-justify">
                      {date.detail}
                    </p>
                    <div className="flex flex-col mt-5 lg:text-base text-sm">
                      <p class="font-normal text-gray-700 space-x-5">
                        <span className="font-bold ">Accommodation: </span>{" "}
                        <span>{date.accommodation}</span>
                      </p>
                      <p class="font-normal text-gray-700 space-x-5">
                        {" "}
                        <span className="font-bold">Activities:</span>
                        <span className="italic font-medium">
                          {date.activities}
                        </span>
                      </p>
                    </div>
                    <div className="flex md:justify-end justify-center mt-5">
                      <button className="bg-[#54B435] md:px-8 md:py-2 px-5 py-1 rounded mx-5 text-base font-bold text-white">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="2xl:px-40 xl:px-24 lg:px-20 py-5">
              <ContactForm />
            </div>
          </div>
        )}
        {activeTab === "gallery" && (
          <div>
            <div className="2xl:px-40 xl:px-24 lg:px-20 md:px-5 px-0">
              <div className="mt-10">
                <Gallery />
              </div>
              <div className="my-10">
                <ContactForm />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <WhatsApp />
      <ScrollToTopButton />
    </div>
  );
}
