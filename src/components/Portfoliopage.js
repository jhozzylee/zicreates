import React, { useState, useRef, useEffect } from "react";

const filters = [
  "All",
  "Branding",
  "Websites",
  "Designs",
  "Motion Designs",
  "Product Designs",
];

const portfolioItems = [
  {
    id: 1,
    type: "Branding",
    media: "image",
    src: "/assets/project1.jpg",
    brand: "Luma Store",
    caption: "Brand identity and packaging design.",
  },
  {
    id: 2,
    type: "Websites",
    media: "image",
    src: "/assets/project2.jpg",
    brand: "TechNest",
    caption: "Website redesign for tech startup.",
  },
  {
    id: 3,
    type: "Motion Designs",
    media: "video",
    src: "/assets/motion1.mp4",
    brand: "Nova App",
    caption: "App promo motion graphic video.",
  },
  {
    id: 4,
    type: "Product Designs",
    media: "image",
    src: "/assets/project2.jpg",
    brand: "TechNest",
    caption: "Website redesign for tech startup.",
  },
  {
    id: 5,
    type: "Designs",
    media: "video",
    src: "/assets/motion1.mp4",
    brand: "Nova App",
    caption: "App promo motion graphic video.",
  },
  {
    id: 6,
    type: "Motion Designs",
    media: "video",
    src: "/assets/motion1.mp4",
    brand: "Nova App",
    caption: "App promo motion graphic video.",
  },
  {
    id: 7,
    type: "Designs",
    media: "image",
    src: "/assets/project2.jpg",
    brand: "TechNest",
    caption: "Website redesign for tech startup.",
  },
  {
    id: 8,
    type: "Branding",
    media: "image",
    src: "/assets/project1.jpg",
    brand: "Luma Store",
    caption: "Brand identity and packaging design.",
  },
  {
    id: 9,
    type: "Websites",
    media: "image",
    src: "/assets/project2.jpg",
    brand: "TechNest",
    caption: "Website redesign for tech startup.",
  },
  {
    id: 10,
    type: "Motion Designs",
    media: "video",
    src: "/assets/motion1.mp4",
    brand: "Nova App",
    caption: "App promo motion graphic video.",
  },
];

const Portfoliopage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const buttonRefs = useRef([]);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeFilter);

  useEffect(() => {
    const index = filters.indexOf(activeFilter);
    if (buttonRefs.current[index]) {
      buttonRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeFilter]);

  return (
    <section className="bg-background text-neutral py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Our Creative Footprints
        </h2>

        {/* Filter Buttons */}
        <div className="overflow-x-auto">
          <div className="flex justify-start md:justify-center gap-3 mb-12 whitespace-nowrap scroll-smooth px-1">
            {filters.map((filter, index) => (
              <button
                key={filter}
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 md:px-8 py-2 rounded-full border text-xs md:text-sm font-light transition-all duration-200 ease-in-out ${
                  activeFilter === filter
                    ? "bg-primary text-background border-primary"
                    : "border-neutral text-neutral hover:text-primary hover:border-primary hover:bg-primary/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
            >
              <div className="aspect-video bg-black">
                {item.media === "video" ? (
                  <video
                    className="w-full h-full object-cover"
                    src={item.src}
                    controls
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={item.src}
                    alt={item.brand}
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold font-poppins mb-1">
                  {item.brand}
                </h3>
                <p className="text-sm text-neutral/80">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfoliopage;
