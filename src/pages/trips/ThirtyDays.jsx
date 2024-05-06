import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import NilaveliBeach from "../../images/wallpapers/Nilaveli_Beach.jpg";
import ContactForm from "../Contact-Form";

export default function ThirtyDays() {
  const [activeTab, setActiveTab] = useState("trips");

  const dateList = [
    {
      day: `2 Nights in Colombo`,
      topic: `Airport to Colombo or Negombo`,
      img: `./trips/Negombo_Beach.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `2 Nights in Anuradhapura`,
      topic: `Colombo to Anuradhapura`,
      img: `./trips/sigiriya.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `2 Nights in Nilaveli`,
      topic: `Anuradhapura to Nilaveli`,
      img: `./trips/templeTooth.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `2 Nights in Sigiriya`,
      topic: `Nilaveli to Sigiriya`,
      img: `./trips/Gregory_Lake.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `1 Night in Dambulla`,
      topic: `Sigiriya to Dambulla`,
      img: `./trips/Little_Adam.jpg`,
      detail: ``,
      activities: ``,
    },
    {
      day: `2 Nights in Kandy`,
      topic: `Dambulla to Kandy`,
      img: `./trips/yala.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `1 Night in Nuwara Eliya`,
      topic: `Kandy to Nuwara Eliya`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `4 Nights in Ella`,
      topic: `Nuwara Eliya to Ella`,
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `6 Nights in Arugam Bay`,
      topic: `Ella to Arugam Bay`,
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `3 Nights in Mirissa`,
      topic: `Arugam Bay to Mirissa`,
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `3 Nights in Galle`,
      topic: `Mirissa to Galle`,
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: ``,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 30`,
      topic: `Galle to Negombo`,
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: ``,
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
            src={NilaveliBeach}
            className="object-cover w-full h-full"
            alt="Wallpaper"
          />
        </div>
        <div className="p-3 w-full md:flex justify-between bg-[#54B435] 2xl:px-40 xl:px-24 lg:px-20 px-5">
          <p className="xl:text-2xl lg:text-xl md:text-base text-sm font-semibold text-white">
            Sri Lanka Tour 30 Days Package{" "}
            <span className="lg:text-lg text-sm lg:font-bold text-[#F0FF42]">
              (30 Days 29 Nights)
            </span>
          </p>
          <p className="xl:text-2xl lg:text-lg md:text-base text-sm font-medium text-white md:mt-0 mt-2">
            Starting from <span className="font-bold"> USD 4000</span> per
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
          <div>
            <div className="grid grid-cols-1 gap-y-10 my-10 2xl:px-40 xl:px-24 lg:px-20 px-5">
              {dateList.map((date, index) => (
                <div class="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow md:flex-row hover:bg-yellow-50 transition-colors duration-300 w-full">
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
                      class="font-normal text-gray-700 lg:text-base text-sm text-justify"
                      dangerouslySetInnerHTML={{ __html: date.detail }}
                    ></p>

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
    </div>
  );
}
