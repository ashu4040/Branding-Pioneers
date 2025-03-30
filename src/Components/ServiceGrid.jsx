export default function ServicesGrid() {
  const services = [
    {
      icon: "https://img.icons8.com/color/48/google-logo.png",
      title: "Google Search Ads",
      description:
        "Be the first choice for patients actively searching for healthcare services. We help you dominate search results and outshine the competition.",
    },
    {
      icon: "https://img.icons8.com/color/48/youtube-play.png",
      title: "YouTube",
      description:
        "Showcase your expertise with engaging, specialty-focused video ads. Reach patients exploring health-related content on YouTube.",
    },
    {
      icon: "https://img.icons8.com/color/48/facebook-new.png",
      title: "Facebook Advertising",
      description:
        "No more junk leads! Our targeted Facebook strategies bring you high-quality, relevant inquiries ready to convert into patients.",
    },
    {
      icon: "https://img.icons8.com/color/48/instagram-new.png",
      title: "Instagram",
      description:
        "Catch the attention of potential patients as they scroll, driving them straight to your clinic with visually appealing ads.",
    },
    {
      icon: "https://img.icons8.com/color/48/instagram-new.png",
      title: "SEO",
      description:
        "Rank higher on search engines with tailored SEO strategies that attract more patients to your website and keep your practice visible online.",
    },
    {
      icon: "https://img.icons8.com/color/48/instagram-new.png",
      title: "Paid Advertising (PPC)",
      description:
        "Drive instant traffic and boost inquiries with precise, high-ROI ad campaigns that put your services front and center.",
    },
    {
      icon: "https://img.icons8.com/color/48/web-design.png",
      title: "Website Design & Development",
      description:
        "Create a stunning, user-friendly website that makes a lasting impression and turns visitors into loyal patients.",
    },
    {
      icon: "https://img.icons8.com/color/48/instagram-new.png",
      title: "Content Marketing & Graphic Designing",
      description:
        "Engage your audience with impactful content and designs that build trust and make your brand stand out.",
    },
    {
      icon: "https://img.icons8.com/color/48/instagram-new.png",
      title: "Social Media Marketing",
      description:
        "Stay top-of-mind for your patients with engaging social media strategies that build community and loyalty.",
    },
    {
      icon: "https://img.icons8.com/color/48/instagram-new.png",
      title: "Online Reputation Management",
      description:
        "Keep your practice’s reputation strong with strategies that foster trust and encourage patient retention.",
    },
    {
      icon: "https://img.icons8.com/color/48/sales-performance.png",
      title: "Sales Training",
      description:
        "Turn inquiries into appointments! We teach you how to effectively handle leads from online platforms and referrals.",
    },
    {
      icon: "https://img.icons8.com/color/48/instagram-new.png",
      title: "Funnel Creation",
      description:
        "Build advanced lead funnels that nurture trust, educate patients about your services, and turn prospects into loyal clients.",
    },
  ];

  return (
    <div className=" py-16 px-6 md:px-12 xl:ml-46 xl:mr-46">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Driving Results,{" "}
          <span className="text-purple-600">Not Just Conversations</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Branding Pioneers ensures your marketing budget works smarter,
          delivering tangible growth. With our strategies, you can expect at
          least a 30% increase in patient footfall within 6 months. Let’s make
          it happen!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4  items-start"
          >
            <img src={service.icon} alt={service.title} className="w-12 h-12" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
          Transform Your Brand →
        </button>
      </div>
    </div>
  );
}
