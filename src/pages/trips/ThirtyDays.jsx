import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import NilaveliBeach from "../../images/wallpapers/Nilaveli_Beach.jpg";
import ContactForm from "../Contact-Form";
import WhatsApp from "../../components/WhatsApp";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { Breadcrumbs } from "@material-tailwind/react";
import Gallery from "../Gallery";

export default function ThirtyDays() {
  const [activeTab, setActiveTab] = useState("overview");

  const dateList = [
    {
      day: `Day 1 & 2 in Negombo`,
      topic: `Airport to Negombo`,
      img: `./trips/Negombo_Beach.jpg`,
      detail: `Nestled along Sri Lanka's western coast, Negombo captivates with its serene Negombo Lagoon, where tranquility meets the gentle lull of waters. Just steps away lies Negombo Beach, where golden sands stretch lazily under the tropical sun. Nearby, the historic Negombo Dutch Fort stands as a testament to colonial legacy, echoing tales of a bygone era. Amidst this cultural tapestry, St. Mary's Church adds a spiritual allure with its elegant architecture. As dusk descends, retreat to a cozy hotel, where comfort awaits for an overnight stay, promising relaxation and rejuvenation amidst the charm of Negombo's coastal allure.`,
      accommodation: `As Your Request`,
      activities: `Negombo Lagoon - Negombo Beach - Negombo Dutch Fort - St. Mary's Church - Overnight Stay in a Hotel at Negombo`,
    },
    {
      day: `Day 3 & 4 in Anuradhapura`,
      topic: `Negombo to Anuradhapura`,
      img: `./trips/Anuradhapura.jpg`,
      detail: `Experience the ancient splendor of Anuradhapura with a journey through its revered landmarks. Start with the majestic Ruwanweli Maha Seya, emanating spiritual grandeur. Then, marvel at the sacred Jaya Sri Maha Bodhi, a symbol of enlightenment and tranquility. Visit the Thuparama Vihara, resonating with historical significance and architectural grace. Explore the Isurumuni Royal Temple, a testament to Sri Lanka's rich cultural heritage. Don't miss the serene Abhayagiri Viharaya, offering insight into Buddhist traditions. Conclude your day with a comfortable overnight stay in a hotel, immersing yourself in the city's mystical aura and preparing for more adventures in Anuradhapura.`,
      accommodation: `As Your Request`,
      activities: `Ruwanweli Maha Seya - Jaya Sri Maha Bodhi - Thuparama vihara - Isurumuni Royal Temple - Abhayagiri viharaya - Overnight Stay in a Hotel at Anuradhapura`,
    },
    {
      day: `Day 5 & 6 in Nilaveli`,
      topic: `Anuradhapura to Nilaveli`,
      img: `./trips/Nilaveli_Beach.jpg`,
      detail: `Experience the enchanting beauty of Sri Lanka's eastern coast with a journey that encompasses the allure of Pigeon Island's marine sanctuary, the pristine shores of Nilaveli Beach, and the spiritual resonance of Thirukoneswaram Kovil. Explore the historic charm of Fort Frederick and the laid-back vibes of Uppuveli. Dive into the azure depths through scuba diving adventures, discovering vibrant coral reefs and exotic marine life. Finally, unwind with an overnight stay in a cozy hotel nestled in the tranquil ambiance of Nilaveli, where the whispers of the ocean lull you into a state of serenity, completing a journey of blissful discovery.`,
      accommodation: `As Your Request`,
      activities: `Pigeon Island - Nilaveli Beach - Thirukoneswaram Kovil - Fort Frederick - Uppuveli - Scuba Diving - Overnight Stay in a Hotel at Nilaveli`,
    },
    {
      day: `Day 7 & 8 in Sigiriya`,
      topic: `Nilaveli to Sigiriya`,
      img: `./trips/sigiriya.jpg`,
      detail: `Experience the rich tapestry of Sri Lanka's cultural and natural wonders with a journey that begins at the majestic Sigiriya Rock Fortress, also known as Lion Rock, an ancient marvel perched atop a towering monolith. Delve into the wilderness of Minneriya National Park, where elephant herds roam freely amidst lush landscapes. Trek to Pidurangala Rock for panoramic views of Sigiriya and its surroundings. Continue your wildlife odyssey at Kaudulla National Park, encountering diverse flora and fauna. Immerse yourself in local life with a Sigiriya Village Tour, discovering the traditions and customs of the region. Find tranquility at Kaludiya Pokuna, an ancient forest monastery. Conclude your day with an overnight stay at a hotel in Sigiriya, where comfort meets the allure of Sri Lanka's historical heartland.`,
      accommodation: `As Your Request`,
      activities: `Sigiriya Rock Fortress (Lion Rock) - Minneriya National Park - Pidurangala Rock - Kaudulla National Park - 
      Sigiriya Village Tour - Kaludiya Pokuna - Overnight Stay in a Hotel at Sigiriya`,
    },
    {
      day: `Day 9 in Dambulla`,
      topic: `Sigiriya to Dambulla`,
      img: `./trips/Dambulla_Cave_Temple.jpg`,
      detail: `Experience the majestic allure of Dambulla with a visit to the renowned Royal Cave Temple and Golden Temple. Marvel at the ancient rock cave complex, adorned with intricate Buddhist murals and over 150 statues, a testament to Sri Lanka's rich cultural heritage. After a day of exploration, unwind in comfort with an overnight stay at a hotel in Dambulla. Let the echoes of history guide your journey as you immerse yourself in the serenity of this sacred site and indulge in the warm hospitality of your accommodations, making memories to cherish for a lifetime.`,
      accommodation: `As Your Request`,
      activities: `Dambulla Royal Cave Temple and Golden Temple - Overnight Stay in a Hotel at Dambulla`,
    },
    {
      day: `Day 10, 11 & 12 in Kandy`,
      topic: `Dambulla to Kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `Embark on a mesmerizing journey through Kandy's cultural tapestry. Begin at the Royal Botanic Gardens, where lush greenery unveils botanical wonders. Pay respects at the solemn Commonwealth War Cemetery, a poignant reminder of history's sacrifices. Seek tranquility in the Udawatta Kele Sanctuary, a haven for nature enthusiasts. Ascend to the majestic Bahirawakanda Temple, offering panoramic views of the city. Experience spiritual reverence at the Temple of Tooth Relic, an icon of Buddhist heritage. Immerse in the rhythmic beats of Kandy's Cultural Dance Show, a vibrant celebration of tradition. Conclude your day with a blissful overnight stay in a luxurious hotel, cradled by Kandy's serene ambiance.`,
      accommodation: `As Your Request`,
      activities: `Royal Botanic Gardens - Commonwealth War Cemetery - Udawatta Kele Sanctuary -  Bahirawakanda Temple - Temple of Tooth Relic - Kandy Cultural Dance Show - Overnight Stay in a Hotel at Kandy`,
    },
    {
      day: `Day 13, 14 & 15 in Nuwara Eliya`,
      topic: `Kandy to Nuwara Eliya`,
      img: `./trips/nuwara_eliya_post_office.jpg`,
      detail: `Embark on an enchanting journey to Nuwara Eliya, where you'll ascend the majestic Ambuluwawa Tower, immerse yourself in the aromatic bliss of Damro Labookellie Tea Centre, and witness nature's grandeur at the cascading Ramboda Waterfalls. Explore the lush tea plantations and factories, bask in the tranquil beauty of Gregory Lake, and marvel at the architectural splendor of Nuwara Eliya Post Office. Pay reverence at the sacred Seetha Eliya Temple, trek to the breathtaking Bomburu Ella, and soak in panoramic vistas from Lipton's Seat, before retreating to a cozy hotel for an overnight stay in this hill country paradise.`,
      accommodation: `As Your Request`,
      activities: `Ambuluwawa Tower - Ramboda Waterfalls - Damro Labookellie Tea Centre - Gregory Lake - Nuwara Eliya Post Office - Seetha Eliya Temple - Bomburu Ella - Lipton Seat - Overnight Stay in a Hotel at Nuwara Eliya`,
    },
    {
      day: `Day 16, 17 & 18 in Ella`,
      topic: `Nuwara Eliya to Ella`,
      img: `./trips/Little_Adam.jpg`,
      detail: `Embark on a picturesque journey by train to Ella, where nature's wonders await. Marvel at the majestic Ravana Falls, cascading gracefully amidst lush greenery. Explore the iconic Nine Arch Bridge, a marvel of architecture nestled in the verdant landscape. Hike up to Little Adam's Peak for breathtaking panoramic views that stretch to the horizon. Don't miss the enchanting Ellawella Waterfalls, where tranquility reigns supreme. After a day of exploration, unwind in comfort with an overnight stay at a cozy hotel in Ella, surrounded by the serene beauty of the Sri Lankan countryside.`,
      accommodation: `As Your Request`,
      activities: `Little adam's peak - Ellawella Waterfalls - Nine Arches Bridge - Ravana Falls - Overnight Stay in a Hotel at Ella`,
    },
    {
      day: `Day 19, 20 & 21 in Arugam Bay`,
      topic: `Ella to Arugam Bay`,
      img: `./trips/Arugam_Bay.jpg`,
      detail: `Explore the captivating wonders of Arugam Bay Beach, where golden sands meet azure waters, offering a tranquil escape. Venture to Muhudu Maha Viharaya, an ancient Buddhist temple steeped in history and spirituality. Embark on a serene lagoon safari in Pottuvil, immersing in the pristine natural beauty. Discover the biodiversity hotspot of Kudumbigala Sanctuary, home to diverse flora and fauna. Uncover the mystique of Kudumbigala Monastery Complex, a sacred site nestled in lush greenery. Ascend Sangamankanda Lighthouse for panoramic views of the coastline. Conclude your adventure with an overnight stay at a cozy hotel, relishing the serenity of Arugam Bay.`,
      accommodation: `As Your Request`,
      activities: `Arugam Bay Beach - Muhudu Maha Viharaya - Lagoon Safari ,Pottuvil - Kudumbigala Sanctuary - Kudumbigala Monastery Complex - Sangamankanda Lighthouse - Overnight Stay in a Hotel at Arugam Bay`,
    },
    {
      day: `Day 22, 23 & 24 in Mirissa`,
      topic: `Arugam Bay to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Embark on an enchanting journey along the southern coast of Sri Lanka, beginning at the picturesque Coconut Tree Hill, offering panoramic views of Mirissa Bay's azure waters. Delve into the vibrant culture at the local fish market, brimming with the day's fresh catch. Venture into the vast expanse of the ocean for an unforgettable experience of whale and dolphin watching. Then, unwind on the pristine shores of Unawatuna Beach, where golden sands meet the gentle lapping waves. Conclude your day with an idyllic overnight stay in the charming town of Mirissa, where tranquility and beauty converge for an unforgettable coastal retreat.`,
      accommodation: `As Your Request`,
      activities: `Coconut Tree Hill - Mirissa Bay - Fish Market - Whale watching - Dolphin Watching - Unawatuna Beach - Overnight Stay in a Hotel at Mirissa`,
    },
    {
      day: `Day 25, 26 & 27 in Galle`,
      topic: `Mirissa to Galle`,
      img: `./trips/Galle_Fort.jpg`,
      detail: `Explore the rich tapestry of Galle, Sri Lanka, where history meets nature in a captivating blend. Wander through the ancient cobblestone streets of Galle Dutch Fort, a UNESCO World Heritage Site, echoing tales of colonial legacy. Ascend the towering Galle Lighthouse for panoramic vistas of the azure ocean. Immerse yourself in conservation efforts at the Sea Turtle Hatchery Centre, marveling at these gentle creatures. Find serenity at the Japanese Peace Pagoda, a symbol of tranquility amidst lush surroundings. Sink your toes into the golden sands of Unawatuna Beach and the secluded oasis of Jungle Beach. Discover biodiversity at Rumassala Sanctuary, a haven for wildlife enthusiasts. Indulge in history at the Old Dutch Hospital and Maritime Museum, weaving narratives of maritime heritage. Conclude your day with an overnight stay in a cozy hotel, completing an unforgettable journey through Galle's wonders.`,
      accommodation: `As Your Request`,
      activities: `Galle Dutch Fort - Lighthouse - Sea Turtle Hatchery Centre - Japanese Peace Pagoda - Unawatuna Beach - Jungle Beach - Rumassala Sanctuary - Old Dutch Hospital - Maritime Museum - Overnight Stay in a Hotel at Galle`,
    },
    {
      day: `Day 28 & 29 in Colombo`,
      topic: `Galle to Colombo`,
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: `During your visit to Colombo, you can explore a variety of significant landmarks and attractions that showcase the city's rich cultural and architectural heritage. Begin with a visit to the Colombo Red Mosque, a striking structure known for its vibrant red-and-white patterned facade. Next, admire panoramic views from the Lotus Tower, one of the tallest structures in South Asia. Continue to the serene Gangarama Temple, which offers a blend of modern architecture and cultural essence. Take a moment to reflect on Sri Lanka's history at Independence Square, a monument commemorating the country's independence from British rule. Discover the historical and spiritual significance of the Kelaniya Raja Maha Viharaya, a revered Buddhist temple. Relax and unwind at the picturesque Mount Lavinia Beach, a popular spot for both locals and tourists. After a day of exploration, enjoy an overnight stay at a comfortable hotel in Colombo, ensuring you are well-rested for the adventures ahead.`,
      accommodation: `As Your Request`,
      activities: `Colombo Red Mosque - Lotus Tower - Gangarama Temple - Independence Square - Kelaniya Raja Maha Viharaya - Mount Lavinia Beach - Overnight Stay in a Hotel at Colombo`,
    },
    {
      day: `Day 30`,
      topic: `Colombo to Airport`,
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
        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/thirtydays" className="opacity-60 font-bold">
            <span>THIRTY DAYS</span>
          </a>
        </Breadcrumbs>
        {/* ===========Breadcrumbs=========== */}
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:mt-5 mt-0">
          <button
            className={`md:m-2 m-1 w-40 md:w-auto md:px-14 md:py-2 py-1 px-8 border-2 md:text-base text-sm ${
              activeTab === "overview" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto md:px-14 md:py-2 py-1 px-8 border-2 md:text-base text-sm ${
              activeTab === "itinerary" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto md:px-14 md:py-2 py-1 px-8 border-2 md:text-base text-sm ${
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
                src="https://www.google.com/maps/embed?pb=!1m88!1m12!1m3!1d2026131.7831204839!2d79.52774705088288!3d7.321439711447633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m73!3e0!4m5!1s0x3ae2ee9c6bb2f73b%3A0xa51626e908186f3e!2sNegombo!3m2!1d7.2007968!2d79.8736754!4m5!1s0x3afcf4f99360e159%3A0xc111fe9ebc6dcf0e!2sAnuradhapura!3m2!1d8.311351799999999!2d80.4036508!4m5!1s0x3afbbfb5c9304551%3A0xc6d99d1084095189!2sNilaveli!3m2!1d8.6927331!2d81.1885293!4m5!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!3m2!1d7.954108499999999!2d80.75469799999999!4m5!1s0x3afcaff4c8adcc4f%3A0x67ae3cc5b1536914!2sDambulla!3m2!1d7.874217!2d80.6511287!4m5!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!3m2!1d7.2905714999999995!2d80.6337262!4m5!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara%20Eliya!3m2!1d6.9497165999999995!2d80.7891068!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!4m5!1s0x3ae5bd26f6a1ccd7%3A0xb934be79f3ce3515!2sArugam%20Bay!3m2!1d6.8379771!2d81.82516869999999!4m5!1s0x3ae13fce3177dc59%3A0xa2d8a78b36dc9c90!2sMirissa!3m2!1d5.948262!2d80.4715866!4m5!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!3m2!1d6.032894799999999!2d80.2167912!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!5e0!3m2!1sen!2slk!4v1715885997871!5m2!1sen!2slk"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="30 Days Trip"
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
