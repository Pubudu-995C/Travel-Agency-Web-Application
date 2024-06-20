import Navbar from "../components/Layout/Navbar";
import WhatsApp from "../components/WhatsApp";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Trips() {
  const tripList = [
    {
      img: `/trips/nuwara_eliya_post_office.jpg`,
      topic: `Sri Lanka Tour 07 Days Package`,
      day: `(07 Days 06 Nights)`,
      town: `Negombo, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Yala, Galle, Mirissa, Bentota, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `1180`,
      seeMore: `/SevenDays`,
    },
    {
      img: `/trips/coconut_tree_hill.jpg`,
      topic: `Sri Lanka Tour 10 Days Package`,
      day: `(10 Days 09 Nights)`,
      town: `Negombo, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Yala, Galle, Tangalle, Mirissa, Bentota, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `1600`,
      seeMore: `/TenDays`,
    },
    {
      img: `/trips/Sigiriya_Rock.jpg`,
      topic: `Sri Lanka Tour 14 Days Package`,
      day: `(14 Days 13 Nights)`,
      town: `Negombo, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Yala, Galle, Mirissa, Bentota, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `2100`,
      seeMore: `/FourteenDays`,
    },
    {
      img: `/trips/Dutch_Fort.jpg`,
      topic: `Sri Lanka Tour 30 Days Package`,
      day: `(30 Days 29 Nights)`,
      town: `Negombo, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Galle, Mirissa, Nilaveli, Arugam Bay, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `4200`,
      seeMore: `/ThirtyDays`,
    },
    {
      img: `/trips/kandy_view.jpg`,
      topic: `Sri Lanka Tour 45 Days Package`,
      day: `(45 Days 44 Nights)`,
      town: `Negombo, Anuradhapura, Jaffna, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Tangalle, Galle, Mirissa, Nilaveli, Arugam Bay, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `6500`,
      seeMore: `/FortyFiveDays`,
    },
    {
      img: `/trips/Ruwanweli-Maha-Seya.jpg`,
      topic: `Sri Lanka Tour 60 Days Package`,
      day: `(60 Days 59 Nights)`,
      town: `Negombo, Mannar, Wilpattu, Anuradhapura, Polonnaruwa, Jaffna, Sigiriya, Trincomalee, Kandy, Nuwara Eliya, Ella, Yala, Udawalawa, Pottuvil, Down South, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `8700`,
      seeMore: `/SixtyDays`,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="2xl:px-40 xl:px-24 lg:px-20 px-5 lg:my-20 my-10">
        <div className="justify-center mb-10">
          <p className="font-bold text-center xl:text-4xl lg:text-3xl md:text-2xl text-xl">
            Check out our top picks for Sri Lanka travel plans!
          </p>
          <p className="mt-5 md:text-center text-justify xl:text-lg lg:text-base text-sm">
            Explore Travel Mango's diverse selection of Sri Lanka tours,
            offering an array of options to suit your preferences on this
            stunning island getaway. Whether you're craving a traditional island
            experience, seeking adventure amidst wildlife and nature, planning a
            family-friendly vacation, indulging in culinary delights at charming
            boutique hotels, or simply yearning for relaxation on picturesque
            tropical beaches, our Sri Lanka tours have something for everyone.
            Our experienced team of consultants is dedicated to tailoring these
            itineraries to your exact specifications. With Travel Mango, not
            only do you receive exceptional value for your money, but you also
            gain access to our exclusive activities, top-notch chauffeur-guides,
            and round-the-clock customer support. Trust us to curate your
            unforgettable Sri Lanka journey.
          </p>
        </div>
        <div className="grid items-center lg:gap-10 gap-5 xl:grid-cols-3 md:grid-cols-2">
          {tripList.map((trip, index) => (
            <div
              key={index}
              class=" bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 duration-500 ease-in-out h-full justify-between flex flex-col"
            >
              <a href={trip.seeMore ? trip.seeMore.toLowerCase() : "#"}>
                <img
                  class="rounded-t-lg lg:h-[250px] h-[150px] w-full object-cover transform hover:scale-105 duration-500 ease-in-out"
                  src={trip.img}
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href={trip.seeMore ? trip.seeMore.toLowerCase() : "#"}>
                  <h5 class="font-bold tracking-tight text-gray-900 text-xl lg:text-2xl ">
                    {trip.topic}
                  </h5>
                </a>
                <p class="mb-3 font-medium text-gray-700 lg:text-base text-sm">
                  {trip.day}
                </p>
                <p class="mb-3 font-normal text-gray-700 italic lg:text-base text-sm">
                  {trip.town}
                </p>
                <p className="mb-3 font-medium lg:text-base text-sm">
                  {trip.detail}
                </p>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <a
                    href={trip.seeMore ? trip.seeMore.toLowerCase() : "#"}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#54B435] hover:text-white border-2 border-[#54B435] transition-colors duration-300 bg-white  rounded-lg hover:bg-[#54B435]"
                  >
                    Read more
                    <i class="fa-solid fa-arrow-right pl-3"></i>
                  </a>
                  <div className="leading-3">
                    <span className="text-red-600 font-bold text-sm flex justify-end">
                      Starting From
                    </span>
                    <span className="text-red-600 font-bold text-xl flex justify-end">
                      USD {trip.price}
                    </span>
                    <span className="text-sm font-medium flex justify-end">
                      per person
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WhatsApp />
      <ScrollToTopButton />
    </div>
  );
}
