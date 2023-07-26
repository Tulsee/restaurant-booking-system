import { Cuisine, PRICE, Location, Review } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Price } from "../../components";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRatingAverage";

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  const { name, main_image, location, cuisine, price, slug, reviews } =
    restaurant;
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else "";
  };

  return (
    <div className="border-b flex pb-5 ml-5">
      <img src={main_image} alt="" className="w-44 h-36 rounded" />

      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price} />
            <p className="mr-4 capitalize">{cuisine.name}</p>
            <p className="mr-4 capitalize">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
}
