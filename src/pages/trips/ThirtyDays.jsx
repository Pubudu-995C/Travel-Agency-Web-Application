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
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: `Explore the vibrant tapestry of Colombo's cultural landmarks, beginning with the majestic Colombo Red Mosque, a symbol of Islamic heritage. Ascend the iconic Lotus Tower for panoramic city views before immersing yourself in tranquility at Gangarama Temple. Wander through history at Independence Square and delve into spiritual serenity at Kelaniya Raja Maha Viharaya. Relax on the golden sands of Mount Lavinia Beach, soaking in the tropical bliss. End your day with an overnight stay at a luxurious hotel, nestled either in the bustling cityscape of Colombo or the coastal charm of Negombo, ensuring a rejuvenating experience amidst Sri Lanka's enchanting allure.`,
      accommodation: `As Your Request`,
      activities: `Colombo Red Mosque - Lotus Tower - Gangarama Temple - Independence Square - Kelaniya Raja Maha Viharaya - Mount Lavinia Beach - Overnight Stay in a Hotel at Colombo or Negombo`,
    },
    {
      day: `2 Nights in Anuradhapura`,
      topic: `Colombo to Anuradhapura`,
      img: `./trips/Anuradhapura.jpg`,
      detail: `Experience the ancient splendor of Anuradhapura with a journey through its revered landmarks. Start with the majestic Ruwanweli Maha Seya, emanating spiritual grandeur. Then, marvel at the sacred Jaya Sri Maha Bodhi, a symbol of enlightenment and tranquility. Visit the Thuparama Vihara, resonating with historical significance and architectural grace. Explore the Isurumuni Royal Temple, a testament to Sri Lanka's rich cultural heritage. Don't miss the serene Abhayagiri Viharaya, offering insight into Buddhist traditions. Conclude your day with a comfortable overnight stay in a hotel, immersing yourself in the city's mystical aura and preparing for more adventures in Anuradhapura.`,
      accommodation: `As Your Request`,
      activities: `Ruwanweli Maha Seya - Jaya Sri Maha Bodhi - Thuparama vihara - Isurumuni Royal Temple - Abhayagiri viharaya - Overnight Stay in a Hotel at Anuradhapura`,
    },
    {
      day: `2 Nights in Nilaveli`,
      topic: `Anuradhapura to Nilaveli`,
      img: `./trips/Nilaveli_Beach.jpg`,
      detail: `Experience the enchanting beauty of Sri Lanka's eastern coast with a journey that encompasses the allure of Pigeon Island's marine sanctuary, the pristine shores of Nilaveli Beach, and the spiritual resonance of Thirukoneswaram Kovil. Explore the historic charm of Fort Frederick and the laid-back vibes of Uppuveli. Dive into the azure depths through scuba diving adventures, discovering vibrant coral reefs and exotic marine life. Finally, unwind with an overnight stay in a cozy hotel nestled in the tranquil ambiance of Nilaveli, where the whispers of the ocean lull you into a state of serenity, completing a journey of blissful discovery.`,
      accommodation: `As Your Request`,
      activities: `Pigeon Island - Nilaveli Beach - Thirukoneswaram Kovil - Fort Frederick - Uppuveli - Scuba Diving - Overnight Stay in a Hotel at Nilaveli`,
    },
    {
      day: `2 Nights in Sigiriya`,
      topic: `Nilaveli to Sigiriya`,
      img: `./trips/sigiriya.jpg`,
      detail: `Experience the rich tapestry of Sri Lanka's cultural and natural wonders with a journey that begins at the majestic Sigiriya Rock Fortress, also known as Lion Rock, an ancient marvel perched atop a towering monolith. Delve into the wilderness of Minneriya National Park, where elephant herds roam freely amidst lush landscapes. Trek to Pidurangala Rock for panoramic views of Sigiriya and its surroundings. Continue your wildlife odyssey at Kaudulla National Park, encountering diverse flora and fauna. Immerse yourself in local life with a Sigiriya Village Tour, discovering the traditions and customs of the region. Find tranquility at Kaludiya Pokuna, an ancient forest monastery. Conclude your day with an overnight stay at a hotel in Sigiriya, where comfort meets the allure of Sri Lanka's historical heartland.`,
      accommodation: `As Your Request`,
      activities: `Sigiriya Rock Fortress (Lion Rock) - Minneriya National Park - Pidurangala Rock - Kaudulla National Park - 
      Sigiriya Village Tour - Kaludiya Pokuna - Overnight Stay in a Hotel at Sigiriya`,
    },
    {
      day: `1 Night in Dambulla`,
      topic: `Sigiriya to Dambulla`,
      img: `./trips/Dambulla_Cave_Temple.jpg`,
      detail: `Experience the majestic allure of Dambulla with a visit to the renowned Royal Cave Temple and Golden Temple. Marvel at the ancient rock cave complex, adorned with intricate Buddhist murals and over 150 statues, a testament to Sri Lanka's rich cultural heritage. After a day of exploration, unwind in comfort with an overnight stay at a hotel in Dambulla. Let the echoes of history guide your journey as you immerse yourself in the serenity of this sacred site and indulge in the warm hospitality of your accommodations, making memories to cherish for a lifetime.`,
      accommodation: `As Your Request`,
      activities: `Dambulla Royal Cave Temple and Golden Temple - Overnight Stay in a Hotel at Dambulla`,
    },
    {
      day: `2 Nights in Kandy`,
      topic: `Dambulla to Kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `Embark on a mesmerizing journey through Kandy's cultural tapestry. Begin at the Royal Botanic Gardens, where lush greenery unveils botanical wonders. Pay respects at the solemn Commonwealth War Cemetery, a poignant reminder of history's sacrifices. Seek tranquility in the Udawatta Kele Sanctuary, a haven for nature enthusiasts. Ascend to the majestic Bahirawakanda Temple, offering panoramic views of the city. Experience spiritual reverence at the Temple of Tooth Relic, an icon of Buddhist heritage. Immerse in the rhythmic beats of Kandy's Cultural Dance Show, a vibrant celebration of tradition. Conclude your day with a blissful overnight stay in a luxurious hotel, cradled by Kandy's serene ambiance.`,
      accommodation: `As Your Request`,
      activities: `Royal Botanic Gardens - Commonwealth War Cemetery - Udawatta Kele Sanctuary -  Bahirawakanda Temple - Temple of Tooth Relic - Kandy Cultural Dance Show - Overnight Stay in a Hotel at Kandy`,
    },
    {
      day: `1 Night in Nuwara Eliya`,
      topic: `Kandy to Nuwara Eliya`,
      img: `./trips/nuwara_eliya_post_office.jpg`,
      detail: `Embark on an enchanting journey to Nuwara Eliya, where you'll ascend the majestic Ambuluwawa Tower, immerse yourself in the aromatic bliss of Damro Labookellie Tea Centre, and witness nature's grandeur at the cascading Ramboda Waterfalls. Explore the lush tea plantations and factories, bask in the tranquil beauty of Gregory Lake, and marvel at the architectural splendor of Nuwara Eliya Post Office. Pay reverence at the sacred Seetha Eliya Temple, trek to the breathtaking Bomburu Ella, and soak in panoramic vistas from Lipton's Seat, before retreating to a cozy hotel for an overnight stay in this hill country paradise.`,
      accommodation: `As Your Request`,
      activities: `Ambuluwawa Tower - Ramboda Waterfalls - Damro Labookellie Tea Centre - Gregory Lake - Nuwara Eliya Post Office - Seetha Eliya Temple - Bomburu Ella - Lipton Seat - Overnight Stay in a Hotel at Nuwara Eliya`,
    },
    {
      day: `4 Nights in Ella`,
      topic: `Nuwara Eliya to Ella`,
      img: `./trips/Little_Adam.jpg`,
      detail: `Embark on a picturesque journey by train to Ella, where nature's wonders await. Marvel at the majestic Ravana Falls, cascading gracefully amidst lush greenery. Explore the iconic Nine Arch Bridge, a marvel of architecture nestled in the verdant landscape. Hike up to Little Adam's Peak for breathtaking panoramic views that stretch to the horizon. Don't miss the enchanting Ellawella Waterfalls, where tranquility reigns supreme. After a day of exploration, unwind in comfort with an overnight stay at a cozy hotel in Ella, surrounded by the serene beauty of the Sri Lankan countryside.`,
      accommodation: `As Your Request`,
      activities: `Little adam's peak - Ellawella Waterfalls - Nine Arches Bridge - Ravana Falls - Overnight Stay in a Hotel at Ella`,
    },
    {
      day: `6 Nights in Arugam Bay`,
      topic: `Ella to Arugam Bay`,
      img: `./trips/Arugam_Bay.jpg`,
      detail: `Explore the captivating wonders of Arugam Bay Beach, where golden sands meet azure waters, offering a tranquil escape. Venture to Muhudu Maha Viharaya, an ancient Buddhist temple steeped in history and spirituality. Embark on a serene lagoon safari in Pottuvil, immersing in the pristine natural beauty. Discover the biodiversity hotspot of Kudumbigala Sanctuary, home to diverse flora and fauna. Uncover the mystique of Kudumbigala Monastery Complex, a sacred site nestled in lush greenery. Ascend Sangamankanda Lighthouse for panoramic views of the coastline. Conclude your adventure with an overnight stay at a cozy hotel, relishing the serenity of Arugam Bay.`,
      accommodation: `As Your Request`,
      activities: `Arugam Bay Beach - Muhudu Maha Viharaya - Lagoon Safari ,Pottuvil - Kudumbigala Sanctuary - Kudumbigala Monastery Complex - Sangamankanda Lighthouse - Overnight Stay in a Hotel at Arugam Bay`,
    },
    {
      day: `3 Nights in Mirissa`,
      topic: `Arugam Bay to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Embark on an enchanting journey along the southern coast of Sri Lanka, beginning at the picturesque Coconut Tree Hill, offering panoramic views of Mirissa Bay's azure waters. Delve into the vibrant culture at the local fish market, brimming with the day's fresh catch. Venture into the vast expanse of the ocean for an unforgettable experience of whale and dolphin watching. Then, unwind on the pristine shores of Unawatuna Beach, where golden sands meet the gentle lapping waves. Conclude your day with an idyllic overnight stay in the charming town of Mirissa, where tranquility and beauty converge for an unforgettable coastal retreat.`,
      accommodation: `As Your Request`,
      activities: `Coconut Tree Hill - Mirissa Bay - Fish Market - Whale watching - Dolphin Watching - Unawatuna Beach - Overnight Stay in a Hotel at Mirissa`,
    },
    {
      day: `3 Nights in Galle`,
      topic: `Mirissa to Galle`,
      img: `./trips/Galle_Fort.jpg`,
      detail: `Explore the rich tapestry of Galle, Sri Lanka, where history meets nature in a captivating blend. Wander through the ancient cobblestone streets of Galle Dutch Fort, a UNESCO World Heritage Site, echoing tales of colonial legacy. Ascend the towering Galle Lighthouse for panoramic vistas of the azure ocean. Immerse yourself in conservation efforts at the Sea Turtle Hatchery Centre, marveling at these gentle creatures. Find serenity at the Japanese Peace Pagoda, a symbol of tranquility amidst lush surroundings. Sink your toes into the golden sands of Unawatuna Beach and the secluded oasis of Jungle Beach. Discover biodiversity at Rumassala Sanctuary, a haven for wildlife enthusiasts. Indulge in history at the Old Dutch Hospital and Maritime Museum, weaving narratives of maritime heritage. Conclude your day with an overnight stay in a cozy hotel, completing an unforgettable journey through Galle's wonders.`,
      accommodation: `As Your Request`,
      activities: `Galle Dutch Fort - Lighthouse - Sea Turtle Hatchery Centre - Japanese Peace Pagoda - Unawatuna Beach - Jungle Beach - Rumassala Sanctuary - Old Dutch Hospital - Maritime Museum - Overnight Stay in a Hotel at Galle`,
    },
    {
      day: `Day 30`,
      topic: `Galle to Negombo`,
      img: `./trips/Negombo_Beach.jpg`,
      detail: ``,
      accommodation: `As Your Request`,
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
      <Footer />
    </div>
  );
}
