import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import NuwaraEliya from "../../images/wallpapers/Nuwara_Eliya.jpg";
import ContactForm from "../Contact-Form";
import WhatsApp from "../../components/WhatsApp";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { Breadcrumbs } from "@material-tailwind/react";
import Gallery from "../Gallery";

export default function FourteenDays() {
  const [activeTab, setActiveTab] = useState("overview");

  const dateList = [
    {
      day: `Day 01`,
      topic: `Airport to Negombo`,
      img: `./trips/Negombo_Beach.jpg`,
      detail: `Upon landing, you will be warmly greeted by our English-speaking chauffeur guide and the airport team, ready to assist with any needs. After reaching your hotel, take the remainder of the day to relax and unwind from your long flight, enjoying the time at your own pace. Discover the serene beauty of Negombo Lagoon and the picturesque Negombo Beach, before settling in for an overnight stay at a comfortable hotel in Negombo.`,
      accommodation: `As Your Request`,
      activities: `Negombo Lagoon - Negombo Beach - Overnight Stay in a Hotel at Negombo`,
    },
    {
      day: `Day 02 & 03`,
      topic: `Negombo to Sigiriya`,
      img: `./trips/sigiriya.jpg`,
      detail: `Embark on an unforgettable journey through Sri Lanka's cultural marvels. Begin with the heartwarming experience of Pinnawala Elephant Orphanage, witnessing majestic creatures in their natural habitat. Then, venture towards Sigiriya, where history and nature converge. Ascend the iconic Sigiriya Rock Fortress, marveling at its ancient splendor and panoramic vistas. Nearby, explore Pidurangala Rock, offering a unique perspective of Sigiriya. Immerse yourself in Sigiriya Village, discovering local customs and traditions. Continue the expedition with a captivating tour of Polonnaruwa City, delving into its rich heritage. Conclude the day's adventures with a peaceful overnight stay in a cozy hotel nestled in the enchanting surroundings of Sigiriya.`,
      accommodation: `As Your Request`,
      activities: `Pinnawala Elephant Orphanage - Sigiriya Rock Fortress (Lion Rock) - Pidurangala Rock - Sigiriya Village Tour - Polonnaruwa City Tour - Overnight Stay in a Hotel at Sigiriya`,
    },
    {
      day: `Day 04 & 05`,
      topic: `Sigiriya to Kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `Nestled in the heart of Sri Lanka, the Dambulla Royal Cave Temple and Golden Temple stand as timeless marvels, their ancient sanctuaries echoing with spiritual resonance. Nearby, the Spice Garden captivates with its aromatic allure, a sensory journey through the rich tapestry of Sri Lankan flavors. Further afield, the Matale Muthumariamman Temple beckons with its ornate architecture and devout ambiance. In Kandy, the revered Temple of the Tooth Relic holds the essence of Buddhist faith, a sacred repository of veneration. And amidst the cultural vibrancy, the Kandy Cultural Dance Show unfolds, a mesmerizing spectacle of rhythm and tradition, showcasing the island's artistic heritage in captivating splendor.`,
      accommodation: `As Your Request`,
      activities: `Dambulla Royal Cave Temple and Golden Temple - Spice Garden - Matale Muthumariamman Temple - Temple of Tooth Relic - Kandy Cultural Dance Show - Overnight Stay in a Hotel at Kandy`,
    },
    {
      day: `Day 06 & 07`,
      topic: `Kandy to Nuwara Eliya `,
      img: `./trips/Gregory_Lake.jpg`,
      detail: `Embark on an enchanting journey to Nuwara Eliya, where you'll ascend the majestic Ambuluwawa Tower, immerse yourself in the aromatic bliss of Damro Labookellie Tea Centre, and witness nature's grandeur at the cascading Ramboda Waterfalls. Explore the lush tea plantations and factories, bask in the tranquil beauty of Gregory Lake, and marvel at the architectural splendor of Nuwara Eliya Post Office. Pay reverence at the sacred Seetha Eliya Temple, trek to the breathtaking Bomburu Ella, and soak in panoramic vistas from Lipton's Seat, before retreating to a cozy hotel for an overnight stay in this hill country paradise.`,
      accommodation: `As Your Request`,
      activities: `Ambuluwawa Tower - Ramboda Waterfalls - Damro Labookellie Tea Centre - Gregory Lake - Nuwara Eliya Post Office - Seetha Eliya Temple - Bomburu Ella - Lipton Seat - Overnight Stay in a Hotel at Nuwara Eliya`,
    },
    {
      day: `Day 08 & 09`,
      topic: `Nuwara Eliya to Ella`,
      img: `./trips/Little_Adam.jpg`,
      detail: `Embark on a picturesque journey by train to Ella, where nature's wonders await. Marvel at the majestic Ravana Falls, cascading gracefully amidst lush greenery. Explore the iconic Nine Arch Bridge, a marvel of architecture nestled in the verdant landscape. Hike up to Little Adam's Peak for breathtaking panoramic views that stretch to the horizon. Don't miss the enchanting Ellawella Waterfalls, where tranquility reigns supreme. After a day of exploration, unwind in comfort with an overnight stay at a cozy hotel in Ella, surrounded by the serene beauty of the Sri Lankan countryside.`,
      accommodation: `As Your Request`,
      activities: `Little adam's peak - Ellawella Waterfalls - Nine Arches Bridge - Ravana Falls - Overnight Stay in a Hotel at Ella`,
    },
    {
      day: `Day 10 & 11`,
      topic: `Ella to Yala`,
      img: `./trips/yala.jpg`,
      detail: `Embark on an exhilarating journey through Sri Lanka's scenic wonders with a visit to the awe-inspiring Diyaluma Waterfalls, where cascading waters create a mesmerizing spectacle. Explore the ancient marvels of Buduruwagala Temple, steeped in history and spiritual significance. Continue your adventure with a thrilling Yala or Udawalawe Evening Jeep Safari, immersing yourself in the untamed beauty of nature as you encounter diverse wildlife in their natural habitat. Conclude your day with a serene overnight stay at a hotel nestled amidst the wilderness of Yala or Udawalawe, offering comfort and tranquility amidst the captivating surroundings.`,
      accommodation: `As Your Request`,
      activities: `Diyaluma Waterfalls - Proceed to Yala / Udawalawe Jeep Safari - Buduruwagala Temple - Overnight Stay in a Hotel at Yala/ Udawalawe`,
    },
    {
      day: `Day 12 & 13`,
      topic: `Yala to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Embark on an enchanting journey along the southern coast of Sri Lanka, beginning at the picturesque Coconut Tree Hill, offering panoramic views of Mirissa Bay's azure waters. Delve into the vibrant culture at the local fish market, brimming with the day's fresh catch. Venture into the vast expanse of the ocean for an unforgettable experience of whale and dolphin watching. Then, unwind on the pristine shores of Unawatuna Beach, where golden sands meet the gentle lapping waves. Conclude your day with an idyllic overnight stay in the charming town of Mirissa, where tranquility and beauty converge for an unforgettable coastal retreat.`,
      accommodation: `As Your Request`,
      activities: `Coconut Tree Hill - Mirissa Bay - Fish Market - Whale watching - Dolphin Watching - Unawatuna Beach - Overnight Stay in a Hotel at Mirissa`,
    },
    {
      day: `Day 14`,
      topic: `Mirissa to Airport`,
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
            src={NuwaraEliya}
            className="object-cover w-full h-full"
            alt="Wallpaper"
          />
        </div>
        <div className="p-3 w-full md:flex justify-between bg-[#54B435] 2xl:px-40 xl:px-24 lg:px-20 px-5">
          <p className="xl:text-2xl lg:text-xl md:text-base text-sm font-semibold text-white">
            Sri Lanka Tour 14 Days Package{" "}
            <span className="lg:text-lg text-sm lg:font-bold text-[#F0FF42]">
              (14 Days 13 Nights)
            </span>
          </p>
          <p className="xl:text-2xl lg:text-lg md:text-base text-sm font-medium text-white md:mt-0 mt-2">
            Starting from <span className="font-bold"> USD 2000</span> per
            person
          </p>
        </div>
        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/fourteendays" className="opacity-60 font-bold">
            <span>FOURTEEN DAYS</span>
          </a>
        </Breadcrumbs>
        {/* ===========Breadcrumbs=========== */}
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:mt-5 mt-0">
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-14 lg:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "overview" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-14 lg:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "itinerary" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-14 lg:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
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
                src="https://www.google.com/maps/embed?pb=!1m58!1m12!1m3!1d1013883.9024891664!2d80.01334617722836!3d6.952093059716726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x3ae2ee9c6bb2f73b%3A0xa51626e908186f3e!2sNegombo!3m2!1d7.2007968!2d79.8736754!4m5!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!3m2!1d7.954108499999999!2d80.75469799999999!4m5!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!3m2!1d7.2905714999999995!2d80.6337262!4m5!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara%20Eliya!3m2!1d6.9497165999999995!2d80.7891068!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!4m5!1s0x3ae5d3a62ffb9359%3A0x3bb623d70b5a3314!2sYala%20National%20Park!3m2!1d6.463961299999999!2d81.47188469999999!4m5!1s0x3ae13fce3177dc59%3A0xa2d8a78b36dc9c90!2sMirissa!3m2!1d5.948262!2d80.4715866!5e0!3m2!1sen!2slk!4v1715919682433!5m2!1sen!2slk"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="14 Days Trip"
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
                    class="object-cover xl:w-[400px] lg:w-[300px] w-full lg:h-full md:h-[200px] h-[150px] rounded-t-lg lg:rounded-none lg:rounded-s-lg"
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
            <div className="2xl:px-40 xl:px-24 lg:px-20 px-0">
              <div className="mt-10 px-5 lg:px-0">
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
