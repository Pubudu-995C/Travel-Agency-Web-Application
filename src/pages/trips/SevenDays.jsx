import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Sigiriya from "../../images/wallpapers/sigiriya.jpg";
export default function SevenDays() {
  const dateList = [
    {
      day: `Day 01`,
      topic: `Arrival and Booking into a Hotel in Kandy`,
      img: `./trips/pinnawala.jpg`,
      detail: `Milk Feeding`,
      accommodation: `Please Request Us`,
      activities: `Pinnawala Elephant Orphanage`,
    },
    {
      day: `Day 02`,
      topic: `Sigiriya to Kandy`,
      img: `./trips/templeTooth.jpg`,
      detail: `Sigiriya Rock Fortress (Lion Rock) <br/> 
      Dambulla Royal Cave Temple and Golden Temple <br/> 
      Spice Garden <br/> 
      Mstale Muthumariamman Temple <br/> 
      Temple of Tooth Relic <br/>
      Kandy Cultural Dance Show`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 03`,
      topic: `Kandy to Ella`,
      img: `./trips/ramboda.jpg`,
      detail: `Ramboda Falls <br/> 
      Damro Labookellie Tea Centre<br/>    
      Gregory Lake <br/> 
      Nuwara Eliya Post Office <br/>`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 04`,
      topic: `Ella to Yala`,
      img: `./trips/nineArch.jpg`,
      detail: `Little adam's peak<br/> 
      Nine Arches Bridge<br/>    
      Ravana Falls <br/>    
      Yala Safari <br/>`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 05`,
      topic: `Yala to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Coconut Tree Hill<br/> 
      Mirissa Bay<br/>    
      Fish Market <br/>`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
    {
      day: `Day 06`,
      topic: `Mirissa to Bentota`,
      img: `./trips/Galle_Fort.jpg`,
      detail: `Whale watching Hill<br/> 
      Dolphin Watching<br/>    
      Galle Fort <br/>
      Turtle Farm & Hatchery <br/>
      Madu River <br/>`,
      accommodation: `Please Request Us`,
      activities: ``,
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div className="xl:h-[550px] lg:h-[400px] h-[300px]">
          <img
            src={Sigiriya}
            className="object-cover w-full h-full"
            alt="Wallpaper"
          />
        </div>
        <div className="p-3 w-full flex justify-between bg-[#54B435] 2xl:px-40 xl:px-24 lg:px-20 px-5">
          <p className="text-2xl font-semibold text-white">
            Sri Lanka Tour 07 Days Package{" "}
            <span className="text-lg font-bold text-[#F0FF42]">
              (07 Days 06 Nights)
            </span>
          </p>
          <p className="text-2xl font-medium text-white">
            Starting from <span className="font-bold"> USD 1000</span> per
            person
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 my-10 2xl:px-40 xl:px-24 lg:px-20 px-5">
          {dateList.map((date, index) => (
            <div class="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow md:flex-row hover:bg-gray-100 w-full">
              <img
                class="object-cover w-[400px] rounded-t-lg h-[300px] md:rounded-none md:rounded-s-lg overflow-hidden transform hover:scale-105 duration-500 ease-in-out"
                src={date.img}
                alt=""
              />
              <div class="flex flex-col justify-center p-4 leading-normal w-full h-full">
                <div className="flex items-baseline gap-x-20">
                  <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {date.day}
                  </p>
                  <p class="mb-3 font-medium text-gray-700 italic">
                    {date.topic}
                  </p>
                </div>
                <p
                  class="font-normal text-gray-700"
                  dangerouslySetInnerHTML={{ __html: date.detail }}
                ></p>

                <div className="flex flex-col mt-5">
                  <p class="font-normal text-gray-700">
                    <span className="font-bold">Accommodation: </span>{" "}
                    {date.accommodation}
                  </p>
                  <p class="font-normal text-gray-700">
                    {" "}
                    <span className="font-bold">Activities:</span>{" "}
                    {date.activities}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
