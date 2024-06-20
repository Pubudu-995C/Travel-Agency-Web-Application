import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Polonnaruwa from "../../images/wallpapers/polonnaruwa.jpeg";
import { Breadcrumbs } from "@material-tailwind/react";
import ContactForm from "../Contact-Form";
import Gallery from "../Gallery";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import WhatsApp from "../../components/WhatsApp";

export default function SixtyDays() {
  const [activeTab, setActiveTab] = useState("overview");

  const dateList = [
    {
      day: `Day 1, 2 & 3 in Negombo`,
      topic: `Airport to Negombo`,
      img: `./trips/Negombo_Beach.jpg`,
      detail: `Nestled along Sri Lanka's western coast, Negombo captivates with its serene Negombo Lagoon, where tranquility meets the gentle lull of waters. Just steps away lies Negombo Beach, where golden sands stretch lazily under the tropical sun. Nearby, the historic Negombo Dutch Fort stands as a testament to colonial legacy, echoing tales of a bygone era. Amidst this cultural tapestry, St. Mary's Church adds a spiritual allure with its elegant architecture. As dusk descends, retreat to a cozy hotel, where comfort awaits for an overnight stay, promising relaxation and rejuvenation amidst the charm of Negombo's coastal allure.`,
      accommodation: `As Your Request`,
      activities: `Negombo Lagoon - Negombo Beach - Negombo Dutch Fort - St. Mary's Church - Overnight Stay in a Hotel at Negombo`,
    },
    {
      day: `Day 4 & 5 in Chilaw`,
      topic: `Negombo to Chilaw`,
      img: `./trips/Munneswaram.jpg`,
      detail: `Explore the cultural and natural beauty of Chilaw, beginning with a visit to the Munneswaram Hindu Temple, a historic site rich in tradition. Next, enjoy the serene Chilaw Lagoon, perfect for a tranquil escape. Discover the diverse wildlife at the Anawilundawa Wetland Sanctuary, a haven for bird watchers and nature enthusiasts. Relax on the pristine sands of Silver Beach Chilaw, ideal for a peaceful afternoon by the sea. End your day with an overnight stay at a comfortable hotel in Chilaw, ensuring a restful night before more adventures. This itinerary offers a blend of spiritual, natural, and leisure experiences.`,
      accommodation: `As Your Request`,
      activities: `Munneswaram Hindu Temple - Chilaw Lagoon - Anawilundawa Wetland Sanctuary - Silver Beach Chilaw - Overnight Stay in a Hotel at Chilaw`,
    },
    {
      day: `Day 6 & 7 in Puttalam`,
      topic: `Chilaw to Puttalam`,
      img: `./trips/Thabbowa_Sanctuary.jpg`,
      detail: `Our itinerary includes a series of captivating destinations, beginning with the Turtle Watching Point and the ancient Bio Bab Tree, followed by the historical Kudiramalai and the legendary Queen Kuweni's Palace. We'll then explore the serene Mangrove Beach before visiting the ancient Anamaduwa Paramakanda Cave Temple. Afterward, we'll relax at the Eluwankulama Bath Point and experience the vibrant atmosphere of the Thoduwawa fishing beach. We'll also visit the revered Upulwehera Rajama Viharaya (Ancient Temple) and the significant St. Anne's National Shrine in Thalawila. Finally, we'll enjoy the tranquil beauty of Neelabemma before concluding our day with an overnight stay in a hotel at Puttalam.`,
      accommodation: `As Your Request`,
      activities: `Turtle Watching point - Bio bab tree - Kudiramalai - Queen Kuweni's Palace - Mangrove Beach - Anamaduwa Paramakanda Cave Temple - Eluwankulama Bath Point - Thoduwawa fishing beach - Upulwehera Rajama Viharaya (Ancient Temple) - St. Anne's National Shrine (Thalawila) - Neelabemma - Overnight Stay in a Hotel at Puttalam`,
    },
    {
      day: `Day 8 & 9 in Kalpitiya`,
      topic: `Puttalam to Kalpitiya`,
      img: `./trips/Kalpitiya_Fort.jpg`,
      detail: `During your trip to Kalpitiya, you can start by exploring the serene Thalawila Beach and Uchchimuni Beach, both offering tranquil spots for relaxation. Next, visit Baththalangunduwa, a picturesque island ideal for a peaceful retreat. For adventure seekers, the Kappalady Kite Lagoon provides perfect conditions for kite surfing. Immerse yourself in history with a visit to the Kalpitiya Dutch Church and the iconic Kalpitiya Dutch Fort, both reflecting the area's colonial past. Enjoy the scenic beauty of the Puttalam Lagoon, a haven for birdwatchers, before unwinding at the pristine Kudawa Beach. After a day filled with diverse experiences, spend the night at a comfortable hotel in Kalpitiya, resting and rejuvenating for the next day's adventures.`,
      accommodation: `As Your Request`,
      activities: `Thalawila Beach - Uchchimuni beach - Baththalangunduwa - Kappalady Kite Lagoon - Kalpitiya Dutch Church - Puttalam Lagoon - Kudawa beach - Kalpitiya Dutch Fort - Overnight Stay in a Hotel at Kalpitiya`,
    },
    {
      day: `Day 10, 11 & 12 in Wilpattu`,
      topic: `Kalpitiya to Wilpattu`,
      img: `./trips/wilpattu_national_park.jpg`,
      detail: `Wilpattu National Park offers a captivating experience for nature enthusiasts seeking an overnight stay. Nestled within its vast, wildlife-rich expanse, visitors can find a range of hotels that provide comfortable accommodations amidst the serene beauty of the park. An overnight stay in Wilpattu allows guests to fully immerse themselves in the natural surroundings, offering the opportunity to experience the park's diverse flora and fauna both during the day and under the stars. Whether it's the thrill of spotting elusive leopards or the tranquility of the park's numerous lakes, staying overnight at Wilpattu ensures a memorable and enchanting encounter with nature.`,
      accommodation: `As Your Request`,
      activities: `Wilpattu National Park - Overnight Stay in a Hotel at Wilpattu`,
    },
    {
      day: `Day 13 & 14 in Mannar`,
      topic: `Wilpattu to Mannar`,
      img: `./trips/Mannar_Bird_Sanctuary.jpg`,
      detail: `A visit to Mannar Island offers a rich tapestry of historical and natural attractions. One can begin their journey at the Shrine of Our Lady of Madhu, a revered pilgrimage site, before exploring the ancient Thanthirimale, known for its historical significance. The Doric at Arippu presents a glimpse into colonial architecture, while the Baobab Tree stands as a unique natural landmark. Mannar Fort, a relic of Portuguese and Dutch colonialism, provides a historical backdrop to the island. Yoda Wewa, an ancient irrigation reservoir, showcases the island's historical ingenuity in water management. The enigmatic Adams Bridge, also known as Rama's Bridge, adds a touch of mythological intrigue. The Thiruketheeswaram Kovil, a sacred Hindu temple, further enriches the spiritual landscape of Mannar. For nature enthusiasts, the Mannar Bird Sanctuary offers an opportunity to observe diverse avian species in their natural habitat. After a day of exploration, an overnight stay in a local hotel provides a restful conclusion to an eventful itinerary on Mannar Island.`,
      accommodation: `As Your Request`,
      activities: `Shrine Of Our Lady Of Madhu - Mannar Island - Thanthirimale - The Doric At Arippu - Baobab Tree - Mannar Fort - Yoda Wewa - Adams Bridge - Thiruketheeswaram Kovil - Mannar Bird Sanctuary - Overnight Stay in a Hotel at Mannar`,
    },
    {
      day: `Day 15, 16, 17 & 18 in Jaffna`,
      topic: `Mannar to Jaffna`,
      img: `./trips/Dutch_Fort.jpg`,
      detail: `During your visit to Jaffna, immerse yourself in the rich culture and history by exploring Nallur Kandaswamy Kovil, a vibrant temple known for its grand festivals. Continue to the Jaffna Public Library, a symbol of resilience and knowledge. Discover the Dutch Fort's colonial architecture, and relax at the serene Casuarina Beach. Experience local life at the bustling Jaffna Market, and find tranquility at Nagadeepa Temple. Fort Hammenhiel offers a unique historical site, while Elephant Pass provides stunning views and significant history. Enjoy the pristine sands of Mullaitivu Beach and the natural beauty of Chundikulam Beach. Delve into the region's past at the Puthukkudiyiruppu War Museum, and visit Nayaru Rajamaha Viharaya for a spiritual experience. Old Chemmalai Beach and the distinctive Black Sand Beach offer picturesque spots for relaxation. End your adventure at the scenic Nayaru Beach before enjoying an overnight stay in a comfortable hotel in Jaffna.`,
      accommodation: `As Your Request`,
      activities: `Nallur Kandaswamy Kovil - Jaffna Public Library - Dutch Fort - Casuarina Beach - Jaffna Market - Nagadeepa Temple - Fort Hammenhiel - Elephant Pass - Mullaitivu Beach - Chundikulam Beach side - Puthukkudiyiruppu War Museum - Nayaru Rajamaha Viharaya - Old chemmalai beach - Black Sand Beach - Nayaru Beach - Overnight Stay in a Hotel at Jaffna`,
    },
    {
      day: `Day 19 & 20 in Anuradhapura`,
      topic: `Jaffna to Anuradhapura`,
      img: `./trips/Ruwanweli-Maha-Seya.jpg`,
      detail: `In Anuradhapura, a visit to Ruwanweli Maha Seya offers a glimpse into ancient Buddhist architecture, while the nearby Ranmasu Uyana (Royal Pleasure Gardens) reveals the leisurely pursuits of royalty. The Isurumuniya Rajamaha Viharaya, renowned for its exquisite stone carvings, adds to the cultural richness. Jathika Namal Uyana, a sanctuary famous for its ironwood forest and pink quartz mountain, provides a natural retreat. The sacred Sri Maha Bodhi tree, a revered pilgrimage site, is a symbol of spiritual heritage. Lovamahapaya, once a grand nine-story structure, stands testament to ancient construction prowess. Eth Pokuna (Elephant Pond), an ancient reservoir, showcases advanced hydraulic engineering. The Jetavanarama Museum houses significant archaeological artifacts, adding depth to the historical exploration. Nature enthusiasts can explore the diverse wildlife at Horowpathana National Park. Rathna Prasadaya, an ancient monastic complex, further enriches the historical narrative. An overnight stay in a hotel at Anuradhapura ensures a comfortable conclusion to this immersive cultural journey.`,
      accommodation: `As Your Request`,
      activities: `Ruwanweli Maha Seya - Ranmasu Uyana (Royal Pleasure Gardens) - Isurumuniya Rajamaha Viharaya - Jathika Namal Uyana - Sri Maha Bodhi - Lovamahapaya - Eth Pokuna (Elephant Pond) - Jetavanarama Museum - Horowpathana National Park - Rathna Prasadaya - Overnight Stay in a Hotel at Anuradhapura`,
    },
    {
      day: `Day 21 & 22 in Polonnaruwa`,
      topic: `Anuradhapura to Polonnaruwa`,
      img: `./trips/medirigiriya_vatadage.jpg`,
      detail: `During a visit to Polonnaruwa, one can explore numerous historical and natural attractions. Start with the Royal Palace of King Maha Parakramabahu and the serene Nelum Pokuna (Lotus Pond). Marvel at the vast Parakrama Samudra and the ancient Kumara Pokuna. Discover the grandeur of the Palace of King Nishshanka Malla and the sacred Hindu Temple God Shiva Devalaya. Enjoy the wildlife at Minneriya National Park and Kaudulla National Park. Visit the Medirigiriya Vatadageya and the impressive Polonnaruwa Gal Viharaya. Explore the unique Nissankalata Mandapa and the ancient library at Pothgul Viharaya. Relax by the Piburettewa Tank and experience the tranquility of Somawathiya National Park. End the day with an overnight stay in a hotel at Polonnaruwa, immersed in the region's rich heritage and natural beauty.`,
      accommodation: `As Your Request`,
      activities: `Royal Palace of King Maha Parakramabahu - Polonnaruwa Nelum pokuna (Lotus Pond) - Parakrama Samudra - Kumara Pokuna - Palace of King Nishshanka Malla - Hindu Temple God Shiva Devalaya - Minneriya National Park - Medirigiriya Vatadageya - Kaudulla National Park - Polonnaruwa Gal Viharaya - Nissankalata Mandapa - Pothgul Viharaya - Piburettewa Tank - Somawathiya National Park - Overnight Stay in a Hotel at Polonnaruwa`,
    },
    {
      day: `Day 23 & 24 in Trincomalee`,
      topic: `Polonnaruwa to Trincomalee`,
      img: `./trips/Pigeon_Island.jpg`,
      detail: `Trincomalee, a gem on Sri Lanka's northeastern coast, offers a plethora of attractions for visitors. Start your exploration at the pristine Nilaveli Beach, and take a short boat ride to the Pigeon Island Marine National Park, renowned for its vibrant coral reefs and diverse marine life. Nature enthusiasts can visit the Naval Headworks Sanctuary, a haven for wildlife, while history buffs might appreciate the Sampoor Lighthouse and the ancient Fort Frederick. For those seeking serenity, Arisimale and Marble Beaches provide perfect spots for relaxation. Pay respects at the Trincomalee War Cemetery, and immerse yourself in spirituality at the Shri Badrakali Amman Temple and the Sri Thirukoneswaram Kovil. The scenic Lovers Leap offers breathtaking views, and a visit to Uppuveli Beach or the Trincomalee Lagoon Park can round off your day. After an eventful day, enjoy an overnight stay in a comfortable hotel in Trincomalee, ensuring a restful end to your adventures.`,
      accommodation: `As Your Request`,
      activities: `Nilaveli Beach - Pigeon Island Marine National Park - Naval Headworks Sanctuary - Sampoor Lighthouse - Arisimale Beach - Fort Frederick - Marble Beach - Trincomalee War Cemetery - Shri Badrakali Amman Temple - Lovers Leap - Sri Thirukoneswaram Kovil - Uppuveli Beach - Trincomalee Lagoon Park - Overnight Stay in a Hotel at Trincomalee`,
    },
    {
      day: `Day 25 & 26 in Sigiriya`,
      topic: `Trincomalee to Sigiriya`,
      img: `./trips/Sigiriya_Rock.jpg`,
      detail: `A visit to Sigiriya offers a diverse and enriching experience, beginning with the iconic Sigiriya Rock Fortress, also known as Lion Rock, a marvel of ancient engineering and artistry. Complementing this historical site is the Sigiriya Museum, which provides insightful exhibits about the fortress's past. The lush Royal Gardens of Sigiriya further enhance the area's beauty. Nature enthusiasts can explore Minneriya National Park and Kaudulla National Park, both renowned for their wildlife, especially elephants. A hike up Pidurangala Rock rewards adventurers with stunning views of Sigiriya Rock. To immerse in local culture, the Sigiriya Village Tour offers a glimpse into traditional Sri Lankan life. The serene Kaludiya Pokuna and the historic Dambulla Royal Cave Temple and Golden Temple add to the region's rich cultural tapestry. After a day of exploration, an overnight stay in a hotel at Sigiriya provides a perfect end to the journey, offering comfort and rest amid this historical and natural paradise.`,
      accommodation: `As Your Request`,
      activities: `Sigiriya Rock Fortress (Lion Rock) - Sigiriya Museum - Royal Gardens of Sigiriya - Minneriya National Park - Pidurangala Rock - Kaudulla National Park - Sigiriya Village Tour - Kaludiya Pokuna - Dambulla Royal Cave Temple and Golden Temple - Overnight Stay in a Hotel at Sigiriya`,
    },
    {
      day: `Day 27, 28, 29 & 30 in Kandy`,
      topic: `Sigiriya to Kandy`,
      img: `./trips/kandy_view.jpg`,
      detail: `Exploring Kandy offers a diverse array of attractions that blend natural beauty, historical landmarks, and cultural experiences. Start your journey at the Kadugannawa Rock View and Rest Area, then visit the iconic Captain Dawson Tower and take a moment at James Tayler's Seat. Immerse yourself in the lush Royal Botanic Gardens before paying respects at the Commonwealth War Cemetery. For panoramic vistas, head to the Kandy view point and the Udawatta Kele Sanctuary. Tea enthusiasts will appreciate the Ceylon Tea Museum, while Bahirawakanda Temple offers a spiritual retreat. The Temple of the Tooth Relic and the National Museum of Kandy provide deep historical insights, and a stroll around Kandy Lake is a serene experience. Witness the vibrant Kandy Cultural Dance Show, and bird lovers should not miss the Hanthana International Bird Park & Recreation Center. Further explorations include the intricate Embekka Dewalaya, the serene Nelligala Buddhist Temple, and the picturesque Kondagala. Conclude your day with an overnight stay in a hotel in Kandy, ensuring a comfortable rest after a day filled with discovery and wonder.`,
      accommodation: `As Your Request`,
      activities: `Kadugannawa Rock View and Rest Area - Captain Dawson Tower - James Tayler's Seat - Royal Botanic Gardens - Commonwealth War Cemetery - Kandy view point - Udawatta Kele Sanctuary - Ceylon Tea Museum - Bahirawakanda Temple - Temple of Tooth Relic - National Museum of Kandy - Kandy Lake - Kandy Cultural Dance Show - Hanthana International Bird Park & Recreation Center - Embekka Dewalaya - Nelligala Buddhist Temple - Kondagala - Overnight Stay in a Hotel at Kandy`,
    },
    {
      day: `Day 31, 32, 33 & 34 in Nuwara Eliya`,
      topic: `Kandy to Nuwara Eliya`,
      img: `./trips/hakgala_garden.jpg`,
      detail: `During my trip to the picturesque region of Nuwara Eliya, I visited several stunning attractions. I began at the Ambuluwawa Tower in Gampola, followed by the mesmerizing Ramboda Waterfalls. The Damro Labookellie Tea Centre offered a delightful tea-tasting experience. Gregory Lake provided serene views, and the historic Nuwara Eliya Post Office stood as a charming reminder of the colonial era. The Seetha Eliya Temple added a touch of spirituality to my journey. I was captivated by the natural beauty of Bomburu Ella and the panoramic vistas from Lipton Seat. Victoria Park and Hakgala Botanical Garden showcased the region's lush flora, while Moon Plains offered breathtaking landscapes. The Pedro Tea Factory provided insights into tea production, and Galway's Land National Park was a haven for birdwatchers. A visit to Ambewela Farm concluded my day before an overnight stay at a cozy hotel in Nuwara Eliya.`,
      accommodation: `As Your Request`,
      activities: `Ambuluwawa Tower (Gampola) - Ramboda Waterfalls - Damro Labookellie Tea Centre - Gregory Lake - Nuwara Eliya Post Office - Seetha Eliya Temple - Bomburu Ella - Lipton Seat - Victoria Park Nuwara Eliya - Hakgala Botanical Garden - Moon Plains - Pedro Tea Factory - Galway's Land National Park - Ambewela Farm - Overnight Stay in a Hotel at Nuwara Eliya`,
    },
    {
      day: `Day 35, 36, 37, 38 & 39 in Ella`,
      topic: `Nuwara Eliya to Ella`,
      img: `./trips/Ella.jpg`,
      detail: `Ella, a charming town in Sri Lanka, offers a plethora of attractions for an unforgettable adventure. Start your journey with a hike up Little Adam's Peak, providing breathtaking views of the surrounding landscape. Explore the historical Ravana's Cave before embarking on the Ella Rock Trailhead for a more challenging trek. Cool off at the picturesque Bambarakanda Falls, Sri Lanka's tallest waterfall. Don't miss the iconic Nine Arches Bridge, a marvel of colonial engineering, and the stunning Ravana Falls. For thrill-seekers, the Flying Ravana Mega Zipline offers an exhilarating experience. Visit Lipton's Seat for panoramic views of lush tea plantations, and marvel at the cascading waters of Diyaluma Falls. Discover the hidden gem of Nil Diya Pokuna, an underground pond with crystal-clear waters. Conclude your adventure with an overnight stay at a cozy hotel in Ella, recharging for another day of exploration.`,
      accommodation: `As Your Request`,
      activities: `Little adam's peak - Ravana's Cave - Ella Rock Trailhead - Bambarakanda Falls - Nine Arches Bridge - Ravana Falls - Flying Ravana Mega Zipline - Lipton's Seat - Diyaluma Falls - Nil Diya Pokuna - Overnight Stay in a Hotel at Ella`,
    },
    {
      day: `Day 40 in Wellawaya`,
      topic: `Ella to Wellawaya`,
      img: `./trips/Ellawala_waterfalls.jpeg`,
      detail: `Embark on an enchanting journey through Sri Lanka's natural and cultural wonders, beginning with the majestic Visari Water Falls, where the crystalline waters cascade amidst lush greenery, creating a serene oasis. Next, delve into the ancient mysteries at Buduruwagala Rock Carvings, where towering stone figures whisper tales of bygone eras. Then, surrender to the allure of Ellewala Waterfall, its cascading torrents inviting moments of tranquil reflection. A spiritual interlude awaits at Rakkiththa Kanda Rajamaha Viharaya, where the echoes of devotion reverberate through the sacred grounds. As night descends, find solace and comfort in an overnight stay at a hotel nestled in the heart of Wellawaya, where the day's adventures blend seamlessly with dreams of tomorrow's explorations.`,
      accommodation: `As Your Request`,
      activities: `Visari Water Falls - Buduruwagala Rock Cavings - Ellewala waterfall - Rakkiththa Kanda Rajamaha Viharaya - Overnight Stay in a Hotel at Wellawaya`,
    },
    {
      day: `Day 41 & 42 in Udawalawa`,
      topic: `Wellawaya to Udawalawa`,
      img: `./trips/Udawalawe_elephant.jpg`,
      detail: `Embarking on a memorable journey amidst the wild wonders of nature, our adventure unfolds within the breathtaking confines of Udawalawe National Park. As twilight descends, we find respite and luxury intertwined, nestled in an inviting hotel perched amidst the verdant expanse of Udawalawa. With the rhythmic symphony of the wilderness serenading us, our overnight stay promises a sanctuary of comfort and tranquility, offering a seamless blend of modern amenities and rustic charm. From the thrill of safari expeditions to moments of serene contemplation under the star-studded canopy, each passing hour is an ode to the untamed beauty that envelops us. In this haven of relaxation and exploration, our spirits soar as we immerse ourselves in the wonders of the Sri Lankan wilderness, creating memories to be cherished for a lifetime.`,
      accommodation: `As Your Request`,
      activities: `Udawalawe National Park - Overnight Stay in a Hotel at Udawalawa`,
    },
    {
      day: `Day 43 & 44 in Yala`,
      topic: `Udawalawa to Yala`,
      img: `./trips/yala.jpg`,
      detail: `On your trip to Yala National Park, you will begin by exploring the vast wilderness and diverse wildlife that this renowned park has to offer. Following this adventure, you will visit the ancient Sithulpawwa Rajamaha Viharaya, a historic rock temple with significant Buddhist heritage and stunning views of the surrounding area. Next, you will head to the sacred Kataragama temple, a revered pilgrimage site that attracts devotees from various religious backgrounds. To conclude the day, you will enjoy an overnight stay in a comfortable hotel at Yala, allowing you to relax and reflect on the day's experiences.`,
      accommodation: `As Your Request`,
      activities: `Yala National Park - Sithulpawwa Rajamaha Viharaya - Kataragama temple - Overnight Stay in a Hotel at Yala`,
    },
    {
      day: `Day 45 & 46 in Pottuvil`,
      topic: `Yala to Pottuvil`,
      img: `./trips/Arugam_Bay.jpg`,
      detail: `Arugam Bay Beach, a renowned surf destination, is the perfect starting point for an adventure that includes visits to several nearby attractions. Begin your journey by exploring the breathtaking surf breaks that draw enthusiasts from around the globe. Next, immerse yourself in the natural beauty and wildlife of Kumana National Park, where you can experience the diverse flora and fauna of the region. Don't miss the chance to visit the ancient Muhudu Maha Vihara, a historical temple offering a glimpse into the rich cultural heritage of Sri Lanka. After a day of exploration, unwind with an overnight stay in a comfortable hotel at Pottuvil, ensuring a restful end to your action-packed day.`,
      accommodation: `As Your Request`,
      activities: `Arugam Bay Beach - Kumana National Park - Surf Breaks - Muhudu Maha Vihara - Overnight Stay in a Hotel at Pottuvil`,
    },
    {
      day: `Day 47 & 48 in Hambantota`,
      topic: `Pottuvil to Hambantota`,
      img: `./trips/Mirijjawila_Botanical_Garden.jpg`,
      detail: `During a trip to Hambantota, you can explore the diverse attractions the area has to offer, starting with the Dry Zone Botanic Gardens in Mirijjawila, where you can discover a variety of drought-resistant plant species. Following this, a visit to the Ridiyagama Safari Park will provide an exciting opportunity to observe wildlife in a natural setting. Next, you can relax and rejuvenate at the Madunagala Hot Springs. For those interested in agricultural innovations, the Bataatha Agro Technology and Tourism Park offers a fascinating glimpse into modern farming techniques. Bird enthusiasts will appreciate the Birds Park and Birds Research Center in Hambantota, which houses a wide range of avian species. To top off your adventure, enjoy an overnight stay at a hotel in Hambantota, ensuring a comfortable and restful end to your day of exploration.`,
      accommodation: `As Your Request`,
      activities: `Dry Zone Botanic Gardens (Mirijjawila) - Ridiyagama Safari Park - Madunagala Hot Springs - Bataatha Agro Technology and Tourism Park - Birds Park / Birds Research Center Hambantota - Overnight Stay in a Hotel at Hambantota`,
    },
    {
      day: `Day 49 & 50 in Tangalle`,
      topic: `Hambantota to Tangalle`,
      img: `./trips/Hiriketiya-Beach.jpg`,
      detail: `Tangalle, a coastal paradise in Sri Lanka, boasts several stunning beaches. Tangalle Beach offers serene shores perfect for relaxation. Nearby, Hiriketiya Beach, known for its horseshoe bay, is a haven for surfers and swimmers. Rekawa Beach, a sanctuary for marine life, is renowned for its sea turtle nesting sites. Silent Beach, true to its name, provides a tranquil escape from the crowds. After a day of exploring these picturesque beaches, enjoy an overnight stay in one of Tangalle’s charming hotels, ensuring a restful end to a day filled with the natural beauty and tranquility of Sri Lanka’s southern coastline.`,
      accommodation: `As Your Request`,
      activities: `Tangalle Beach - Hiriketiya Beach - Rekawa Beach - Silent Beach - Overnight Stay in a Hotel at Tangalle`,
    },
    {
      day: `Day 51 & 52 in Mirissa`,
      topic: `Tangalle to Mirissa`,
      img: `./trips/coconut_tree_hill.jpg`,
      detail: `Coconut Tree Hill in Mirissa offers stunning panoramic views of the coastline, making it a perfect spot for photography and relaxation. Mirissa Bay's tranquil waters are ideal for swimming and sunbathing. Nearby, the vibrant fish market showcases the daily catch, providing an authentic glimpse into the local fishing culture. For adventure seekers, whale and dolphin watching tours are a must, offering a chance to see these magnificent creatures up close. After a day of exploration, unwind with an overnight stay at a comfortable hotel in Mirissa, ensuring a restful end to a day filled with unforgettable experiences.`,
      accommodation: `As Your Request`,
      activities: `Coconut Tree Hill - Mirissa Bay - Fish Market - Whale watching - Dolphin Watching - Overnight Stay in a Hotel at Mirissa`,
    },
    {
      day: `Day 53 & 54 in Galle`,
      topic: `Mirissa to Galle`,
      img: `./trips/Galle_Fort.jpg`,
      detail: `Explore the rich tapestry of Galle, Sri Lanka, where history meets nature in a captivating blend. Wander through the ancient cobblestone streets of Galle Dutch Fort, a UNESCO World Heritage Site, echoing tales of colonial legacy. Ascend the towering Galle Lighthouse for panoramic vistas of the azure ocean. Immerse yourself in conservation efforts at the Sea Turtle Hatchery Centre, marveling at these gentle creatures. Find serenity at the Japanese Peace Pagoda, a symbol of tranquility amidst lush surroundings. Sink your toes into the golden sands of Unawatuna Beach and the secluded oasis of Jungle Beach. Discover biodiversity at Rumassala Sanctuary, a haven for wildlife enthusiasts. Indulge in history at the Old Dutch Hospital and Maritime Museum, weaving narratives of maritime heritage. Conclude your day with an overnight stay in a cozy hotel, completing an unforgettable journey through Galle's wonders.`,
      accommodation: `As Your Request`,
      activities: `Galle Dutch Fort - Lighthouse - Sea Turtle Hatchery Centre - Japanese Peace Pagoda - Unawatuna Beach - Jungle Beach - Rumassala Sanctuary - Old Dutch Hospital - Maritime Museum - Overnight Stay in a Hotel at Galle`,
    },
    {
      day: `Day 55 & 56 in Bentota`,
      topic: `Galle to Bentota`,
      img: `./trips/Madu-River-Safari.jpg`,
      detail: `During your stay in Bentota, you can explore the enchanting Cinnamon Island, where the spice's rich history and cultivation are showcased. Visit the Bentota Turtle Hatchery, dedicated to the conservation of sea turtles, where you can witness the efforts to protect these magnificent creatures. Embark on a serene Madu River Safari, navigating through mangroves and spotting diverse wildlife. Wander through the lush Brief Garden, a picturesque landscape designed by Bevis Bawa, offering a tranquil escape. Enjoy the sun and surf at Bentota Beach, renowned for its golden sands and clear waters. After a day filled with adventures, relax and unwind with an overnight stay in a comfortable hotel in Bentota, completing your perfect coastal retreat.`,
      accommodation: `As Your Request`,
      activities: `Cinnamon Island - Bentota Turtle Hatchery - Madu River Safari - Brief Garden - Bentota Beach - Overnight Stay in a Hotel at Bentota`,
    },
    {
      day: `Day 57, 58 & 59 in Colombo`,
      topic: `Bentota to Colombo`,
      img: `./trips/Gangaramaya_Temple.jpg`,
      detail: `During your visit to Colombo, start with the vibrant Colombo Red Mosque, known for its striking red and white candy-striped facade. Next, marvel at the panoramic views from the Lotus Tower, the tallest structure in South Asia. Delve into Sri Lanka's rich history at the National Museum of Colombo, housing a vast collection of artifacts. For nature enthusiasts, the Attidiya Bird Sanctuary offers a serene escape with its diverse avian population, while the Dehiwala Zoological Gardens present a delightful array of wildlife. The Old Galle Buck Lighthouse stands as a historic beacon, guiding ships to safety. Experience spiritual tranquility at the Gangarama Temple and the Kelaniya Raja Maha Viharaya, both renowned for their intricate architecture and serene ambiance. Reflect on Sri Lanka's journey to independence at Independence Square, an iconic symbol of freedom. Unwind at the picturesque Mount Lavinia Beach, famous for its golden sands and azure waters. After a day of exploration, enjoy an overnight stay in a comfortable hotel in Colombo, recharging for more adventures.`,
      accommodation: `As Your Request`,
      activities: `Colombo Red Mosque - Lotus Tower - National Museum of Colombo - Attidiya Bird Sanctuary - Dehiwala Zoological Gardens - Old Galle Buck Lighthouse - Gangarama Temple - Independence Square - Kelaniya Raja Maha Viharaya - Mount Lavinia Beach - Overnight Stay in a Hotel at Colombo`,
    },
    {
      day: `Day 60`,
      topic: `Colombo to Airport`,
      img: `./trips/airplane_landing.jpg`,
      detail: ``,
      accommodation: ``,
      activities: ``,
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="xl:h-[550px] lg:h-[400px] h-[300px]">
          <img
            src={Polonnaruwa}
            className="object-cover w-full h-full"
            alt="Wallpaper"
          />
        </div>
        <div className="p-3 w-full md:flex justify-between bg-[#54B435] 2xl:px-40 xl:px-24 lg:px-20 px-5">
          <p className="xl:text-2xl lg:text-xl md:text-base text-sm font-semibold text-white">
            Sri Lanka Tour 60 Days Package{" "}
            <span className="lg:text-lg text-sm lg:font-bold text-[#F0FF42]">
              (60 Days 59 Nights)
            </span>
          </p>
          <p className="xl:text-2xl lg:text-lg md:text-base text-sm font-medium text-white md:mt-0 mt-2">
            Starting from <span className="font-bold"> USD 8700</span> per
            person
          </p>
        </div>
        {/* ===========Breadcrumbs=========== */}
        <Breadcrumbs className="justify-center">
          <a href="/" className="opacity-60">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/SixtyDays" className="opacity-60 font-bold">
            <span>SIXTY DAYS</span>
          </a>
        </Breadcrumbs>
        {/* ===========Breadcrumbs=========== */}
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:mt-5 mt-0">
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-10 xl:px-14 xl:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "overview" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-10 xl:px-14 xl:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "itinerary" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={`md:m-2 m-1 w-40 md:w-auto lg:px-10 xl:px-14 xl:py-2 py-1 px-8 border-2 lg:text-base text-sm ${
              activeTab === "gallery" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>
        {activeTab === "overview" && (
          <div>
            <div className="flex justify-center my-10 2xl:px-40 xl:px-24 lg:px-20 md:px-5 px-0">
              <iframe
                class="w-full h-[500px]"
                src="https://www.google.com/maps/embed?pb=!1m154!1m12!1m3!1d257482.4575945845!2d80.04408329907383!3d6.331229218258148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m139!3e0!4m5!1s0x3ae2ee9c6bb2f73b%3A0xa51626e908186f3e!2sNegombo!3m2!1d7.2007968!2d79.8736754!4m5!1s0x3ae2c960aa4ecb03%3A0xbc913f96fdb4b8c6!2sChilaw!3m2!1d7.5619894!2d79.8016569!4m5!1s0x3afdaf9ab745254d%3A0xc2daf07c9ca98147!2sPuttalam!3m2!1d8.0259915!2d79.8471272!4m5!1s0x3afd0cc24a7cc5bd%3A0x5ae7ac65637881f0!2sKalpitiya!3m2!1d8.2295281!2d79.7596142!4m5!1s0x3afdac7787e4bc27%3A0xcdd9a0715dad187c!2sWilpattu%20National%20Park!3m2!1d8.4581819!2d80.0518306!4m5!1s0x3afe7601bad9466d%3A0xc5dfe091c45e7d15!2sMannar!3m2!1d8.9809743!2d79.90441489999999!4m5!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!3m2!1d9.6614981!2d80.02554649999999!4m5!1s0x3afcf4f99360e159%3A0xc111fe9ebc6dcf0e!2sAnuradhapura!3m2!1d8.311351799999999!2d80.4036508!4m5!1s0x3afb44ba3b16ce27%3A0xc34997a2b3032b7c!2sPolonnaruwa!3m2!1d7.9403384!2d81.0187984!4m5!1s0x3afbbcb6902dbe27%3A0x7de76a7a331b0fbb!2sTrincomalee!3m2!1d8.5873638!2d81.2152121!4m5!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!3m2!1d7.954108499999999!2d80.75469799999999!4m5!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!3m2!1d7.2905714999999995!2d80.6337262!4m5!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara%20Eliya!3m2!1d6.9497165999999995!2d80.7891068!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!4m5!1s0x3ae46bb8a80653e9%3A0x92402ae71c50a393!2sWellawaya!3m2!1d6.7377356!2d81.1030573!4m5!1s0x3ae40750763484ed%3A0x302cc7e3f95389b5!2sUdawalawa!3m2!1d6.4184828!2d80.823938!4m5!1s0x3ae5d3a62ffb9359%3A0x3bb623d70b5a3314!2sYala%20National%20Park!3m2!1d6.463961299999999!2d81.47188469999999!4m5!1s0x3ae5a2e72b5f6c1b%3A0x7c144b25af566716!2sPottuvil!3m2!1d6.8752705999999995!2d81.8306334!4m5!1s0x3ae6bcffa57235f7%3A0x36c4af58943f2152!2sHambantota!3m2!1d6.1428829!2d81.12123079999999!4m5!1s0x3ae14afd19b00141%3A0x4045d305f7526bba!2sTangalle!3m2!1d6.0243383!2d80.79407259999999!4m5!1s0x3ae13fce3177dc59%3A0xa2d8a78b36dc9c90!2sMirissa!3m2!1d5.948262!2d80.4715866!4m5!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!3m2!1d6.032894799999999!2d80.2167912!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!5e0!3m2!1sen!2slk!4v1716297798841!5m2!1sen!2slk"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="60 Days Trip"
              ></iframe>
            </div>
            <div className="2xl:px-40 xl:px-24 lg:px-20 py-5">
              <ContactForm />
            </div>
          </div>
        )}
        {activeTab === "itinerary" && (
          <div>
            <div className="grid grid-cols-1 gap-y-10 my-10 2xl:px-40 xl:px-24 lg:px-20 px-5">
              {dateList.map((date, index) => (
                <div class="flex flex-col items-center bg-slate-50 border border-gray-300 rounded-lg shadow lg:flex-row hover:bg-yellow-50 transition-colors duration-300 w-full">
                  <img
                    class="object-cover xl:w-[400px] lg:w-[300px] w-full lg:h-full md:h-[200px] h-[150px] rounded-t-lg lg:rounded-none lg:rounded-s-lg"
                    src={date.img}
                    alt=""
                  />
                  <div class="flex flex-col justify-center p-4 leading-normal w-full h-full">
                    <div className="md:flex items-baseline gap-x-20">
                      <p class="mb-2 lg:text-xl text-lg font-bold tracking-tight text-gray-900">
                        {date.day}
                      </p>
                      <p class="mb-3 xl:text-base text-sm font-medium text-gray-700 italic">
                        {date.topic}
                      </p>
                    </div>
                    <p class="font-normal text-gray-700 xl:text-base text-sm text-justify">
                      {date.detail}
                    </p>
                    <div className="flex flex-col mt-5 lg:text-base text-sm">
                      <p class="font-normal text-gray-700 space-x-5 xl:text-base text-sm">
                        <span className="font-bold ">Accommodation: </span>{" "}
                        <span>{date.accommodation}</span>
                      </p>
                      <p class="font-normal text-gray-700 space-x-5 xl:text-base text-sm">
                        {" "}
                        <span className="font-bold">Activities:</span>
                        <span className="italic font-medium">
                          {date.activities}
                        </span>
                      </p>
                    </div>
                    <div className="flex md:justify-end justify-center mt-5">
                      <button className="bg-[#54B435] lg:px-5 lg:py-1 xl:px-8 xl:py-2 md:px-8 md:py-2 px-5 py-1 rounded mx-5 text-base font-bold text-white">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="2xl:px-40 xl:px-24 lg:px-20 py-5">
              <ContactForm />
            </div>
          </div>
        )}
        {activeTab === "gallery" && (
          <div>
            <div className="2xl:px-40 xl:px-24 lg:px-20 px-0">
              <div className="mt-10 px-5 lg:px-0">
                <Gallery />
              </div>
              <div className="my-10">
                <ContactForm />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <WhatsApp />
      <ScrollToTopButton />
    </div>
  );
}
