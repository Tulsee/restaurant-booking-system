import { Header, Navbar, RestaurantCard } from "./components";
import { PrismaClient, Cuisine, Location, PRICE } from "@prisma/client";

const prisma = new PrismaClient();
export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
}

const fetchRestauraants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      location: true,
      cuisine: true,
      price: true,
    },
  });

  return restaurants;
};
export default async function Home() {
  const restaurants = await fetchRestauraants();
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
