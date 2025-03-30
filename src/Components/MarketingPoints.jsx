export default function MarketingPoints() {
  const marketingPoints = [
    {
      id: "01",
      title: "Trusted Reviews",
      description:
        "94% of patients check online reviews before choosing a doctor.",
      icon: "https://img.icons8.com/ios/48/trust.png",
    },
    {
      id: "02",
      title: "Email Engagement",
      description:
        "21% is the average email open rate in healthcare—it’s a great way to stay connected.",
      icon: "https://img.icons8.com/ios/48/email.png",
    },
    {
      id: "03",
      title: "Call Challenges",
      description:
        "32% of people say phone calls are frustrating—patients prefer quick, online options.",
      icon: "https://img.icons8.com/ios/48/phone.png",
    },
    {
      id: "04",
      title: "Social Insights",
      description:
        "Over 90% of people use social media to find health information.",
      icon: "https://img.icons8.com/ios/48/share.png",
    },
  ];

  return (
    <div className=" py-16 px-6 md:px-12 xl:ml-46 xl:mr-46">
      <div className="text-center ">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Does Your Medical{" "}
          <span className="text-purple-600">Brand Need Marketing?</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Patients today make most of their healthcare decisions online. Here’s
          why marketing is key:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {marketingPoints.map((point) => (
          <div
            key={point.id}
            className="bg-white p-6 rounded-xl shadow-md flex gap-4 items-center relative"
          >
            <img src={point.icon} alt={point.title} className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
            <span className="absolute text-gray-200 text-5xl font-bold right-4 top-4">
              {point.id}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
          Boost Patient Reach Now →
        </button>
      </div>
    </div>
  );
}
