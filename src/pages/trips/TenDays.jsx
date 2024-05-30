import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Ella from "../../images/wallpapers/Ella.jpg";
import ContactForm from "../Contact-Form";
import WhatsApp from "../../components/WhatsApp";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { Breadcrumbs } from "@material-tailwind/react";
import Gallery from "../Gallery";

export default function TenDays() {
  const [activeTab, setActiveTab] = useState("overview");

  const dateList = [
    {
      day: `Day 01`,
      topic: `Airport to negombo`,
      img: `./trips/Negombo_Beach.jpg`,
      detail: `When you land, our chauffeur guide, fluent in English, and the airport team will be there to greet you and help you with anything you need. Once you reach your hotel, take the rest of the day to relax and unwind after your long flight. It's your time to enjoy at your own pace.`,
      accommodation: `As Your Request`,
      activities: ``,
    },
    {
      day: `Day 02`,
      topic: `Negombo to sigiriya`,
      img: `./trips/sigiriya.jpg`,
      detail: `Explore the wonders of Sri Lanka with a visit to the Pinnawala Elephant Orphanage, where you can witness the heartwarming care of rescued elephants. Continue your adventure at the iconic Sigiriya Rock Fortress, also known as Lion Rock, an ancient marvel that offers breathtaking views and a glimpse into the island's rich history. After a day of exploration, relax with an overnight stay in a comfortable hotel at Sigiriya, allowing you to unwind and soak in the serene surroundings, ready for more adventures in this beautiful region.`,
      accommodation: `As Your Request`,
      activities: `Pinnawala Elephant Orphanage - Sigiriya Rock Fortress (Lion Rock) - Overnight Stay in a Hotel at Sigiriya`,
    },
    {
      day: `Day 03`,
      topic: `Sigiriya to kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `The itinerary includes a visit to the Dambulla Royal Cave Temple and Golden Temple, renowned for its ancient Buddhist murals and statues. Next, explore a Spice Garden, experiencing the aromatic allure of Sri Lanka's famed spices. In Matale, visit the vibrant Muthumariamman Temple, showcasing rich Hindu traditions. The journey continues to the Temple of the Tooth Relic in Kandy, a sacred site housing a revered tooth of Buddha. Enjoy the colorful Kandy Cultural Dance Show, a spectacle of traditional dance and music. Conclude with an overnight stay at a comfortable hotel in Kandy, immersed in the city's cultural charm.`,
      accommodation: `As Your Request`,
      activities: `Dambulla Royal Cave Temple and Golden Temple - Spice Garden - Matale Muthumariamman Temple - Temple of Tooth Relic - Kandy Cultural Dance Show - Overnight Stay in a Hotel at Kandy`,
    },
    {
      day: `Day 04`,
      topic: `Kandy to Nuwara Eliya `,
      img: `./trips/Gregory_Lake.jpg`,
      detail: `Begin your journey with the breathtaking Ramboda Falls, then visit the Damro Labookellie Tea Centre to savor fresh Ceylon tea. Enjoy a serene afternoon by the picturesque Gregory Lake, perfect for a relaxing boat ride or a peaceful stroll. Marvel at the charming colonial architecture of the Nuwara Eliya Post Office, a historic landmark. End your day with an overnight stay in a comfortable hotel in Nuwara Eliya, where the cool mountain air and scenic views provide a perfect retreat.`,
      accommodation: `As Your Request`,
      activities: `Ramboda Falls - Damro Labookellie Tea Centre - Gregory Lake - Nuwara Eliya Post Office - Overnight Stay in a Hotel at Nuwara Eliya`,
    },
    {
      day: `Day 05`,
      topic: `Nuwara Eliya to Ella`,
      img: `./trips/Little_Adam.jpg`,
      detail: `In the enchanting town of Ella, begin your adventure with a trek up Little Adam's Peak, offering breathtaking panoramic views of lush green landscapes. Next, marvel at the architectural wonder of the Nine Arches Bridge, a relic from the colonial era surrounded by dense jungle and tea plantations. Continue to Ravana Falls, where cascading waters create a serene and picturesque setting, perfect for relaxation and photography. Conclude your day with an overnight stay at a cozy hotel in Ella, allowing you to immerse yourself in the tranquil ambiance and rejuvenate for the next day's explorations.`,
      accommodation: `As Your Request`,
      activities: `Little adam's peak - Nine Arches Bridge - Ravana Falls - Overnight Stay in a Hotel at Ella`,
    },
    {
      day: `Day 06`,
      topic: `Ella to Yala`,
      img: `./trips/yala.jpg`,
      detail: `Explore the natural beauty and cultural heritage of Sri Lanka with a visit to Yala National Park, renowned for its diverse wildlife, including leopards, elephants, and a variety of bird species. After an exhilarating safari, immerse yourself in history at the Buduruwagala Temple, where ancient rock carvings of Buddha and his disciples stand as a testament to the island’s rich spiritual past. Conclude your day with an overnight stay at a comfortable hotel in Yala, offering a perfect blend of relaxation and adventure amidst the serene landscape, ensuring a memorable and rejuvenating experience.`,
      accommodation: `As Your Request`,
      activities: `Yala National Park - Buduruwagala Temple - Overnight Stay in a Hotel at Yala`,
    },
    {
      day: `Day 07`,
      topic: `Yala to Tangalle`,
      img: `./trips/Hiriketiya-Beach.jpg`,
      detail: `Tangalle, a coastal paradise in Sri Lanka, boasts several stunning beaches. Tangalle Beach offers serene shores perfect for relaxation. Nearby, Hiriketiya Beach, known for its horseshoe bay, is a haven for surfers and swimmers. Rekawa Beach, a sanctuary for marine life, is renowned for its sea turtle nesting sites. Silent Beach, true to its name, provides a tranquil escape from the crowds. After a day of exploring these picturesque beaches, enjoy an overnight stay in one of Tangalle’s charming hotels, ensuring a restful end to a day filled with the natural beauty and tranquility of Sri Lanka’s southern coastline.`,
      accommodation: `As Your Request`,
      activities: `Tangalle Beach - Hiriketiya Beach - Rekawa Beach - Silent Beach - Overnight Stay in a Hotel at Tangalle`,
    },
    {
      day: `Day 08`,
      topic: `Tangalle to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Coconut Tree Hill in Mirissa offers stunning panoramic views of the coastline, making it a perfect spot for photography and relaxation. Mirissa Bay's tranquil waters are ideal for swimming and sunbathing. Nearby, the vibrant fish market showcases the daily catch, providing an authentic glimpse into the local fishing culture. For adventure seekers, whale and dolphin watching tours are a must, offering a chance to see these magnificent creatures up close. After a day of exploration, unwind with an overnight stay at a comfortable hotel in Mirissa, ensuring a restful end to a day filled with unforgettable experiences.`,
      accommodation: `As Your Request`,
      activities: `Coconut Tree Hill - Mirissa Bay - Fish Market - Whale watching - Dolphin Watching - Overnight Stay in a Hotel at Mirissa`,
    },
    {
      day: `Day 09`,
      topic: `Mirissa to Bentota`,
      img: `./trips/Galle_Fort.jpg`,
      detail: `Embark on a captivating journey through Sri Lanka's wonders. Explore the ancient charm of Galle Dutch Fort, where history whispers through cobblestone streets. Venture to Bentota Turtle Hatchery, a sanctuary for these gentle creatures, fostering conservation efforts. Glide along the enchanting Madu River, a haven of biodiversity and serene landscapes. Discover the artistic haven of Brief Garden, a lush oasis blending nature and creativity. Relax on the golden shores of Bentota Beach, where the azure waters beckon. Conclude your day with an overnight stay in a tranquil hotel, immersed in the coastal serenity of Bentota, as memories of the day's adventures dance through your dreams.`,
      accommodation: `As Your Request`,
      activities: `Galle Dutch Fort - Bentota Turtle Hatchery - Madu River Safari - Brief Garden - Bentota Beach - Overnight Stay in a Hotel at Bentota`,
    },
    {
      day: `Day 10`,
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
            src={Ella}
            className="object-cover w-full h-full"
            alt="Wallpaper"
          />
        </div>
        <div className="p-3 w-full md:flex justify-between bg-[#54B435] 2xl:px-40 xl:px-24 lg:px-20 px-5">
          <p className="xl:text-2xl lg:text-xl md:text-base text-sm font-semibold text-white">
            Sri Lanka Tour 10 Days Package{" "}
            <span className="lg:text-lg text-sm lg:font-bold text-[#F0FF42]">
              (10 Days 09 Nights)
            </span>
          </p>
          <p className="xl:text-2xl lg:text-lg md:text-base text-sm font-medium text-white md:mt-0 mt-2">
            Starting from <span className="font-bold"> USD 1600</span> per
            person
          </p>
        </div>
        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/tendays" className="opacity-60 font-bold">
            <span>TEN DAYS</span>
          </a>
        </Breadcrumbs>
        {/* ===========Breadcrumbs=========== */}
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:mt-5 mt-0">
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-10 xl:px-14 xl:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "overview" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-10 xl:px-14 xl:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "itinerary" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-10 xl:px-14 xl:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
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
                src="https://www.google.com/maps/embed?pb=!1m70!1m12!1m3!1d1013886.6552091112!2d80.01334617669652!3d6.950817195451904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m55!3e0!4m5!1s0x3ae2ee9c6bb2f73b%3A0xa51626e908186f3e!2sNegombo!3m2!1d7.2007968!2d79.8736754!4m5!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!3m2!1d7.954108499999999!2d80.75469799999999!4m5!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!3m2!1d7.2905714999999995!2d80.6337262!4m5!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara%20Eliya!3m2!1d6.9497165999999995!2d80.7891068!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!4m5!1s0x3ae5d3a62ffb9359%3A0x3bb623d70b5a3314!2sYala%20National%20Park!3m2!1d6.463961299999999!2d81.47188469999999!4m5!1s0x3ae14afd19b00141%3A0x4045d305f7526bba!2sTangalle!3m2!1d6.0243383!2d80.79407259999999!4m5!1s0x3ae13fce3177dc59%3A0xa2d8a78b36dc9c90!2sMirissa!3m2!1d5.948262!2d80.4715866!4m5!1s0x3ae22e900168ca21%3A0x96c438f00a68c060!2sBentota!3m2!1d6.4189175!2d80.005979!5e0!3m2!1sen!2slk!4v1715920422430!5m2!1sen!2slk"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="10 Days Trip"
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
                <div class="flex flex-col items-center bg-slate-50 border border-gray-300 rounded-lg shadow lg:flex-row hover:bg-yellow-50 transition-colors duration-300 w-full">
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
                      <p class="mb-3 xl:text-base text-sm font-medium text-gray-700 italic">
                        {date.topic}
                      </p>
                    </div>
                    <p class="font-normal text-gray-700 xl:text-base text-sm text-justify">
                      {date.detail}
                    </p>
                    <div className="flex flex-col mt-5 lg:text-base text-sm">
                      <p class="font-normal text-gray-700 space-x-5 xl:text-base text-sm">
                        <span className="font-bold ">Accommodation: </span>{" "}
                        <span>{date.accommodation}</span>
                      </p>
                      <p class="font-normal text-gray-700 space-x-5 xl:text-base text-sm">
                        {" "}
                        <span className="font-bold">Activities:</span>
                        <span className="italic font-medium">
                          {date.activities}
                        </span>
                      </p>
                    </div>
                    <div className="flex md:justify-end justify-center mt-5">
                      <button className="bg-[#54B435] lg:px-5 lg:py-1 xl:px-8 xl:py-2 md:px-8 md:py-2 px-5 py-1 rounded mx-5 text-base font-bold text-white">
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
