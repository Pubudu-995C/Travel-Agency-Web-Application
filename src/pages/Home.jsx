import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Wallpaper from "../images/wallpapers/wallpaper10.jpg";

export default function Home() {
  const tripList = [
    {
      img: `/wallpapers/wallpaper10.jpg`,
      topic: `Sri Lanka Tour 07 Days Package`,
      day: `(07 Days 06 Nights)`,
      town: `Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Mirissa, Bentota, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      seeMore: `/SevenDays`,
    },
    {
      img: `/wallpapers/wallpaper9.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 14 Days Package`,
      town: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/wallpaper.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 21 Days Package`,
      town: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/wallpaper5.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 30 Days Package`,
      town: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/kandy1.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 45 Days Package`,
      town: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/wallpaper7.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 60 Days Package`,
      town: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <img
          src={Wallpaper}
          alt=""
          className="brightness-75 w-full h-[750px] object-cover"
        />
        <div className="absolute top-0 w-full px-5 mt-40 2xl:px-40 xl:px-24 lg:px-20">
          <div>
            <p className="font-serif text-5xl font-bold tracking-widest text-center text-yellow-300 xl:text-8xl lg:text-7xl md:text-6xl">
              Ayubowan
            </p>
            <p className="mt-2 text-lg font-bold text-center text-white xl:text-3xl lg:text-xl">
              We are Travel <span className="text-[#54B435]">mango</span>
            </p>
            <p className="mt-24 text-3xl font-bold text-center text-gray-200 xl:text-4xl">
              Welcome to Sri Lanka
            </p>
            <p className="p-5 mt-16 font-serif text-xl font-bold text-center border-2 md:mt-28 xl:text-3xl lg:text-2xl bg-gray-50 opacity-60 lg:leading-10">
              In the list of top travel spots for 2023, Sri Lanka stands out as
              a must-visit destination, drawing attention as one of the hottest
              tourist spots of the year.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 2xl:px-40 xl:px-24 lg:px-20">
        <div className="grid pt-20 lg:grid-cols-2 lg:gap-x-10 gap-y-10">
          <p className="font-bold xl:text-6xl md:text-5xl text-2xl text-center flex items-center font-serif xl:leading-[70px]">
            Crafted just for you, our Sri Lanka vacations offer tailor-made
            experiences.
          </p>
          <p className="text-sm font-medium text-justify xl:text-xl md:text-base">
            Discover the captivating allure of Sri Lanka, a tropical paradise
            hailed as one of the world's top destinations for vacations. Despite
            its compact size, this island nation boasts an astonishing array of
            attractions: pristine beaches, breathtaking mountainous terrain,
            wildlife reserves teeming with exotic animals, ancient urban
            centers, revered temples, delectable cuisine, and a continually
            expanding selection of accommodations to suit every preference. At{" "}
            <span className="font-bold">
              travel<span className="text-[#54B435]">mango</span>
            </span>
            , we are dedicated to tailoring your Sri Lanka experience to
            perfection. Share your vision for the ideal holiday with us –
            whether it's exploring, relaxing, or indulging – and we'll craft a
            personalized itinerary just for you. Choose from our curated
            selection of bespoke Sri Lanka tours, handcrafted holiday packages,
            or handpicked accommodations from the finest properties across the
            island. Regardless of your budget, expect attentive service and
            competitive rates that reflect our commitment to your satisfaction.
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src="./wallpapers/accessible.jpg"
          alt=""
          className="opacity-50 w-full h-[500px] object-cover mt-20"
        />
        <div className="absolute top-0 px-5 mt-10 2xl:px-40 xl:px-24 lg:px-20">
          <p className="text-2xl font-bold md:mt-28 xl:text-4xl">
            ACCESSIBLE TOURISM
          </p>
          <p className="mt-2 text-sm font-medium text-justify xl:text-xl md:text-base">
            Travelmango is the go-to travel companion you can rely on,
            specializing in catering to the needs of those seeking medical,
            wellness, and accessible tourism experiences in Sri Lanka. They
            provide a variety of services tailored to these specific markets.{" "}
            Accessible tourism, a specialized sector of inbound travel, holds
            vast potential yet remains largely undiscovered. Sri Lanka boasts
            hidden gems tailored for this market, and Travelmango has delved
            into uncovering these treasures to provide you with an exclusive
            experience.
          </p>
          <button className="bg-black hover:bg-[#54B435] transition-colors duration-300 mt-5 xl:py-2 xl:px-10 py-1 px-8 text-xl rounded-lg font-bold text-white hover:text-white">
            See More
          </button>
        </div>
      </div>

      <div className="2xl:px-40 xl:px-24 lg:px-20 px-5 my-20">
        <div className="grid items-center gap-10 xl:grid-cols-3 md:grid-cols-2">
          {tripList.map((trip, index) => (
            <div
              key={index}
              class=" bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 duration-500 ease-in-out h-[650px]"
            >
              <a href={trip.seeMore ? trip.seeMore.toLowerCase() : "#"}>
                <img
                  class="rounded-t-lg h-[250px] w-full object-cover transform hover:scale-105 duration-500 ease-in-out"
                  src={trip.img}
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href={trip.seeMore ? trip.seeMore.toLowerCase() : "#"}>
                  <h5 class=" text-2xl font-bold tracking-tight text-gray-900">
                    {trip.topic}
                  </h5>
                </a>
                <p class="mb-3 font-medium text-gray-700">{trip.day}</p>
                <p class="mb-3 font-normal text-gray-700 italic">{trip.town}</p>
                <p className="mb-3 font-medium">{trip.detail}</p>
                <a
                  href={trip.seeMore ? trip.seeMore.toLowerCase() : "#"}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#54B435] hover:text-white border-2 border-[#54B435] transition-colors duration-300 bg-white  rounded-lg hover:bg-[#54B435]"
                >
                  Read more
                  <i class="fa-solid fa-arrow-right pl-3"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
