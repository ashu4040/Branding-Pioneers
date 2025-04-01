export default function MedicalIndustryUI() {
  return (
    <div className="flex flex-col items-center p-6 md:p-12 ">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
        We drive marketing success in the
        <span className="text-purple-600"> Medical Industry</span>
      </h1>

      {/* Subtext */}
      <p className="mt-3 text-gray-600 max-w-2xl">
        We've perfected the art of marketing for the medical sector. We
        understand the unique challenges and opportunities your industry
        presents and craft strategies tailored to your needs.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10  ">
        {[
          { icon: "🩷", label: "Cosmetic Surgery and Aesthetics" },
          { icon: "👀", label: "Hair Restoration" },
          { icon: "🥰", label: "Plastic Surgery" },
          { icon: "🏥", label: "IVF & Fertility" },
          { icon: "🏥", label: "Dental Care" },
          { icon: "🚑", label: "Orthopaedic" },
          {
            icon: "🚑",
            label: "Multispeciality Clinics & Hospitals",
          },
          { icon: "🚁", label: "IVF & Fertility" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center  xl:w-40 h-32"
          >
            <span className="text-3xl">{item.icon}</span>
            <p className="mt-2 text-gray-700 text-sm text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded-full font-medium shadow-lg hover:bg-purple-700 transition flex items-center gap-2">
        Boost Your Patient Reach Now <span>➡️</span>
      </button>
    </div>
  );
}
