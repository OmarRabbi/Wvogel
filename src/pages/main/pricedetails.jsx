import { useState } from "react";
import { Button } from "@/components/ui/button";
import beastMode from "../../assets/images/beast-mode.png";
import headerStraightLine from "@/assets/icons/header-straight-line.svg";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const shareOptions = [
  { label: "1/8 Share", ownership: "1.5%", price: 2800 },
  { label: "1/4 Share", ownership: "2.5%", price: 7800 },
  { label: "1/2 Share", ownership: "5%", price: 9800 },
  { label: "1 Share", ownership: "10%", price: 15800 },
];

const Pricedetails = () => {
  const [selectedShare, setSelectedShare] = useState(shareOptions[0]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-4">
      <div className="bg-[#FFF]">
        <div className="w-[60%] mx-auto mt-20 flex flex-col justify-center gap-2">
          <div className="flex items-center gap-3">
            <img src={headerStraightLine} alt="" />
            <h1 className="text-4xl font-light leading-[93%] text-foreground">
              Thunder Strike
            </h1>
          </div>
          <p className="text-[#1DB435] font-playfair text-[24px] font-light">
            Share Available
          </p>

          <div className="flex flex-col gap-5">
            {shareOptions.map((option, index) => (
              <div
                key={index}
                className="border border-white rounded-sm text-center flex justify-between"
              >
                <p className="text-[#5A5C5F] font-poppins text-[18px] font-normal">
                  {option.label} ({option.ownership} ownership)
                </p>
                <p className="text-[#DB1F35] font-poppins text-[18px] font-semibold">
                  - ${option.price}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-5">
            <Select
              onValueChange={(value) => {
                const selected = shareOptions.find(
                  (option) => option.label === value
                );
                setSelectedShare(selected);
              }}
              defaultValue={selectedShare.label}
            >
              <SelectTrigger className="w-2/3 ">
                <SelectValue placeholder="Select Share" />
              </SelectTrigger>
              <SelectContent>
                {shareOptions.map((option, index) => (
                  <SelectItem key={index} value={option.label}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="bg-red-500 text-white text-lg font-semibold flex-1 text-center rounded">
              {selectedShare.ownership}
            </div>
          </div>

          {/* Total Amount Display */}
          <div className="bg-gray-200 text-black text-lg font-semibold p-3 text-center rounded mt-3">
            Total: ${selectedShare.price}
          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-5">
            <Button className="bg-red-500 hover:text-red-500 rounded text-base font-semibold p-[10px] w-[40%]">
              Pay Now
            </Button>
            <Button className="bg-white border border-gray-400 rounded text-base font-semibold p-[10px] w-[40%]">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="relative">
        <img
          src={beastMode}
          alt="horse racing"
          className="h-full w-full bg-gradient-to-t from-black/60 via-black/0 to-transparent"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent flex justify-center items-center pb-10">
          <div className="text-center border-r-2 border-white pr-5">
            <p className="text-white text-sm">Breed</p>
            <p className="text-white text-base font-semibold">Thoroughbred</p>
          </div>
          <div className="text-center border-r-2 border-white pr-5">
            <p className="text-white text-sm">Gender</p>
            <p className="text-white text-base font-semibold">Stallion</p>
          </div>
          <div className="text-center border-r-2 border-white pr-5">
            <p className="text-white text-sm">Age</p>
            <p className="text-white text-base font-semibold">3 years</p>
          </div>
          <div className="text-center border-r-2 border-white pr-5">
            <p className="text-white text-sm">Trainer</p>
            <p className="text-white text-base font-semibold">John Whitman</p>
          </div>
          <div className="text-center">
            <p className="text-white text-sm">Owner</p>
            <p className="text-white text-base font-semibold">
              Beast Mode Racing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricedetails;
