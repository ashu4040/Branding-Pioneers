export default function MeetTheMasters() {
  const founders = [
    {
      name: "Arush Thapar",
      role: "Managing Partner",
      image:
        "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg", // Replace with actual image URL
      description:
        "Branding Pioneers was born out of a vision to redefine what it means to create impactful connections between brands and their audiences. I’m Arush Thapar, and as one of the founders, I’ve always believed that a brand isn’t just about its product but the story it tells and the trust it builds. With a team of innovators, we design strategies that don’t just follow trends but set them — ensuring every brand we work with becomes a pioneer in its industry.",
      tilt: "rotate-6", // Tilts image slightly
      icons: [
        { icon: "https://img.icons8.com/ios/50/linkedin.png", link: "#" },
        { icon: "https://img.icons8.com/ios/50/mail.png", link: "#" },
      ],
    },
    {
      name: "Nishu Sharma",
      role: "Managing Partner",
      image:
        "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg", // Replace with actual image URL
      description:
        "Branding Pioneers reflects our belief in leading from the front—breaking barriers and setting benchmarks in the digital marketing space. I’m Nishu Sharma, proud to lead a team driven by creativity, technology, and purpose. Whether it’s SEO, digital campaigns, or influencer collaborations, we’re here to transform ideas into milestones, making your brand visible and unforgettable.",
      tilt: "-rotate-6", // Tilts image in the opposite direction
      icons: [{ icon: "https://img.icons8.com/ios/50/mail.png", link: "#" }],
    },
  ];

  return (
    <div className=" py-16 px-6 md:px-12 xl:ml-46 xl:mr-46">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
          Meet the Masters Behind Successful Healthcare Marketing
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Meet the pioneering minds who founded our company with a vision to
          transform the technology landscape. Their complementary expertise and
          shared passion drive our mission to innovate and create impact.
        </p>
      </div>

      {/* Founders Section */}
      <div className="mt-12 flex flex-col gap-12 md:gap-24">
        {founders.map((founder, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Tilted Image */}
            <div
              className={`relative transition-transform duration-300 hover:scale-105 hover:rotate-0`}
            >
              <img
                src={founder.image}
                alt={founder.name}
                className={`w-64 h-64 object-cover rounded-xl shadow-lg ${founder.tilt}`}
              />
              <div className="absolute -z-10 top-2 left-2 w-64 h-64 bg-purple-300 rounded-xl blur-md"></div>
            </div>

            {/* Founder Info */}
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold">{founder.name}</h3>
              <span className="text-purple-700 text-sm font-semibold bg-purple-200 px-3 py-1 rounded-full inline-block mt-2">
                {founder.role}
              </span>
              <p className="text-gray-600 mt-4">{founder.description}</p>
              <div className="flex gap-4 mt-4">
                {founder.icons.map((icon, idx) => (
                  <a
                    key={idx}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={icon.icon} alt="icon" className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white p-6 rounded-lg shadow-lg">
        {[
          { value: "9+", label: "Years Experience" },
          { value: "80+", label: "Teams of Experts" },
          { value: "2K+", label: "Satisfied Clients" },
          { value: "48K+", label: "Projects Completed" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl font-bold text-purple-700">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-purple-700 text-white py-10 px-6 rounded-lg text-center shadow-lg">
        <h3 className="text-2xl font-bold">
          Ready to Take Your Business to the Next Level?
        </h3>
        <p className="text-purple-200 mt-2">
          Let’s create a winning strategy together! Book your FREE one-on-one
          consultation today and discover how our experts can unlock your growth
          potential.
        </p>
        <button className="mt-4 bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition">
          Let’s Get Started →
        </button>
      </div>
    </div>
  );
}
