import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import NuwaraEliya from "../../images/wallpapers/Nuwara_Eliya.jpg";
import ContactForm from "../Contact-Form";

export default function FourteenDays() {
  const [activeTab, setActiveTab] = useState("trips");

  const dateList = [
    {
      day: `Day 01`,
      topic: `Airport to Negombo`,
      img: `./trips/Negombo_Beach.jpg`,
      detail: `Embark on an unforgettable journey as you explore Negombo's treasures. Witness the serene beauty of Negombo Lagoon, where tranquility meets nature's splendor. Dive into the vibrant atmosphere of the Fish Market, where the local culture comes alive. After a day of discovery, unwind in comfort with an overnight stay at a charming hotel, immersing yourself in Negombo's allure.`,
      accommodation: `As Your Request`,
      activities: `Pickup at the Airport - Visit Negombo Lagoon - Visit Fish Market - Overnight Stay in a Hotel at Negombo`,
    },
    {
      day: `Day 02 and 03`,
      topic: `Negombo to Sigiriya`,
      img: `./trips/sigiriya.jpg`,
      detail: `Embark on an unforgettable journey through Sri Lanka's cultural marvels. Begin with the heartwarming experience of Pinnawala Elephant Orphanage, witnessing majestic creatures in their natural habitat. Then, venture towards Sigiriya, where history and nature converge. Ascend the iconic Sigiriya Rock Fortress, marveling at its ancient splendor and panoramic vistas. Nearby, explore Pidurangala Rock, offering a unique perspective of Sigiriya. Immerse yourself in Sigiriya Village, discovering local customs and traditions. Continue the expedition with a captivating tour of Polonnaruwa City, delving into its rich heritage. Conclude the day's adventures with a peaceful overnight stay in a cozy hotel nestled in the enchanting surroundings of Sigiriya.`,
      accommodation: `As Your Request`,
      activities: `Pinnawala Elephant Orphanage - Proceed to Sigiriya - Sigiriya Rock Fortress (Lion Rock) - Visit Pidurangala Rock - Sigiriya Village Tour - Polonnaruwa City Tour - Overnight Stay in a Hotel at Sigiriya`,
    },
    {
      day: `Day 04 and 05`,
      topic: `Sigiriya to Kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `Nestled in the heart of Sri Lanka, the Dambulla Royal Cave Temple and Golden Temple stand as timeless marvels, their ancient sanctuaries echoing with spiritual resonance. Nearby, the Spice Garden captivates with its aromatic allure, a sensory journey through the rich tapestry of Sri Lankan flavors. Further afield, the Matale Muthumariamman Temple beckons with its ornate architecture and devout ambiance. In Kandy, the revered Temple of the Tooth Relic holds the essence of Buddhist faith, a sacred repository of veneration. And amidst the cultural vibrancy, the Kandy Cultural Dance Show unfolds, a mesmerizing spectacle of rhythm and tradition, showcasing the island's artistic heritage in captivating splendor.`,
      accommodation: `As Your Request`,
      activities: `Dambulla Royal Cave Temple and Golden Temple - Spice Garden - Matale Muthumariamman Temple - Temple of Tooth Relic - Kandy Cultural Dance Show - Overnight Stay in a Hotel at Kandy`,
    },
    {
      day: `Day 06 and 07`,
      topic: `Kandy to Nuwara Eliya `,
      img: `./trips/Gregory_Lake.jpg`,
      detail: `Embark on an enchanting journey to Nuwara Eliya, where you'll ascend the majestic Ambuluwawa Tower, immerse yourself in the aromatic bliss of Damro Labookellie Tea Centre, and witness nature's grandeur at the cascading Ramboda Waterfalls. Explore the lush tea plantations and factories, bask in the tranquil beauty of Gregory Lake, and marvel at the architectural splendor of Nuwara Eliya Post Office. Pay reverence at the sacred Seetha Eliya Temple, trek to the breathtaking Bomburu Ella, and soak in panoramic vistas from Lipton's Seat, before retreating to a cozy hotel for an overnight stay in this hill country paradise.`,
      accommodation: `As Your Request`,
      activities: `Proceed to Nuwara Eliya - Ambuluwawa Tower - Ramboda Waterfalls - Damro Labookellie Tea Centre - Gregory Lake - Nuwara Eliya Post Office - Seetha Eliya Temple - Bomburu Ella - Lipton Seat - Overnight Stay in a Hotel at Nuwara Eliya`,
    },
    {
      day: `Day 08 and 09`,
      topic: `Nuwara Eliya to Ella`,
      img: `./trips/Little_Adam.jpg`,
      detail: `Embark on a picturesque journey by train to Ella, where nature's wonders await. Marvel at the majestic Ravana Falls, cascading gracefully amidst lush greenery. Explore the iconic Nine Arch Bridge, a marvel of architecture nestled in the verdant landscape. Hike up to Little Adam's Peak for breathtaking panoramic views that stretch to the horizon. Don't miss the enchanting Ellawella Waterfalls, where tranquility reigns supreme. After a day of exploration, unwind in comfort with an overnight stay at a cozy hotel in Ella, surrounded by the serene beauty of the Sri Lankan countryside.`,
      accommodation: `As Your Request`,
      activities: `Little adam's peak - Ellawella Waterfalls - Nine Arches Bridge - Ravana Falls - Overnight Stay in a Hotel at Ella`,
    },
    {
      day: `Day 10 and 11`,
      topic: `Ella to Yala`,
      img: `./trips/yala.jpg`,
      detail: `Embark on an exhilarating journey through Sri Lanka's scenic wonders with a visit to the awe-inspiring Diyaluma Waterfalls, where cascading waters create a mesmerizing spectacle. Explore the ancient marvels of Buduruwagala Temple, steeped in history and spiritual significance. Continue your adventure with a thrilling Yala or Udawalawe Evening Jeep Safari, immersing yourself in the untamed beauty of nature as you encounter diverse wildlife in their natural habitat. Conclude your day with a serene overnight stay at a hotel nestled amidst the wilderness of Yala or Udawalawe, offering comfort and tranquility amidst the captivating surroundings.`,
      accommodation: `As Your Request`,
      activities: `Diyaluma Waterfalls - Proceed to Yala / Udawalawe Jeep Safari - Buduruwagala Temple - Overnight Stay in a Hotel at Yala/ Udawalawe`,
    },
    {
      day: `Day 12 and 13`,
      topic: `Yala to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Embark on an enchanting journey along the southern coast of Sri Lanka, beginning at the picturesque Coconut Tree Hill, offering panoramic views of Mirissa Bay's azure waters. Delve into the vibrant culture at the local fish market, brimming with the day's fresh catch. Venture into the vast expanse of the ocean for an unforgettable experience of whale and dolphin watching. Then, unwind on the pristine shores of Unawatuna Beach, where golden sands meet the gentle lapping waves. Conclude your day with an idyllic overnight stay in the charming town of Mirissa, where tranquility and beauty converge for an unforgettable coastal retreat.`,
      accommodation: `As Your Request`,
      activities: `Coconut Tree Hill - Mirissa Bay - Fish Market - Whale watching - Dolphin Watching - Unawatuna Beach - Overnight Stay in a Hotel at Mirissa`,
    },
    {
      day: `Day 14`,
      topic: `Mirissa to Airport`,
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: `Embark on a captivating journey through Colombo's cultural tapestry. Start at the Colombo Red Mosque, a stunning architectural marvel echoing centuries of Islamic heritage. Then, ascend the Lotus Tower, an emblem of modernity offering panoramic views of the city's skyline. Immerse yourself in spiritual tranquility at Gangarama Temple, adorned with intricate carvings and serene ponds. For a serene escape, unwind at Mount Lavinia Beach, where golden sands meet azure waters. Finally, bid farewell to this enchanting city, cherishing memories as you depart from the airport, carrying with you the essence of Colombo's rich diversity and timeless allure.`,
      accommodation: `As Your Request`,
      activities: `Colombo Red Mosque - Lotus Tower - Gangarama Temple - Mount Lavinia Beach - Leave at the Airport`,
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
