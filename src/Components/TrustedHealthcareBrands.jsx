import React from "react";

const TrustedHealthcareBrands = () => {
  return (
    <div>
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center text-purple-600">
          Trusted by Healthcare Brands
        </h2>
        <div className="p-8 bg-white rounded-2xl shadow-lg xl:ml-46 xl:mr-46 mt-10">
          {/* Title */}
          <h2 className="text-xl font-bold text-purple-700 flex items-center">
            Hospitals
            <span className="flex-1 border-t-2 border-purple-600 ml-2"></span>
          </h2>

          {/* Hospital Logos Container */}

          <div className="flex flex-wrap  justify-evenly gap-6 mt-6 bg-purple-50 p-4 ">
            {[
              {
                name: "Medanta",
                img: "https://cdn3.vectorstock.com/i/1000x1000/71/27/indira-gandhi-vector-27897127.jpg",
              },
              {
                name: "Indraprastha Apollo Hospitals",
                img: "https://static.vecteezy.com/system/resources/thumbnails/032/179/967/small/mahatma-gandhi-freedom-fighter-2-october-free-vector.jpg",
              },
              {
                name: "Indira Gandhi Eye Hospitals",
                img: "https://www.northeasttoday.in/assets/resources/2025/01/Tripuras-new-state-emblem.jpg",
              },
              {
                name: "Ivy Hospitals",
                img: "https://www.ux4g.gov.in/assets/img/uxdt-logo/India%E2%80%99s-G20-Presidency.jpg",
              },
            ].map((hospital, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl shadow-md w-40 text-center"
              >
                <img
                  src={hospital.img}
                  alt={hospital.name}
                  className="w-full h-20 object-contain rounded-lg mb-2"
                />
                <p className="text-sm font-medium text-gray-700">
                  {hospital.name}
                </p>
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="p-8 bg-white rounded-2xl shadow-lg xl:ml-46 xl:mr-46 mt-10">
          {/* Title */}
          <h2 className="text-xl font-bold text-purple-700 flex items-center">
            Health Education
            <span className="flex-1 border-t-2 border-purple-600 ml-2"></span>
          </h2>

          {/* Hospital Logos Container */}

          <div className="flex flex-wrap  justify-evenly gap-6 mt-6 bg-purple-50 p-4 ">
            {[
              {
                name: "Medanta",
                img: "https://cdn3.vectorstock.com/i/1000x1000/71/27/indira-gandhi-vector-27897127.jpg",
              },
              {
                name: "Indraprastha Apollo Hospitals",
                img: "https://static.vecteezy.com/system/resources/thumbnails/032/179/967/small/mahatma-gandhi-freedom-fighter-2-october-free-vector.jpg",
              },
              {
                name: "Indira Gandhi Eye Hospitals",
                img: "https://www.northeasttoday.in/assets/resources/2025/01/Tripuras-new-state-emblem.jpg",
              },
              {
                name: "Ivy Hospitals",
                img: "https://www.ux4g.gov.in/assets/img/uxdt-logo/India%E2%80%99s-G20-Presidency.jpg",
              },
            ].map((hospital, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl shadow-md w-40 text-center"
              >
                <img
                  src={hospital.img}
                  alt={hospital.name}
                  className="w-full h-20 object-contain rounded-lg mb-2"
                />
                <p className="text-sm font-medium text-gray-700">
                  {hospital.name}
                </p>
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="p-8 bg-white rounded-2xl shadow-lg xl:ml-46 xl:mr-46 mt-10">
          {/* Title */}
          <h2 className="text-xl font-bold text-purple-700 flex items-center">
            Health B2B
            <span className="flex-1 border-t-2 border-purple-600 ml-2"></span>
          </h2>

          {/* Hospital Logos Container */}

          <div className="flex flex-wrap  justify-evenly gap-6 mt-6 bg-purple-50 p-4 ">
            {[
              {
                name: "Medanta",
                img: "https://cdn3.vectorstock.com/i/1000x1000/71/27/indira-gandhi-vector-27897127.jpg",
              },
              {
                name: "Indraprastha Apollo Hospitals",
                img: "https://static.vecteezy.com/system/resources/thumbnails/032/179/967/small/mahatma-gandhi-freedom-fighter-2-october-free-vector.jpg",
              },
              {
                name: "Indira Gandhi Eye Hospitals",
                img: "https://www.northeasttoday.in/assets/resources/2025/01/Tripuras-new-state-emblem.jpg",
              },
              {
                name: "Ivy Hospitals",
                img: "https://www.ux4g.gov.in/assets/img/uxdt-logo/India%E2%80%99s-G20-Presidency.jpg",
              },
            ].map((hospital, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl shadow-md w-40 text-center"
              >
                <img
                  src={hospital.img}
                  alt={hospital.name}
                  className="w-full h-20 object-contain rounded-lg mb-2"
                />
                <p className="text-sm font-medium text-gray-700">
                  {hospital.name}
                </p>
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="p-8 bg-white rounded-2xl shadow-lg xl:ml-46 xl:mr-46 mt-10">
          {/* Title */}
          <h2 className="text-xl font-bold text-purple-700 flex items-center">
            Clinics
            <span className="flex-1 border-t-2 border-purple-600 ml-2"></span>
          </h2>

          {/* Hospital Logos Container */}

          <div className="flex flex-wrap  justify-evenly gap-6 mt-6 bg-purple-50 p-4 ">
            {[
              {
                name: "Medanta",
                img: "https://cdn3.vectorstock.com/i/1000x1000/71/27/indira-gandhi-vector-27897127.jpg",
              },
              {
                name: "Indraprastha Apollo Hospitals",
                img: "https://static.vecteezy.com/system/resources/thumbnails/032/179/967/small/mahatma-gandhi-freedom-fighter-2-october-free-vector.jpg",
              },
              {
                name: "Indira Gandhi Eye Hospitals",
                img: "https://www.northeasttoday.in/assets/resources/2025/01/Tripuras-new-state-emblem.jpg",
              },
              {
                name: "Ivy Hospitals",
                img: "https://www.ux4g.gov.in/assets/img/uxdt-logo/India%E2%80%99s-G20-Presidency.jpg",
              },
            ].map((hospital, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl shadow-md w-40 text-center"
              >
                <img
                  src={hospital.img}
                  alt={hospital.name}
                  className="w-full h-20 object-contain rounded-lg mb-2"
                />
                <p className="text-sm font-medium text-gray-700">
                  {hospital.name}
                </p>
              </div>
            ))}
          </div>
        </div>{" "}
      </section>
    </div>
  );
};

export default TrustedHealthcareBrands;
