export default function Tours() {
  const tourType = [
    {
      topic: `TOURISM`,
      details: `Tourism involves traveling for pleasure, exploring new destinations, experiencing different cultures, and supporting local economies through various activities.`,
      btn: `/Trips`,
      img: `tours/tourism.jpg`,
      alt: `Tourism`,
    },
    {
      topic: `SUMMER CAMPS`,
      details: `Summer camps offer diverse activities and adventures for children, fostering skills, friendships, and personal growth in an outdoor setting.`,
      btn: `/Accessible`,
      img: `tours/summer.jpg`,
      alt: `Summer Camps`,
    },
    {
      topic: `ACCESSIBLE TOURISM`,
      details: `Travelmango offers specialized medical, wellness, and accessible tourism services in Sri Lanka, uncovering hidden gems for exclusive experiences.`,
      btn: `/Accessible`,
      img: `tours/accessible.jpg`,
      alt: `Accessible_Tourism`,
    },
  ];
  return (
    <div>
      <div className="absolute top-0 right-0 left-0 px-5 lg:mt-10  mt-10 2xl:px-40 xl:px-24 lg:px-20">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-10 gap-y-10">
          {tourType.map((t) => (
            <div className="flex justify-center">
              <div className="bg-gradient-to-bl from-lime-300 to-amber-100 shadow-lg rounded-lg lg:w-full w-[500px]">
                <img
                  src={t.img}
                  alt={t.alt}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-5">
                  <p className="text-xl font-bold md:text-2xl xl:text-3xl text-center">
                    {t.topic}
                  </p>
                  <p className="mt-2 text-sm font-medium text-center xl:text-base">
                    {t.details}
                  </p>
                  <a href={t.btn} className="w-full inline-flex justify-center">
                    <input
                      type="button"
                      value="See More"
                      className="bg-black hover:bg-[#54B435] transition-colors duration-300 mt-5 xl:py-2 xl:px-10 lg:py-1.5 lg:px-8 py-1 px-8 lg:text-xl text-base rounded-lg font-bold text-white hover:text-white cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
