import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Sigiriya from "../../images/wallpapers/sigiriya.jpg";
import ContactForm from "../Contact-Form";
import WhatsApp from "../../components/WhatsApp";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { Breadcrumbs } from "@material-tailwind/react";

export default function SevenDays() {
  const [activeTab, setActiveTab] = useState("trips");

  const dateList = [
    {
      day: `Day 01`,
      topic: `Negombo to Sigiriya`,
      img: `./trips/pinnawala.jpg`,
      detail: ``,
      accommodation: `As Your Request`,
      activities: `Pinnawala Elephant Orphanage`,
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

  const galleryImages = [
    {
      image: `./trips/coconut_tree_hill.jpg`,
      topic: `Coconut Tree Hill`,
      town: `Mirissa`,
    },
    {
      image: `./trips/Galle_Fort.jpg`,
      topic: `Galle Fort`,
      town: `Galle`,
    },
    {
      image: `./trips/nineArch.jpg`,
      topic: `Nine Arches Bridge`,
      town: `Ella`,
    },
    {
      image: `./trips/pinnawala.jpg`,
      topic: `Pinnawala Elephant Orphanage`,
      town: `Rambukkana`,
    },
    {
      image: `./trips/damro.jpg`,
      topic: `Damro Labookellie Tea Centre and Tea Garden`,
      town: `Nuwara Eliya`,
    },
    {
      image: `./trips/templeTooth.jpg`,
      topic: `Temple of the Tooth Relic`,
      town: `Kandy`,
    },
    {
      image: `./trips/Dambulla_Cave_Temple.jpg`,
      topic: `Dambulla Royal Cave Temple`,
      town: `Dambulla`,
    },
    {
      image: `./trips/Kandy_Cultural_Dance.jpg`,
      topic: `Cultural Dance Show`,
      town: `Kandy`,
    },
    {
      image: `./trips/nuwara_eliya_post_office.jpg`,
      topic: `Post Office`,
      town: `Nuwara Eliya`,
    },
    {
      image: `./trips/yala.jpg`,
      topic: `Yala National Park`,
      town: `Yala`,
    },
    {
      image: `./trips/Madu-River.jpg`,
      topic: `Madu River`,
      town: `Galle`,
    },
    {
      image: `./trips/whale-watching.jpg`,
      topic: `Whale watching`,
      town: `Mirissa`,
    },
    {
      image: `./trips/mirissa-bay.jpg`,
      topic: `Mirissa Bay`,
      town: `Mirissa`,
    },
    {
      image: `./trips/Gregory_Lake.jpg`,
      topic: `Gregory Lake`,
      town: `Nuwara Eliya`,
    },
    {
      image: `./trips/Little_Adam.jpg`,
      topic: `Little Adam's Peak`,
      town: `Ella`,
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
        <div className="flex justify-center mt-5">
          <button
            className={`mx-2 md:px-14 md:py-2 py-1 px-8  border-2  ${
              activeTab === "trips" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("trips")}
          >
            Trips
          </button>
          <button
            className={`mx-2 md:px-14 md:py-2 py-1 px-8  border-2  ${
              activeTab === "gallery" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>
        {activeTab === "trips" && (
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
            <div class="px-5">
              <div class="flex items-center justify-center min-h-screen py-12">
                <div class="">
                  <div class="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6">
                    {galleryImages.map((i, index) => (
                      <figure class="col-span-2 relative group overflow-hidden">
                        <img
                          key={index}
                          src={i.image}
                          alt=""
                          class="w-full lg:h-[300px] h-[200px] object-cover group-hover:scale-105 group transition-all duration-200"
                        />
                        <figcaption class="flex w-full p-3 absolute -bottom-20 left-0 bg-slate-900/60 text-white justify-between items-center invisible group-hover:bottom-0 group-hover:visible transition-all duration-200">
                          <div class="flex flex-col gap-y-2">
                            <p class="text-lg font-semibold">{i.topic}</p>
                            <p class="flex justify-between text-sm">
                              <span>{i.town}</span>
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:px-40 xl:px-24 lg:px-20 py-5">
              <ContactForm />
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
