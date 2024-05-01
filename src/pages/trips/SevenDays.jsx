import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Sigiriya from "../../images/wallpapers/sigiriya.jpg";
import ContactForm from "../Contact-Form";

export default function SevenDays() {
  const [activeTab, setActiveTab] = useState("trips");

  const dateList = [
    {
      day: `Day 01`,
      topic: `Negombo to Sigiriya`,
      img: `./trips/pinnawala.jpg`,
      detail: `Pinnawala Elephant Orphanage`,
      accommodation: `Arrival and Booking into a Hotel in Negombo`,
      activities: `Milk Feeding`,
    },
    {
      day: `Day 02`,
      topic: `Sigiriya to Kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `Sigiriya Rock Fortress (Lion Rock) <br/> Dambulla Royal Cave Temple and Golden Temple <br/> Spice Garden <br/> Matale Muthumariamman Temple <br/> Temple of Tooth Relic <br/> Kandy Cultural Dance Show`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 03`,
      topic: `Kandy to Ella`,
      img: `./trips/damro.jpg`,
      detail: `Ramboda Falls <br/> Damro Labookellie Tea Centre<br/> Gregory Lake <br/> Nuwara Eliya Post Office`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 04`,
      topic: `Ella to Yala`,
      img: `./trips/nineArch.jpg`,
      detail: `Little adam's peak <br/> Nine Arches Bridge <br/> Ravana Falls <br/> Yala Safari`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 05`,
      topic: `Yala to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Coconut Tree Hill <br/> Mirissa Bay <br/> Fish Market <br/>Whale watching <br/> Dolphin Watching <br/> `,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 06`,
      topic: `Mirissa to Bentota`,
      img: `./trips/Galle_Fort.jpg`,
      detail: `Galle Fort <br/> Turtle Farm & Hatchery <br/> Madu River`,
      accommodation: `Please Request Us`,
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
            Starting from <span className="font-bold"> USD 1000</span> per
            person
          </p>
        </div>

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
          <div className="grid grid-cols-1 gap-y-10 my-10 2xl:px-40 xl:px-24 lg:px-20 px-5">
            {dateList.map((date, index) => (
              <div class="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow md:flex-row hover:bg-gray-100 w-full">
                <img
                  class="object-cover xl:w-[400px] lg:w-[300px] md:w-[200px] w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg"
                  src={date.img}
                  alt=""
                />
                <div class="flex flex-col justify-center p-4 leading-normal w-full h-full">
                  <div className="md:flex items-baseline gap-x-20">
                    <p class="mb-2 lg:text-2xl text-lg font-bold tracking-tight text-gray-900">
                      {date.day}
                    </p>
                    <p class="mb-3 lg:text-base text-sm font-medium text-gray-700 italic">
                      {date.topic}
                    </p>
                  </div>
                  <p
                    class="font-normal text-gray-700 lg:text-base text-sm"
                    dangerouslySetInnerHTML={{ __html: date.detail }}
                  ></p>

                  <div className="flex flex-col mt-5 lg:text-base text-sm">
                    <p class="font-normal text-gray-700">
                      <span className="font-bold">Accommodation: </span>{" "}
                      {date.accommodation}
                    </p>
                    <p class="font-normal text-gray-700">
                      {" "}
                      <span className="font-bold">Activities:</span>{" "}
                      {date.activities}
                    </p>
                  </div>
                  <div className="flex md:justify-end justify-center md:mt-0 mt-5">
                    <button className="bg-[#54B435] md:px-8 md:py-2 px-5 py-1 rounded mx-5 text-base font-bold text-white">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <ContactForm />
          </div>
        )}
        {activeTab === "gallery" && (
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
            <div className="2xl:px-40 xl:px-24 lg:px-20 px-5 py-5">
              <ContactForm />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
