import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import { subDays } from "date-fns";

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    num_days: "",
    num_adults: "",
    num_children: "",
    trip_type: "",
    referral_source: "",
    message: "",
  };

  const [startDate, setStartDate] = useState(null);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!value) newErrors.contact_number = "Contact number is required";
    if (!selected) newErrors.country = "Country is required";
    if (!startDate) newErrors.arrival_date = "Arrival date is required";
    if (!formData.num_days) newErrors.num_days = "Number of days is required";
    if (!formData.num_adults)
      newErrors.num_adults = "Number of adults is required";
    if (!formData.num_children)
      newErrors.num_children = "Number of children is required";
    if (!formData.trip_type) newErrors.trip_type = "Trip type is required";
    if (!formData.referral_source)
      newErrors.referral_source = "Referral source is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setStartDate(null);
    setValue("");
    setSelected("");
    setFormData(initialState);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all required fields.");
      return;
    }

    const data = {
      ...formData,
      contact_number: value,
      country: selected,
      arrival_date: startDate,
    };

    try {
      const response = await fetch("http://localhost:5000/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Trip details submitted successfully!");
        resetForm();
      } else {
        alert("Failed to submit trip details.");
      }
    } catch (error) {
      console.error("Error submitting trip details:", error);
      alert("An error occurred while submitting trip details.");
    }
  };

  return (
    <div>
      <div className="flex justify-center pb-10">
        <p className="font-bold text-center xl:text-4xl lg:text-3xl md:text-2xl text-xl">
          Plan Your Trip With Us
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="md:grid md:grid-cols-2 px-5 py-10 bg-slate-100 md:gap-x-5 md:gap-y-3">
          <div className="grid grid-cols-1">
            <label
              htmlFor="name"
              className="lg:text-lg md:text-base text-sm font-bold"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              id="name"
              className="md:h-11 h-8 w-full mt-1 p-2 rounded border border-[#54B435]"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">{errors.name}</span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="email"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="md:h-11 h-8 w-full mt-1 p-2 rounded border border-[#54B435]"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="contact_number"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Contact Number (Including Country Code)
            </label>
            <PhoneInput
              placeholder="Enter phone number"
              international
              initialValueFormat="national"
              defaultCountry="US"
              countryCallingCodeEditable={false}
              value={value}
              onChange={setValue}
              className="md:h-11 h-8 mt-1 p-2 rounded border border-[#54B435] w-full bg-white"
            />
            {errors.contact_number && (
              <span className="text-red-500 text-xs">
                {errors.contact_number}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="country"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Select Country
            </label>
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Select Country "
              searchable
              searchPlaceholder="Search Country "
              id="country"
              className="mt-1 h-11 w-full rounded bg-white border border-[#54B435]"
            />
            {errors.country && (
              <span className="text-red-500 text-xs">{errors.country}</span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="arrival_date"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Arrival Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={subDays(new Date(), 1)}
              placeholderText="Select Date"
              name="arrival_date"
              id="arrival_date"
              className="md:h-11 h-8 mt-1 p-2 rounded border border-[#54B435] w-full"
            />
            {errors.arrival_date && (
              <span className="text-red-500 text-xs">
                {errors.arrival_date}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="num_days"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Likely number of days
            </label>
            <input
              type="text"
              name="num_days"
              id="num_days"
              placeholder="Number of days"
              className="md:h-11 h-8 mt-1 p-2 rounded border border-[#54B435]"
              value={formData.num_days}
              onChange={handleChange}
            />
            {errors.num_days && (
              <span className="text-red-500 text-xs">{errors.num_days}</span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="num_adults"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Number of Adults
            </label>
            <select
              name="num_adults"
              id="num_adults"
              className="md:h-11 h-8 mt-1 md:p-2 p-1 rounded border border-[#54B435]"
              value={formData.num_adults}
              onChange={handleChange}
            >
              {" "}
              <option value="">Select Number of Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            {errors.num_adults && (
              <span className="text-red-500 text-xs">{errors.num_adults}</span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="num_children"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Number of Children
            </label>
            <select
              name="num_children"
              id="num_children"
              className="md:h-11 h-8 mt-1 md:p-2 p-1 rounded border border-[#54B435]"
              value={formData.num_children}
              onChange={handleChange}
            >
              {" "}
              <option value="">Select Number of Children</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            {errors.num_children && (
              <span className="text-red-500 text-xs">
                {errors.num_children}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="trip_type"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Select type of trip
            </label>
            <select
              name="trip_type"
              id="trip_type"
              className="md:h-11 h-8 mt-1 md:p-2 p-1 rounded border border-[#54B435]"
              value={formData.trip_type}
              onChange={handleChange}
            >
              {" "}
              <option value="">Select type of trip</option>
              <option value="7 Days">7 Days</option>
              <option value="10 Days">10 Days</option>
              <option value="14 Days">14 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="45 Days">45 Days</option>
              <option value="60 Days">60 Days</option>
            </select>
            {errors.trip_type && (
              <span className="text-red-500 text-xs">{errors.trip_type}</span>
            )}
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="referral_source"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              How did you hear about us?
            </label>
            <select
              name="referral_source"
              id="referral_source"
              className="md:h-11 h-8 mt-1 md:p-2 p-1 rounded border border-[#54B435]"
              value={formData.referral_source}
              onChange={handleChange}
            >
              {" "}
              <option value="">How did you hear about us?</option>
              <option value="Google Search">Google Search</option>
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
              <option value="Facebook">Facebook</option>
            </select>
            {errors.referral_source && (
              <span className="text-red-500 text-xs">
                {errors.referral_source}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 col-span-2">
            <label
              htmlFor="message"
              className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Type Your Message..."
              className="mt-1 p-2 w-full resize-none rounded border border-[#54B435]"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-center mt-5">
            <input
              type="submit"
              value="CONFIRM"
              className="cursor-pointer bg-[#54B435] md:py-2 md:px-10 py-1 px-5 mx-auto text-white hover:text-[#F0FF42] transition-colors duration-300 font-bold md:text-lg text-base rounded"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
