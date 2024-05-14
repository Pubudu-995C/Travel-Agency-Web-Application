/* eslint-disable jsx-a11y/img-redundant-alt */
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsApp from "../components/WhatsApp";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  const tripList = [
    {
      img: `/trips/nuwara_eliya_post_office.jpg`,
      topic: `Sri Lanka Tour 07 Days Package`,
      day: `(07 Days 06 Nights)`,
      town: `Negombo, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Yala, Galle, Mirissa, Bentota, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `1200`,
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
      img: `/wallpapers/wallpaper.jpg`,
      topic: `Sri Lanka Tour 14 Days Package`,
      day: `(14 Days 13 Nights)`,
      town: `Negombo, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Yala, Galle, Mirissa, Bentota, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `2000`,
      seeMore: `/FourteenDays`,
    },
    {
      img: `/wallpapers/wallpaper5.jpg`,
      topic: `Sri Lanka Tour 30 Days Package`,
      day: `(30 Days 29 Nights)`,
      town: `Negombo, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Galle, Mirissa, Nilaveli, Arugam Bay, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `4000`,
      seeMore: `/ThirtyDays`,
    },
    {
      img: `/wallpapers/kandy1.jpg`,
      topic: `Sri Lanka Tour 45 Days Package`,
      day: `(45 Days 44 Nights)`,
      town: `Negombo, Anuradhapura, Jaffna, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Tangalle, Galle, Mirissa, Nilaveli, Arugam Bay, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `5400`,
      seeMore: `/FortyFiveDays`,
    },
    {
      img: `/wallpapers/wallpaper7.jpg`,
      topic: `Sri Lanka Tour 60 Days Package`,
      day: `(60 Days 59 Nights)`,
      town: `Negombo, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Tangalle, Galle, Mirissa, Nilaveli, Arugam Bay, Collombo`,
      detail: `Experience the essence of Sri Lanka through the Classic Sri Lanka Tour, where you'll encounter a captivating blend of ancient cities, picturesque tea-covered hills, vibrant wildlife parks, breathtaking beaches, and luxurious accommodations.`,
      price: `7000`,
      seeMore: ``,
    },
  ];

  const galleryImages = [
    process.env.PUBLIC_URL + `./trips/coconut_tree_hill.jpg`,
    process.env.PUBLIC_URL + `./trips/Galle_Fort.jpg`,
    process.env.PUBLIC_URL + `./trips/nineArch.jpg`,
    process.env.PUBLIC_URL + `./trips/pinnawala.jpg`,
    process.env.PUBLIC_URL + `./trips/damro.jpg`,
    process.env.PUBLIC_URL + `./trips/templeTooth.jpg`,
    process.env.PUBLIC_URL + `./trips/Dambulla_Cave_Temple.jpg`,
    process.env.PUBLIC_URL + `./trips/Kandy_Cultural_Dance.jpg`,
    process.env.PUBLIC_URL + `./trips/nuwara_eliya_post_office.jpg`,
    process.env.PUBLIC_URL + `./trips/yala.jpg`,
    process.env.PUBLIC_URL + `./trips/Madu-River.jpg`,
    process.env.PUBLIC_URL + `./trips/whale-watching.jpg`,
    process.env.PUBLIC_URL + `./trips/mirissa-bay.jpg`,
    process.env.PUBLIC_URL + `./trips/Gregory_Lake.jpg`,
    process.env.PUBLIC_URL + `./trips/Little_Adam.jpg`,
    process.env.PUBLIC_URL + `./trips/Hiriketiya-Beach.jpg`,
    process.env.PUBLIC_URL + `./trips/sigiriya.jpg`,
    process.env.PUBLIC_URL + `./trips/Koneswaram_temple.jpg`,
    process.env.PUBLIC_URL + `./trips/Jaffna_Library.jpg`,
    process.env.PUBLIC_URL + `./trips/Dutch_Fort.jpg`,
    process.env.PUBLIC_URL + `./trips/Gangaramaya_Temple.jpg`,
    process.env.PUBLIC_URL + `./trips/Arugam_Bay.jpg`,
    process.env.PUBLIC_URL + `./trips/Pigeon_Island.jpg`,
  ];

  const choose = [
    {
      img: `/choose/tailor.png`,
      details: `We strive to understand your tour preferences and create the perfect private tour itinerary to bring your vision to life. Our fully customized tour plans ensure you have the best experience possible.`,
    },
    {
      img: `/choose/staff.png`,
      details: `Our travel agents and drivers are both friendly and professional. They'll provide you with excellent ideas and tour plans to ensure you have the best experience in Sri Lanka.`,
    },
    {
      img: `/choose/match.png`,
      details: `Our pricing is designed to give you excellent value for your investment.`,
    },
    {
      img: `/choose/24h.png`,
      details: `Our helpful tour operator team is available around the clock to assist you. With our excellent online chat service, you can effortlessly plan your entire tour without needing to make a single phone call.`,
    },
  ];

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 4000,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <Navbar />
      <div>
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="brightness-[60%] w-full h-[540px] object-cover xl:mt-[70px] mt-[60px]"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-0 w-full px-5 md:mt-40 mt-28 2xl:px-40 xl:px-24 lg:px-20">
          <div>
            <p className="font-serif text-4xl font-bold tracking-widest text-center text-yellow-300 xl:text-6xl lg:text-5xl md:text-5xl uppercase">
              Ayubowan
            </p>
            <p className="mt-2 text-lg font-bold text-center text-white xl:text-2xl lg:text-xl uppercase">
              We are Travel <span className="text-[#79c234]">Mango</span>
            </p>
            <p className="mt-24 text-2xl font-bold text-center text-gray-100 lg:text-4xl">
              Welcome to Sri Lanka
            </p>
            <p className="p-5 mt-10 font-serif text-base font-bold text-center border-2 md:mt-20 xl:text-2xl lg:text-xl bg-gray-50 opacity-70 lg:leading-10">
              In the list of top travel spots for 2023, Sri Lanka stands out as
              a must-visit destination, drawing attention as one of the hottest
              tourist spots of the year.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 2xl:px-40 xl:px-24 lg:px-20">
        <div className="grid pt-10 lg:grid-cols-2 lg:gap-x-10 gap-y-10 items-center">
          <p className="font-bold lg:text-5xl md:text-4xl text-2xl text-center flex items-center font-serif xl:leading-[70px] uppercase">
            Crafted just for you, our Sri Lanka vacations offer tailor-made
            experiences.
          </p>
          <p className="text-sm font-medium text-justify xl:text-lg md:text-base">
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
          className="opacity-50 w-full h-[500px] object-cover lg:mt-20 mt-10"
        />
        <div className="absolute top-0 px-5 mt-10 2xl:px-40 xl:px-24 lg:px-20">
          <p className="text-xl font-bold md:mt-28 md:text-4xl">
            ACCESSIBLE TOURISM
          </p>
          <p className="mt-2 text-sm font-medium text-justify lg:text-lg md:text-base">
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
          <button className="bg-black hover:bg-[#54B435] transition-colors duration-300 mt-5 md:py-2 md:px-10 py-1 px-8 md:text-xl text-base rounded-lg font-bold text-white hover:text-white">
            See More
          </button>
        </div>
      </div>

      <div className="2xl:px-40 xl:px-24 lg:px-20 px-5 lg:my-20 my-10">
        <div className="justify-center mb-10">
          <p className="font-bold text-center xl:text-4xl lg:text-3xl md:text-2xl text-xl">
            Check out our top picks for Sri Lanka travel plans!
          </p>
          <p className="mt-5 md:text-center text-justify lg:text-lg md:text-base text-sm">
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
        <div className="grid items-center gap-10 xl:grid-cols-3 md:grid-cols-2">
          {tripList.map((trip, index) => (
            <div
              key={index}
              class=" bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 duration-500 ease-in-out h-full justify-between flex flex-col"
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
                  <h5 class="font-bold tracking-tight text-gray-900 text-xl lg:text-2xl ">
                    {trip.topic}
                  </h5>
                </a>
                <p class="mb-3 font-medium text-gray-700 md:text-base text-sm">
                  {trip.day}
                </p>
                <p class="mb-3 font-normal text-gray-700 italic md:text-base text-sm">
                  {trip.town}
                </p>
                <p className="mb-3 font-medium md:text-base text-sm">
                  {trip.detail}
                </p>
                <div className="">
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
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="2xl:px-40 xl:px-24 lg:px-20 px-5">
          <div className="flex justify-center my-10">
            <p className="font-bold text-center xl:text-4xl lg:text-3xl md:text-2xl text-xl">
              Why Choose Us
            </p>
          </div>
          <div className="mt-20 text-xl">
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {choose.map((c) => (
                  <div>
                    <img
                      src={c.img}
                      className="w-16 mx-auto mb-4 xl:w-20"
                      alt=""
                    />
                    <p className="mb-10 text-sm xl:mx-10 lg:mx-10 mx-2 md:text-base">
                      {c.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="bg-gray-100 leanding-normal tracking-wide">
          <div class="container mx-auto w-full overflow-hidden relative">
            <div class="w-full h-full absolute z-10">
              <div
                class="w-1/4 h-full absolute z-50 left-0"
                style={{
                  background:
                    "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              ></div>
              <div
                class="w-1/4 h-full absolute z-50 right-0"
                style={{
                  background:
                    "linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              ></div>
            </div>

            <div
              class="carousel-items flex items-center justify-center"
              style={{
                width: "fit-content",
                animation: "carouselAnim 60s infinite alternate linear",
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  class="carousel-focus flex items-center flex-col relative bg-white  my-10  rounded-lg shadow-lg"
                  style={{ width: "350px" }}
                >
                  <img
                    class="w-full md:h-[250px] h-[150px] object-cover shadow-2xl"
                    alt="Img"
                    src={image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsApp />
      <ScrollToTopButton />
    </div>
  );
}
