import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Access from "../images/wallpapers/Accessible_Tourism.jpeg";
import AccessTwo from "../images/wallpapers/Accessible_2.jpg";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Accessible() {
  const special = [
    {
      img: `../team/person (2).png`,
      name: `Tharaka Jayatissa`,
      topic: `University of Peradeniya`,
      detail: `I am Tharaka Jayatissa, a visually impaired Graduate from
      the University of Peradeniya, gainfully employed with one of Sri Lanka's pre-eminent
      Garment exporters (a $ ______ company), a past President and current exco
      member of the Sri Lanka Council of Vision Impaired Graduates. I am also a Braille
      and Computer Instructor and a Senior Project Coordinator with CandleAid, the
      renowned charitable organisation.`,
      seeMore: `/Tharaka`,
    },
    {
      img: `../team/person (3).png`,
      name: ``,
      topic: ``,
      detail: ``,
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div className="xl:h-[500px] lg:h-[400px] h-[300px] xl:mt-[70px] mt-[60px]">
          <img
            src={Access}
            className="object-cover w-full h-full brightness-[60%]"
            alt="Wallpaper"
          />
          <p className="xl:text-5xl lg:text-4xl md:text-3xl text-xl text-center absolute lg:mt-[250px] mt-[200px] top-0 right-0 left-0 text-white">
            Medical, Wellness and Accessible Tourism
          </p>
        </div>
        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/Accessible" className="opacity-60 font-bold">
            <span>ACCESSIBLE TOURISM</span>
          </a>
        </Breadcrumbs>
        {/* ===========Breadcrumbs=========== */}
      </div>
      <div className="mt-10 2xl:px-40 xl:px-24 lg:px-20 px-5 text-justify gap-x-5 grid lg:grid-cols-2 grid-cols-1 items-center">
        <div className="xl:text-base text-sm">
          <p>
            TRAVEL MANGO is your reliable travel partner, dedicated to serving
            the medical, wellness, and accessible tourism markets in Sri Lanka
            with a variety of services. As the specialized medical tourism brand
            of Mango Global, TRAVEL MANGO ensures expert guidance through its
            status as Sri Lanka's leading Destination Management Company with
            extensive experience in the tourism industry.
          </p>
          <p className="mt-5">
            Accessible tourism, a specialized niche within inbound tourism,
            remains largely unexplored, with many hidden gems waiting to be
            discovered. While the facilities for this segment in Sri Lanka are
            not widely known, TRAVEL MANGO has identified and curated the best
            experiences for you. We are proud to be the first inbound tour
            company to focus on this area.
          </p>
        </div>
        <div className="flex justify-center items-center mt-10 lg:mt-0">
          <img
            src={AccessTwo}
            alt=""
            className="w-full md:h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="my-10 2xl:px-40 xl:px-24 lg:px-20 px-5">
        <div>
          <p className="flex justify-center md:text-3xl text-xl font-bold">
            Our Specialists
          </p>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-5 mt-10 gap-y-5">
            {special.map((spec, index) => (
              <div class="items-center bg-gray-100 hover:bg-yellow-100 transition-colors duration-1000 rounded-lg shadow-md sm:flex cursor-pointer">
                <a
                  href={spec.seeMore ? spec.seeMore.toLowerCase() : "#"}
                  className="flex justify-center bg-green-200 md:h-full items-center md:rounded-l-lg"
                >
                  <img
                    class="max-w-40 h-40 object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={spec.img}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900">
                    <a href={spec.seeMore ? spec.seeMore.toLowerCase() : "#"}>
                      {spec.name}
                    </a>
                  </h3>
                  <span class="text-gray-500 ">{spec.topic}</span>
                  <p class="mt-3 mb-4 font-medium text-slate-800 text-justify text-sm">
                    <a href={spec.seeMore ? spec.seeMore.toLowerCase() : "#"}>
                      {spec.detail}
                    </a>
                  </p>
                  <ul class="flex space-x-4 sm:mt-0"></ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
