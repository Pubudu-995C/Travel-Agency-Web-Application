import Navbar from "../components/Layout/Navbar";
import Mirissa from "../images/wallpapers/mirissa.jpg";
export default function Destinations() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="xl:h-[500px] lg:h-[400px] h-[300px] xl:mt-[70px] mt-[60px]">
          <img
            src={Mirissa}
            className="object-cover w-full h-full brightness-[70%]"
            alt="Wallpaper"
          />
          <p className="lg:text-5xl md:text-4xl text-3xl text-center absolute xl:mt-[285px] lg:mt-[220px] mt-[180px] top-0 right-0 left-0 text-white font-semibold">
            Explore the Top Attractions on the Island
          </p>
        </div>
      </div>
    </div>
  );
}
