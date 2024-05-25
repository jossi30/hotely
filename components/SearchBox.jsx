'use client';
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { MapPin } from "lucide-react";

import {motion} from "framer-motion";
import { fadeIn } from "@/variants";
import DatePicker from "./DatePicker";
import GuestSelect from "./GuestSelect";

const SearchBox = () => {
  return (
    <div className="bg-pink">
      <div>
        <label htmlFor="destination">Where are ou going?</label>
        <div className="relative flex items-center mb-[20px]">
          <Input id='destination' placeholder = 'try "Asamara"' />
          <MapPin size={24} className="absolute right-6 text-black"/>

        </div>
        <div>
          {/*check in */}
          <div>
            <Label>Check in</Label>
            <DatePicker />
          </div>

          <div>
            <Label>Check out</Label>
            <DatePicker />
          </div>

        </div>
      </div>
      
      <div>
        <div>
          <Label>Guests</Label>
          <GuestSelect />
        </div>
      </div>

    </div>
  )
}

export default SearchBox;