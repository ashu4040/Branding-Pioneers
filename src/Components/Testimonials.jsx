import React, { useState } from "react";
import Form from "./Form";

const Testimonial = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    service: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const testimonials = [
    {
      name: "Dr. Kaushal Yadav, Surgical Oncologist",
      description:
        "He is sharing his experience with Branding Pioneers Digital Marketing Services.",
      videoUrl: "https://www.youtube.com/embed/aDwPZw4a2U0", // Updated URL
    },
    {
      name: "Dental Client",
      description:
        "Director of The Academy of Dental Excellence sharing his experience.",
      videoUrl: "https://www.youtube.com/embed/aDwPZw4a2U0",
    },
    {
      name: "Dr. Manish Kulshreshtha, MBBS, MS - General Surgery",
      description:
        "Dr. Manish has seen a significant increase in online visibility.",
      videoUrl: "https://www.youtube.com/embed/aDwPZw4a2U0",
    },
  ];

  const faqs = [
    "How do you ensure results for healthcare brands?",
    "Can you help with both online and offline marketing?",
    "Do you offer customized marketing plans?",
    "Can you work with a limited marketing budget?",
    "Is there a minimum budget to get started?",
    "How do you track and report campaign performance?",
  ];

  return (
    <div className="p-10 xl:ml-46 xl:mr-46">
      <h2 className="text-center text-3xl font-bold mb-6">
        Our Clients Love Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Helping them grow their practice is what we do best!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
            <iframe
              src={testimonial.videoUrl}
              className="w-full h-48 rounded-lg"
              allowFullScreen
            ></iframe>
            <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((question, index) => (
              <details key={index} className="p-4 bg-white shadow rounded-lg">
                <summary className="font-semibold cursor-pointer">
                  {question}
                </summary>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-2xl border-t-5 border-t-purple-600 md:w-1/2 max-w-md">
          <h2 className="text-xl font-bold text-gray-800">
            Transform Your Health Care Brand
          </h2>
          <Form />
        </div>
      </div>

      <footer className="mt-12 py-6 bg-gray-200 text-center">
        <h4 className="text-lg font-semibold">Branding Pioneers</h4>
        <p className="text-gray-600">
          Redefining healthcare success with innovative web solutions.
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="flex items-center gap-2">📞 +91 98187 80337</div>
          <div className="flex items-center gap-2">📍 Gurgaon, Haryana</div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonial;
