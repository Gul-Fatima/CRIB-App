
export type Property = {
  id: string;
  title: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number; // square feet
  description: string;
};

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Sea View Apartment",
    city: "Karachi",
    price: 8500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    description:
      "A bright apartment near Sea View with a balcony facing the beach.",
  },
  {
    id: "2",
    title: "Garden Villa",
    city: "Lahore",
    price: 25000000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3600,
    description:
      "A family villa with a large lawn, close to schools and markets.",
  },
  {
    id: "3",
    title: "City Studio",
    city: "Islamabad",
    price: 4200000,
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    description:
      "A compact studio in a quiet sector, ideal for students.",
  },
  {
    id: "4",
    title: "Gulshan Family Home",
    city: "Karachi",
    price: 18000000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    description:
      "A spacious house in Gulshan-e-Iqbal with parking for two cars.",
  },
  {
    id: "5",
    title: "Model Town Flat",
    city: "Lahore",
    price: 6500000,
    bedrooms: 2,
    bathrooms: 1,
    area: 900,
    description:
      "A ground-floor flat in Model Town, walking distance from the park.",
  },
  {
    id: "6",
    title: "Margalla Hills Cottage",
    city: "Islamabad",
    price: 32000000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    description:
      "A quiet cottage with a view of the Margalla Hills.",
  },
];

export const CITIES = ["Karachi", "Lahore", "Islamabad"];

export function getPropertyById(
  id: string
): Property | undefined {
  return PROPERTIES.find((property) => property.id === id);
}

// 8500000 -> "Rs 85 lakh", 25000000 -> "Rs 2.5 crore"
export function formatPrice(price: number): string {
  if (price >= 10000000) {
    return `Rs ${Number((price / 10000000).toFixed(2))} crore`;
  }

  return `Rs ${Number((price / 100000).toFixed(2))} lakh`;
}
