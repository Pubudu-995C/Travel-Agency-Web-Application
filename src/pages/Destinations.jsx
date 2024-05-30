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
          <p className="text-5xl text-center absolute mt-[250px] top-0 right-0 left-0 text-white">
            Explore the Top Attractions on the Island
          </p>
        </div>
      </div>
    </div>
  );
}
