import React from "react";
import Form from "./Form";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-8 bg-purple-50">
      {/* Text Content */}
      <div className="max-w-lg space-y-4  ">
        <h1 className="text-2xl xl:text-4xl font-bold text-purple-700 flex flex-col text-center justify-center">
          <span>We provide Digital Solutions</span>{" "}
          <span>for Hospitals, Doctors & </span> <span> Clinics</span>
        </h1>
        <p className="text-gray-600">
          With 9+ years of experience, we help healthcare organizations grow
          their patient base.
        </p>
        <div className="grid grid-cols-3 gap-4 text-center mt-8">
          <div>
            <p className="text-lg font-semibold">Custom Solutions</p>
            <p className="text-gray-500">Exceptional Results</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Stand Out Across</p>
            <p className="text-gray-500">Every Platform</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Engage Patients</p>
            <p className="text-gray-500">With Impact</p>
          </div>
        </div>
        <div className="googlerate bg-white h-fit w-fit p-4 flex rounded-lg mt-8">
          <img
            className="w-7 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt=""
          />
          <h2 className=" font-medium text-xl text-yellow-500">★★★★★ 4.8</h2>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg  max-w-md shadow-2xl border-t-5 border-t-purple-600 mt-10 ">
        <h2 className="text-xl font-bold text-gray-800">
          Let's Grow Your Practice Today
        </h2>
        <Form />
      </div>
    </div>
  );
};

export default Hero;
