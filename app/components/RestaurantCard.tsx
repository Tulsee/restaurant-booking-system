import Link from "next/link";
import React from "react";
import { RestaurantCardType } from "../page";
import { Price, Stars } from ".";

interface props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: props) {
  const { name, cuisine, location, main_image, slug, price, reviews } =
    restaurant;
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${slug}`}>
        <img src={main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{name}</h3>
          <div className="flex items-start">
            <Stars reviews={reviews} />
            <p className="ml-2">
              {reviews.length} review{reviews.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{cuisine.name}</p>
            <Price price={price} />
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
