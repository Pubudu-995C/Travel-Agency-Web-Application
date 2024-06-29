import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import NuwaraEliya from "../../images/wallpapers/Nuwara_Eliya.jpg";
import ContactForm from "../Contact-Form";
import WhatsApp from "../../components/WhatsApp";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { Breadcrumbs } from "@material-tailwind/react";
import Gallery from "../Gallery";
import { useTranslation } from "react-i18next";

export default function FourteenDays() {
  const { t } = useTranslation("fourteendays");
  const [activeTab, setActiveTab] = useState("overview");

  const dateList = [
    {
      day: t("day01.day"),
      topic: t("day01.topic"),
      img: `./trips/Negombo_Beach.jpg`,
      detail: t("day01.detail"),
      accommodation: t("day01.accommodation"),
      activities: t("day01.activities"),
    },
    {
      day: t("day02.day"),
      topic: t("day02.topic"),
      img: `./trips/sigiriya.jpg`,
      detail: t("day02.detail"),
      accommodation: t("day02.accommodation"),
      activities: t("day02.activities"),
    },
    {
      day: t("day03.day"),
      topic: t("day03.topic"),
      img: `./trips/templeTooth.jpg`,
      detail: t("day03.detail"),
      accommodation: t("day03.accommodation"),
      activities: t("day03.activities"),
    },
    {
      day: t("day04.day"),
      topic: t("day04.topic"),
      img: `./trips/Gregory_Lake.jpg`,
      detail: t("day04.detail"),
      accommodation: t("day04.accommodation"),
      activities: t("day04.activities"),
    },
    {
      day: t("day05.day"),
      topic: t("day05.topic"),
      img: `./trips/Little_Adam.jpg`,
      detail: t("day05.detail"),
      accommodation: t("day05.accommodation"),
      activities: t("day05.activities"),
    },
    {
      day: t("day06.day"),
      topic: t("day06.topic"),
      img: `./trips/yala.jpg`,
      detail: t("day06.detail"),
      accommodation: t("day06.accommodation"),
      activities: t("day06.activities"),
    },
    {
      day: t("day07.day"),
      topic: t("day07.topic"),
      img: `./trips/coconut_tree_hill.jpg`,
      detail: t("day07.detail"),
      accommodation: t("day07.accommodation"),
      activities: t("day07.activities"),
    },
    {
      day: t("day08.day"),
      topic: t("day08.topic"),
      img: `./trips/airplane_landing.jpg`,
      detail: t("day08.detail"),
      accommodation: t("day08.accommodation"),
      activities: t("day08.activities"),
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
            {t("package.description")}{" "}
            <span className="lg:text-lg text-sm lg:font-bold text-[#F0FF42]">
              {t("package.nights")}
            </span>
          </p>
          <p className="xl:text-2xl lg:text-lg md:text-base text-sm font-medium text-white md:mt-0 mt-2">
            {t("package.starting_from")}{" "}
            <span className="font-bold"> {t("package.price")} </span>
            {t("package.per_person")}
          </p>
        </div>
        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/fourteendays" className="opacity-60 font-bold">
            <span>{t("breadcrumbs")}</span>
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
            {t("overview")}
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-10 xl:px-14 xl:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "itinerary" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            {t("itinerary")}
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-10 xl:px-14 xl:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "gallery" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            {t("gallery")}
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
                        <span className="font-bold ">
                          {t("accommodation")}:
                        </span>{" "}
                        <span>{date.accommodation}</span>
                      </p>
                      <p class="font-normal text-gray-700 space-x-5 xl:text-base text-sm">
                        <span className="font-bold">{t("activities")}:</span>
                        <span className="italic font-medium">
                          {date.activities}
                        </span>
                      </p>
                    </div>
                    <div className="flex md:justify-end justify-center mt-5">
                      <button className="bg-[#54B435] lg:px-5 lg:py-1 xl:px-8 xl:py-2 md:px-8 md:py-2 px-5 py-1 rounded mx-5 text-base font-bold text-white">
                        {t("see_more")}
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
