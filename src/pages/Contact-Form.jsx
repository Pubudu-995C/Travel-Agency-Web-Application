import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import { subDays } from "date-fns";

export default function ContactForm() {
  const [startDate, setStartDate] = useState(null);
  const [value, setValue] = useState();
  const [selected, setSelected] = useState("");

  return (
    <div>
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
          />
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
          />
        </div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="contactNum"
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
        </div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="national"
            className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
          >
            Select Nationality
          </label>
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            placeholder="Select Nationality"
            searchable
            searchPlaceholder="Search Nationalities"
            id="national"
            className="mt-1 h-11 w-full rounded bg-white border border-[#54B435]"
          />
        </div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="date"
            className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
          >
            Arrival Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={subDays(new Date(), 1)}
            placeholderText="Select Date"
            name="date"
            id="date"
            className="md:h-11 h-8 mt-1 p-2 rounded border border-[#54B435] w-full"
          />
        </div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="numDates"
            className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
          >
            Likely number of days
          </label>
          <input
            type="text"
            name="numDates"
            id="numDates"
            placeholder="Number of days"
            className="md:h-11 h-8 mt-1 p-2 rounded border border-[#54B435]"
          />
        </div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="numAdults"
            className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
          >
            Number of Adults
          </label>
          <select
            name="numAdults"
            id="numAdults"
            className="md:h-11 h-8 mt-1 md:p-2 p-1 rounded border border-[#54B435]"
          >
            {" "}
            <option value="">Select Number of Adults</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="numChildren"
            className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
          >
            Number of Children
          </label>
          <select
            name="numChildren"
            id="numChildren"
            className="md:h-11 h-8 mt-1 md:p-2 p-1 rounded border border-[#54B435]"
          >
            {" "}
            <option value="">Select Number of Children</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="tripType"
            className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
          >
            Select type of trip
          </label>
          <select
            name="tripType"
            id="tripType"
            className="md:h-11 h-8 mt-1 md:p-2 p-1 rounded border border-[#54B435]"
          >
            {" "}
            <option value="">Select type of trip</option>
            <option value="">7 Days</option>
            <option value="">14 Days</option>
            <option value="">21 Days</option>
            <option value="">30 Days</option>
          </select>
        </div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="tripType"
            className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
          >
            How did you hear about us?
          </label>
          <select
            name="tripType"
            id="tripType"
            className="md:h-11 h-8 mt-1 md:p-2 p-1 rounded border border-[#54B435]"
          >
            {" "}
            <option value="">How did you hear about us?</option>
            <option value="">Google Search</option>
            <option value="">Instagram</option>
            <option value="">YouTube</option>
            <option value="">Facebook</option>
          </select>
        </div>
        <div className="grid grid-cols-1 col-span-2">
          <label
            htmlFor="tripType"
            className="lg:text-lg md:text-base text-sm font-bold md:mt-0 mt-3"
          >
            Message
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Type Your Message..."
            className="mt-1 p-2 w-full resize-none rounded border border-[#54B435]"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
