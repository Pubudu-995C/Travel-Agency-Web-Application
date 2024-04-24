import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer"
import Wallpaper from "../images/wallpapers/wallpaper10.jpg";

export default function Home() {
  const trips = [
    {
      img: `/wallpapers/wallpaper10.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 07 Days Package`,
      detail: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/wallpaper9.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 14 Days Package`,
      detail: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/wallpaper.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 21 Days Package`,
      detail: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/wallpaper5.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 30 Days Package`,
      detail: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/kandy1.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 45 Days Package`,
      detail: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
      seeMore: ``,
    },
    {
      img: `/wallpapers/wallpaper7.jpg`,
      topic: `Barrier-Free Sri Lanka Tour 60 Days Package`,
      detail: ` Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
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
          className="brightness-75 w-full h-[700px] object-cover"
        />
        <div className="absolute top-0 mt-40 w-full 2xl:px-72 xl:px-24 lg:px-20 px-5">
          <div>
            <p className="font-bold text-center text-yellow-300 xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-serif tracking-widest">
              Ayubowan
            </p>
            <p className="font-bold text-white text-center xl:text-3xl lg:text-xl text-lg mt-2">
              We are Travel <span className="text-[#54B435]">mango</span>
            </p>
            <p className="text-center mt-24 font-bold xl:text-4xl text-3xl text-gray-200">
              Welcome to Sri Lanka
            </p>
            <p className="text-center md:mt-28 mt-16 xl:text-3xl lg:text-2xl text-xl font-bold border-2 p-5 bg-gray-50 opacity-60 lg:leading-10 font-serif">
              In the list of top travel spots for 2023, Sri Lanka stands out as
              a must-visit destination, drawing attention as one of the hottest
              tourist spots of the year.
            </p>
          </div>
        </div>
      </div>

      <div className="2xl:px-72 xl:px-24 lg:px-20 px-5">
        <div className="grid lg:grid-cols-2 pt-20 lg:gap-x-10 gap-y-10">
          <p className="font-bold xl:text-6xl md:text-5xl text-2xl text-center flex items-center font-serif xl:leading-[70px]">
            Crafted just for you, our Sri Lanka vacations offer tailor-made
            experiences.
          </p>
          <p className="text-justify xl:text-xl md:text-base text-sm font-medium">
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
        <div className="absolute top-0 mt-10 2xl:px-72 xl:px-24 lg:px-20 px-5">
          <p className="md:mt-28 xl:text-4xl text-2xl font-bold">ACCESSIBLE TOURISM</p>
          <p className="mt-2 xl:text-xl md:text-base text-sm font-medium text-justify">
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
          <button className="bg-green-600 hover:bg-gray-200 transition-colors duration-300 mt-5 xl:py-2 xl:px-10 py-1 px-8 text-xl rounded-lg font-bold text-white hover:text-black border-[1px] border-green-500">
            See More
          </button>
        </div>
      </div>

      <div className="py-20 grid xl:grid-cols-3 md:grid-cols-2 justify-center gap-10 2xl:px-72 xl:px-24 lg:px-20 px-5">
        {trips.map((t, index) => (
          <div
            key={index}
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 duration-500 ease-in-out"
          >
            <a href>
              <img class="rounded-t-lg h-[250px] w-full object-cover" src={t.img} alt="" />
            </a>
            <div class="p-5">
              <a href>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {t.topic}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">{t.detail}</p>
              <a
                href={t.seeMore ? `/${t.t.toLowerCase()}` : "#"}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <i class="fa-solid fa-arrow-right pl-3"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
