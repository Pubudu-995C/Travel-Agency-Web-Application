import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Ella from "../../images/wallpapers/Ella.jpg";
import ContactForm from "../Contact-Form";

export default function NineDays() {
  const [activeTab, setActiveTab] = useState("trips");

  const dateList = [
    {
      day: `Day 01`,
      topic: `Airport to negombo`,
      img: `./trips/airplane_landing.jpg`,
      detail: `When you land, our chauffeur guide, fluent in English, and the airport team will be there to greet you and help you with anything you need. Once you reach your hotel, take the rest of the day to relax and unwind after your long flight. It's your time to enjoy at your own pace.`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 02`,
      topic: `Negombo to sigiriya`,
      img: `./trips/sigiriya.jpg`,
      detail: `Visit the Pinnawala Elephant Orphanage to witness gentle giants in their sanctuary, then journey to Sigiriya Rock Fortress, a majestic ancient marvel rising dramatically, offering breathtaking views and a glimpse into Sri Lanka's rich history.`,
      accommodation: `Please Request Us`,
      activities: `Pinnawala Elephant Orphanage - Sigiriya Rock Fortress (Lion Rock)`,
    },
    {
      day: `Day 03`,
      topic: `Sigiriya to kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `Nestled in the heart of Sri Lanka, the Dambulla Royal Cave Temple and Golden Temple stand as timeless marvels, their ancient sanctuaries echoing with spiritual resonance. Nearby, the Spice Garden captivates with its aromatic allure, a sensory journey through the rich tapestry of Sri Lankan flavors. Further afield, the Matale Muthumariamman Temple beckons with its ornate architecture and devout ambiance. In Kandy, the revered Temple of the Tooth Relic holds the essence of Buddhist faith, a sacred repository of veneration. And amidst the cultural vibrancy, the Kandy Cultural Dance Show unfolds, a mesmerizing spectacle of rhythm and tradition, showcasing the island's artistic heritage in captivating splendor.`,
      accommodation: `Please Request Us`,
      activities: `Dambulla Royal Cave Temple and Golden Temple - Spice Garden - Matale Muthumariamman Temple - Temple of Tooth Relic - Kandy Cultural Dance Show`,
    },
    {
      day: `Day 04`,
      topic: `Kandy to Nuwara Eliya `,
      img: `./trips/Gregory_Lake.jpg`,
      detail: `Nestled in the lush landscapes of Sri Lanka lies a tapestry of wonders waiting to be explored. Ramboda Falls cascades gracefully, its waters a symphony of nature's beauty. The Damro Labookellie Tea Centre offers a sensory journey through the aroma and taste of exquisite Ceylon tea. Reflective tranquility envelops Gregory Lake, inviting serene contemplation amidst its serene shores. The quaint charm of Nuwara Eliya Post Office echoes the town's colonial heritage, a picturesque reminder of days gone by. Nearby, Nanu Oya Railway Station stands as a gateway to adventure, its vintage allure beckoning travelers to embark on scenic rail journeys through breathtaking vistas.`,
      accommodation: `Please Request Us`,
      activities: `Ramboda Falls - Damro Labookellie Tea Centre - Gregory Lake - Nuwara Eliya Post Office - Nanu oya Railway Station`,
    },
    {
      day: `Day 05`,
      topic: `Nuwara Eliya to Ella`,
      img: `./trips/Little_Adam.jpg`,
      detail: `Nestled in the lush landscape of Sri Lanka lies the enchanting trio of wonders: Little Adam's Peak, a majestic summit offering panoramic vistas; the iconic Nine Arches Bridge, a marvel of colonial engineering spanning verdant valleys; and the cascading beauty of Ravana Falls, its crystalline waters descending gracefully amidst the emerald greenery, captivating all who behold their splendor.`,
      accommodation: `Please Request Us`,
      activities: `Little adam's peak - Nine Arches Bridge - Ravana Falls`,
    },
    {
      day: `Day 06`,
      topic: `Ella to Yala`,
      img: `./trips/yala.jpg`,
      detail: `Yala National Park, a biodiversity hotspot in Sri Lanka, boasts diverse ecosystems and abundant wildlife. Buduruwagala Temple nearby showcases remarkable ancient Buddhist sculptures, reflecting the rich cultural heritage of the region amidst stunning natural surroundings.`,
      accommodation: `Please Request Us`,
      activities: `Yala National Park - Buduruwagala Temple`,
    },
    {
      day: `Day 07`,
      topic: `Yala to Tangalle`,
      img: `./trips/Hiriketiya-Beach.jpg`,
      detail: `Discover a coastal paradise along Sri Lanka's southern shores, where azure waters meet golden sands. Tangalle Beach entices with its serene beauty, offering a tranquil escape for sun-seekers. Nearby, Hiriketiya Beach beckons with its crescent-shaped bay, perfect for surfing or simply soaking up the sun. Further along, Rekawa Beach invites you to witness mesmerizing turtle hatchings, a remarkable natural spectacle. Finally, find solace at Silent Beach, a secluded haven for those seeking peace amidst breathtaking scenery.`,
      accommodation: `Please Request Us`,
      activities: `Tangalle Beach - Hiriketiya Beach - Rekawa Beach - Silent Beach`,
    },
    {
      day: `Day 08`,
      topic: `Tangalle to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Perched atop the picturesque Coconut Tree Hill overlooking Mirissa Bay, visitors can soak in breathtaking vistas of the azure waters below. Nearby, the vibrant Fish Market bustles with the day's fresh catch, offering a glimpse into the local fishing culture. Adventure seekers flock to Mirissa for exhilarating experiences like whale watching and dolphin spotting, where the vast ocean becomes a playground for marine marvels, leaving unforgettable memories etched in the minds of all who venture there.`,
      accommodation: `Please Request Us`,
      activities: `Coconut Tree Hill - Mirissa Bay - Fish Market - Whale watching - Dolphin Watching`,
    },
    {
      day: `Day 09`,
      topic: `Mirissa to Bentota`,
      img: `./trips/Galle_Fort.jpg`,
      detail: `Explore the vibrant tapestry of Sri Lanka's southwest coast with its captivating attractions. Begin your journey at the historic Galle Dutch Fort, a UNESCO World Heritage Site showcasing colonial charm. Venture to the Bentota Turtle Hatchery, where conservation meets wonder, as you witness the nurturing of these magnificent creatures. Glide through the enchanting Madu River Safari, immersed in the lush mangroves and diverse wildlife. Find tranquility amidst the botanical marvels of Brief Garden, a sanctuary of artistry and nature. Finally, unwind at Bentota Beach, where golden sands meet azure waters, offering serenity and adventure in equal measure.`,
      accommodation: `Please Request Us`,
      activities: `Galle Dutch Fort - Bentota Turtle Hatchery - Madu River Safari - Brief Garden - Bentota Beach`,
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
            src={Ella}
            className="object-cover w-full h-full"
            alt="Wallpaper"
          />
        </div>
        <div className="p-3 w-full md:flex justify-between bg-[#54B435] 2xl:px-40 xl:px-24 lg:px-20 px-5">
          <p className="xl:text-2xl lg:text-xl md:text-base text-sm font-semibold text-white">
            Sri Lanka Tour 09 Days Package{" "}
            <span className="lg:text-lg text-sm lg:font-bold text-[#F0FF42]">
              (10 Days 09 Nights)
            </span>
          </p>
          <p className="xl:text-2xl lg:text-lg md:text-base text-sm font-medium text-white md:mt-0 mt-2">
            Starting from <span className="font-bold"> USD 1600</span> per
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
      <Footer />
    </div>
  );
}
