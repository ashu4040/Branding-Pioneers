export default function FeaturedCaseStudies() {
  const caseStudies = [
    {
      image:
        "https://tradeciety.com/hubfs/Imported_Blog_Media/Stop-Loss-order.png", // Replace with actual image
      category: "Corporate Hospitals",
      title: "Helping Apollo Reach More Patients Globally",
      description:
        "We helped Apollo Hospital grow its online presence and connect with patients worldwide through smart digital marketing strategies.",
      stats: [
        { label: "Increase in international patient traffic", value: "300%" },
        { label: "Growth in social media followers", value: "250%" },
      ],
    },
    {
      image:
        "https://c8.alamy.com/comp/2H48RXT/candlestick-chart-on-financial-stock-market-on-background-forex-trading-graphic-design-and-stock-market-trading-trend-as-concept-market-analysis-2H48RXT.jpg",
      category: "Corporate Hospitals",
      title: "Transforming Lifecare Hospital’s Digital Presence",
      description:
        "We helped Lifecare Hospitals Kenya build a stronger online presence, engage more effectively with patients, and enhance their digital branding.",
      stats: [
        { label: "Increase in website traffic", value: "200%" },
        { label: "Growth in social media engagement", value: "2x" },
      ],
    },
    {
      image:
        "https://cdn3.vectorstock.com/i/1000x1000/43/92/stock-market-or-forex-trading-graph-in-graphic-vector-23614392.jpg",
      category: "Clinics",
      title: "Transforming Neelkanth Hospital’s Digital Reach",
      description:
        "We helped Neelkanth Hospital enhance its online visibility, connect with patients more efficiently, and expand the reach of its educational content.",
      stats: [
        { label: "Increase in website traffic", value: "220%+" },
        { label: "Growth in social media followers", value: "180%" },
      ],
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/3/VG/QC/WV/49838928/share-market-data.jpg",
      category: "Hospitals",
      title: "Digital Healthcare Evolution for Medanta Hospital",
      description:
        "Enhanced patient engagement and educational outreach with cutting-edge video marketing strategies, improving digital visibility and patient connections.",
      stats: [
        { label: "Increase in video views", value: "400%+" },
        { label: "Growth in engagement on digital platforms", value: "2x" },
      ],
    },
    {
      image:
        "https://img.freepik.com/free-vector/candlestick-trading-chart-background-stock-market_1017-49901.jpg",
      category: "Clinics",
      title: "Elevating Refine Clinic’s Digital Presence",
      description:
        "Boosted clinic engagement, expanded market reach, and boosted online visibility with innovative digital marketing strategies for the aesthetics industry.",
      stats: [
        { label: "Increase in engagement", value: "200%+" },
        { label: "SEO ranking for key services", value: "1st Page" },
      ],
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/022/924/218/non_2x/stock-market-trading-graph-in-red-and-green-color-as-economy-3d-illustration-background-trading-trends-and-economic-development-free-photo.jpg",
      category: "Hospitals",
      title: "Transforming IGEHRC’s Online Presence",
      description:
        "Improved digital visibility, patient engagement, and local reach with smart digital marketing tailored for the eye care industry.",
      stats: [
        { label: "Increase in organic search traffic", value: "250%" },
        { label: "SEO ranking for key eye-care services", value: "Top 5" },
      ],
    },
  ];

  return (
    <section className="p-8 text-center xl:ml-46 xl:mr-46">
      <h2 className="text-3xl font-bold text-gray-800">
        Featured Case Studies
      </h2>
      <p className="text-gray-600 mt-2">
        Explore how we’ve helped businesses achieve remarkable growth through
        innovative solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="text-purple-600 text-sm font-medium mt-4 inline-block">
              {study.category}
            </span>
            <h3 className="text-lg font-semibold mt-2">{study.title}</h3>
            <p className="text-gray-600 mt-2">{study.description}</p>
            <div className="mt-4 space-y-2">
              {study.stats.map((stat, idx) => (
                <p key={idx} className="text-sm font-medium text-gray-700">
                  <span className="text-purple-700 font-bold">
                    {stat.value}
                  </span>{" "}
                  {stat.label}
                </p>
              ))}
            </div>
            <button className="mt-4 text-purple-700 font-medium">
              View Case Study →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
