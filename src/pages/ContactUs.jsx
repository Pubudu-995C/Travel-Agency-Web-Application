import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import WhatsApp from "../components/WhatsApp";
import Thabbowa from "../images/wallpapers/Thabbowa_Sanctuary.jpg";

export default function ContactUs() {
  const team = [
    {
      img: `/team/person (2).png`,
      name: `Pubudu`,
      details: `Web Developer`,
    },
    {
      img: `/team/person (5).png`,
      name: `Roshan`,
      details: `Tour Advisor`,
    },
    {
      img: `/team/person (3).png`,
      name: `Sanjaya`,
      details: `Project Handling`,
    },
    {
      img: `/team/person (6).png`,
      name: `Anil`,
      details: `Tour Advisor`,
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="xl:h-[500px] lg:h-[400px] h-[300px] xl:mt-[70px] mt-[60px]">
          <img
            src={Thabbowa}
            className="object-cover w-full h-full brightness-[70%]"
            alt="Wallpaper"
          />
          <p className="lg:text-5xl md:text-4xl text-3xl text-center absolute xl:mt-[285px] lg:mt-[220px] mt-[180px] top-0 right-0 left-0 text-white font-semibold">
            Contact Us Our Team Members
          </p>
        </div>
        <div>
          <div className="2xl:px-40 xl:px-24 lg:px-20 px-5 pt-20">
            <div>
              <h2 className="text-center font-mono lg:text-3xl text-xl text-[#54B435] uppercase">
                Travel Planning Assistance, Absolutely Free!
              </h2>
              <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
                Seeking Free Sri Lanka Travel Tips?
              </h1>

              <p className="mt-8 text-lg text-center lg:text-xl">
                Our team at Travel Mango is passionately dedicated to exploring
                the wonders of Sri Lanka. Even if you don't choose one of our
                itineraries, you can still schedule a complimentary travel
                consultation with our knowledgeable and friendly team.
              </p>
            </div>
            <div>
              <div class="mt-24 mx-auto md:px-6">
                <div class="text-center">
                  <div class="lg:gap-xl-12 grid gap-x-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {team.map((t) => (
                      <div>
                        <img
                          class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[100px] md:w-[150px] bg-slate-200"
                          src={t.img}
                          alt=""
                        />
                        <p class="text-lg font-bold">{t.name}</p>
                        <p class="mb-6 lg:mb-0 text-sm md:text-lg">
                          {t.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center py-10 my-10">
                <button className="font-bold lg:text-xl text-sm bg-[#82CD47] px-10 py-2 rounded-full transition-colors duration-300 hover:bg-[#F0FF42]">
                  MEET THE WHOLE TEEM!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-bl from-emerald-800 to-sky-800" id="contact">
          <div class="py-16 lg:py-20 2xl:px-40 xl:px-34 lg:px-20 px-5">
            <div class="mb-4">
              <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                  Contact
                </p>
                <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                  Get in Touch
                </h2>
                <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                  Discover Sri Lanka with Travel Mango today!
                </p>
              </div>
            </div>
            <div class="flex items-stretch justify-center">
              <div class="grid md:grid-cols-2">
                <div class="h-full pr-6">
                  <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 text-justify">
                    Embark on a Sri Lankan adventure with Travel Mango!
                    Experience the vibrant culture and stunning landscapes with
                    our expertly guided tours. Reach out today for a seamless,
                    personalized journey tailored to your wanderlust dreams. Let
                    us make your travel experience unforgettable and uniquely
                    crafted just for you.
                  </p>
                  <ul class="mb-6 md:mb-0">
                    <li class="flex">
                      <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div class="ml-4 mb-4">
                        <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          Our Address
                        </h3>
                        <p class="text-gray-600 dark:text-slate-400">
                          {/* 1230 Maecenas Street Donec Road */}
                        </p>
                        <p class="text-gray-600 dark:text-slate-400">
                          {/* New York, EEUU */}
                        </p>
                      </div>
                    </li>
                    <li class="flex">
                      <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <i class="fa-solid fa-phone-volume"></i>
                      </div>
                      <div class="ml-4 mb-4">
                        <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          Contact
                        </h3>
                        <p class="text-gray-600 dark:text-slate-400">
                          Mobile: +94 (070) 4 339-349
                        </p>
                        <p class="text-gray-600 dark:text-slate-400">
                          Mail: mangoglobal87@gmail.com
                        </p>
                      </div>
                    </li>
                    <li class="flex">
                      <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <i class="fa-regular fa-clock"></i>
                      </div>
                      <div class="ml-4 mb-4">
                        <h3 class="mb-2 text-lg font-medium leading-6 text-white">
                          Working hours
                        </h3>
                        <p class="text-slate-400">
                          Monday - Friday: 08:00 - 17:00
                        </p>
                        <p class="text-slate-400">
                          Saturday &amp; Sunday: 08:00 - 12:00
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                  <h2 class="mb-4 text-2xl text-yellow-400 font-bold">
                    Ready to Get Started?
                  </h2>
                  <form id="contactForm">
                    <div class="mb-6">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <div class="mx-0 mb-1 sm:mb-4">
                          <label
                            for="name"
                            class="pb-1 text-xs uppercase tracking-wider"
                          ></label>
                          <input
                            type="text"
                            id="name"
                            autocomplete="given-name"
                            placeholder="Your name"
                            class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-800 sm:mb-0"
                            name="name"
                          />
                        </div>
                        <div class="mx-0 mb-1 sm:mb-4">
                          <label
                            for="email"
                            class="pb-1 text-xs uppercase tracking-wider"
                          ></label>
                          <input
                            type="email"
                            id="email"
                            autocomplete="email"
                            placeholder="Your email address"
                            class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-800 sm:mb-0"
                            name="email"
                          />
                        </div>
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="textarea"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <textarea
                          id="textarea"
                          name="textarea"
                          cols="30"
                          rows="5"
                          placeholder="Write your message..."
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-mdtext-gray-800 sm:mb-0 resize-none"
                        ></textarea>
                      </div>
                    </div>
                    <div class="text-center">
                      <button
                        type="submit"
                        class="w-full bg-blue-800 hover:bg-blue-500 transition-colors duration-300 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsApp />
    </div>
  );
}
