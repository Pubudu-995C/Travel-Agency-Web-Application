import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Photo from "../../images/wallpapers/Accessible_2.jpg";
import PhotoTwo from "../../images/wallpapers/Accessible_Tourism.jpeg";
import { Breadcrumbs } from "@material-tailwind/react";
export default function Tharaka() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="2xl:px-40 xl:px-24 lg:px-20 px-5 mt-20 gap-x-5">
          {/* ===========Breadcrumbs=========== */}
          <Breadcrumbs>
            <a href="/" className="opacity-60">
              <i class="fa-solid fa-house"></i>
            </a>
            <a href="/Accessible" className="opacity-60 font-bold">
              <span>ACCESSIBLE TOURISM</span>
            </a>
            <a href="/Tharaka" className="opacity-60 font-bold">
              <span>THARAKA JAYATISSA</span>
            </a>
          </Breadcrumbs>
          {/* ===========Breadcrumbs=========== */}
          <div className="lg:mt-10 mt-5 xl:flex gap-x-5">
            <div>
              <img
                src={Photo}
                alt=""
                className="w-full lg:h-96 md:h-[300px] object-cover"
              />
            </div>
            <div className="xl:w-5/6 text-justify md:space-y-8 space-y-4 mt-4 xl:mt-0 text-sm lg:text-base">
              <p>
                By way of introduction, I am Tharaka Jayatissa, a visually
                impaired Graduate from the University of Peradeniya, gainfully
                employed with one of Sri Lanka's pre-eminent Garment exporters
                (a $ ______ company), a past President and current exco member
                of the Sri Lanka Council of Vision Impaired Graduates. I am also
                a Braille and Computer Instructor and a Senior Project
                Coordinator with CandleAid, the renowned charitable
                organisation.
              </p>
              <p>
                My project partner, Mr. Prabath Wickramanayake, who is also
                visually impaired, and I have partnered with Mango Global (Pvt)
                Ltd with the vision and purpose of making the multi-layered
                sensory delights of Sri Lanka conveniently, practically and
                rewardingly accessible to handicapped international travellers.
              </p>
              <p>
                Prabath and I consider ourselves fortunate to have been born and
                raised in Sri Lanka, a country whose people exhibit
                understanding, empathy, and cooperation towards individuals with
                disabilities. The term "Lotus eaters" often used to mock Sri
                Lankans, actually highlights some of our finer qualities, where
                an overwhelming pursuit of material success is not the primary
                concern. This nurturing environment and mindset have fostered a
                culture of respect and inclusivity towards individuals with
                disabilities.
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:px-40 xl:px-24 lg:px-20 px-5 mt-4 space-y-4 text-justify text-sm lg:text-base">
          <p>
            Sri Lanka is almost uniquely positioned with compact geographical
            proximities, offering a rich sensory experience that delights the
            sight, sound, taste, smell and touch of both discerning travellers
            and locals alike.
          </p>
          <p>
            As the poet described this land, "where every prospect pleases", its
            abundance and variety are truly remarkable.
          </p>
          <p>
            From the sights of spectacular sunsets, verdant valleys, misty
            mountains, starry skies, winding roads, and wildlife (Yala has the
            highest concentration of leopards in the world), you can witness the
            largest land mammal - the elephant, and the largest sea mammal ever
            to inhabit the earth, the blue whale within 3 hours of each
            sighting. Additionally, Sri Lanka boasts some of the highest global
            counts of endemic birds, insects and reptiles.
          </p>
          <p>
            Amidst the sounds of distant temple bells, whistling mountain
            streams, crashing surf on sand, melodious languages, pulsating drum
            beats and vibrant island music, you’ll encounter the enticing smells
            of rain on parched earth, elephants in "must", the incomparable
            lingering fragrance of the Queen of the Night flower, the scent of
            cordite from firecrackers, the diverse incense of religious
            festivals, and the irresistible olfactory invitation of Sri Lankan
            Cuisine.
          </p>
          <p>
            The explosion of taste from the myriad Sri Lankan dishes represents
            a literal melting pot of Early Sri Lankan, Indian, Indonesian,
            Moghul, Arabic, Portuguese, and Dutch cuisines. This culinary
            spectrum ranges from fiery and flavourful to subtle and nuanced,
            catering to meat lovers, vegetarians and vegans alike. The challenge
            with fruits is deciding what to choose, and desserts are so
            delightful that knowing when to stop becomes the question. These
            culinary delights are often accompanied by local distilled Arrack or
            fermented Toddy, complemented by what is arguably the best tea in
            the world.
          </p>
        </div>
        <div className="grid grid-cols-2 2xl:px-40 xl:px-24 lg:px-20 px-5 gap-x-5 mt-5">
          <img
            src={Photo}
            alt=""
            className="w-full lg:h-[350px] object-cover"
          />
          <img
            src={PhotoTwo}
            alt=""
            className="w-full lg:h-[350px] object-cover"
          />
        </div>
        <div className="2xl:px-40 xl:px-24 lg:px-20 px-5 space-y-4 my-5 text-justify text-sm lg:text-base">
          <p>
            Experience the vibrant atmosphere of bustling bazaars, the gentle
            demeanor of village life, therapeutic and soothing pampering of age
            old Ayurvedic spas, and the laid-back joie de vivre that embodies
            the essence of Sri Lanka, all under the soothing touch of gentle
            drizzles and warm sunshine.
          </p>
          <p>
            Combine these sensory adventures with the knowledge that this small
            island spans 65,000 square kilometres, offering over 1300 km of
            coastline, four distinct climate zones, and elevations from sea
            level up to 2300 meters. It is home to eight UNESCO heritage sites
            and boasts a recorded history of over 3000 years, with evidence of
            prehistoric settlements (Balangoda man) dating back to 38,000 BCE.
            As the oldest democracy in Asia, Sri Lanka established universal
            franchise as early as 1931. Notably, it hosts the world’s oldest
            wildlife sanctuary (Mihintale), had an ancient civilization known
            for precise irrigation techniques, and is recognized for having the
            lowest gravitational pull-on earth (Trincomalee).
          </p>
          <p>
            My partner and I, along with Mango Global, intend to make the many
            facets of this tourist gem practically, conveniently and affordably
            accessible to individuals who are differently abled (as we are),
            dispelling any misconceptions that some of life’s most enjoyable
            pleasures are beyond reach.
          </p>
          <p>
            We have thoroughly studied the challenges faced by differently abled
            people and have implemented solutions to ensure that most obstacles
            can be overcome with ease and dignity.
          </p>
          <p>
            Please see the attached brochure which details tailor made solutions
            catering to specific needs and preferences.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
