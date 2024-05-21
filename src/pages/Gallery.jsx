/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const galleryImages = [
    `${process.env.PUBLIC_URL}/trips/Anuradhapura.jpg`,
    `${process.env.PUBLIC_URL}/trips/Arugam_Bay.jpg`,
    `${process.env.PUBLIC_URL}/trips/Casurina_Beach.jpeg`,
    `${process.env.PUBLIC_URL}/trips/coconut_tree_hill.jpg`,
    `${process.env.PUBLIC_URL}/trips/Dambulla_Cave_Temple.jpg`,
    `${process.env.PUBLIC_URL}/trips/damro.jpg`,
    `${process.env.PUBLIC_URL}/trips/Dutch_Fort.jpg`,
    `${process.env.PUBLIC_URL}/trips/elephant_pass.jpg`,
    `${process.env.PUBLIC_URL}/trips/Ella.jpg`,
    `${process.env.PUBLIC_URL}/trips/Ellawala_waterfalls.jpeg`,
    `${process.env.PUBLIC_URL}/trips/Fort_Hammenheil.jpg`,
    `${process.env.PUBLIC_URL}/trips/Galle_Fort.jpg`,
    `${process.env.PUBLIC_URL}/trips/Gangaramaya_Temple.jpg`,
    `${process.env.PUBLIC_URL}/trips/Gregory_Lake.jpg`,
    `${process.env.PUBLIC_URL}/trips/hakgala_garden.jpg`,
    `${process.env.PUBLIC_URL}/trips/Hiriketiya-Beach.jpg`,
    `${process.env.PUBLIC_URL}/trips/Jaffna_Library.jpg`,
    `${process.env.PUBLIC_URL}/trips/Kalpitiya_Fort.jpg`,
    `${process.env.PUBLIC_URL}/trips/Kandy_Cultural_Dance.jpg`,
    `${process.env.PUBLIC_URL}/trips/kandy_view.jpg`,
    `${process.env.PUBLIC_URL}/trips/Koneswaram_temple.jpg`,
    `${process.env.PUBLIC_URL}/trips/Little_Adam.jpg`,
    `${process.env.PUBLIC_URL}/trips/Madu-River.jpg`,
    `${process.env.PUBLIC_URL}/trips/mirissa-bay.jpg`,
    `${process.env.PUBLIC_URL}/trips/Negombo_Beach.jpg`,
    `${process.env.PUBLIC_URL}/trips/Nilaveli_Beach (2).jpg`,
    `${process.env.PUBLIC_URL}/trips/nineArch.jpg`,
    `${process.env.PUBLIC_URL}/trips/nuwara_eliya_post_office.jpg`,
    `${process.env.PUBLIC_URL}/trips/Pigeon_Island.jpg`,
    `${process.env.PUBLIC_URL}/trips/pinnawala.jpg`,
    `${process.env.PUBLIC_URL}/trips/Scuba_Diving.jpg`,
    `${process.env.PUBLIC_URL}/trips/sigiriya.jpg`,
    `${process.env.PUBLIC_URL}/trips/templeTooth.jpg`,
    `${process.env.PUBLIC_URL}/trips/yala.jpg`,
    `${process.env.PUBLIC_URL}/trips/whale-watching.jpg`,
  ];

  return (
    <div>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {galleryImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full lg:h-[400px] h-[300px] object-cover"
            />
          </div>
        ))}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
      >
        {galleryImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Gallery Thumbnail ${index + 1}`}
              className="w-full lg:h-28 h-24 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
