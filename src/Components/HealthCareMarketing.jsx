export default function HealthcareMarketing() {
  const steps = [
    {
      icon: "https://img.icons8.com/ios/48/phone.png",
      title: "Strategic Planning",
    },
    {
      icon: "https://img.icons8.com/ios/48/share.png",
      title: "Audience Targeting",
    },
    {
      icon: "https://img.icons8.com/ios/48/phone.png",
      title: "Content Creation",
    },
    {
      icon: "https://img.icons8.com/ios/48/trust.png",
      title: "Campaign Launch",
    },
    // {
    //   icon: "https://img.icons8.com/ios/48/phone.png",
    //   title: "Track & Optimize",
    // },
  ];

  return (
    <div className=" py-16 px-6 md:px-12 xl:ml-46 xl:mr-46">
      {/* Approach Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Specialized Approach{" "}
          <span className="text-purple-600">for Healthcare Marketing</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Branding Pioneers tackles healthcare marketing with tailored
          strategies to drive growth and results.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-8 mt-10  ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-8 shadow-lg rounded-b-lg"
          >
            <img src={step.icon} alt={step.title} className="w-12 h-12" />
            <p className="text-gray-700 font-medium mt-2">{step.title}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
          Transform Your Brand →
        </button>
      </div>
    </div>
  );
}
