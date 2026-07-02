export type PropertyType = "apartment" | "villa" | "office" | "land";

export type PropertyStatus = "sale" | "rent";

export type Property = {
  id: string;
  title: string;
  city: string;
  district: string;
  price: number;
  currency: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  propertyType: PropertyType;
  status: PropertyStatus;
  imageUrl: string;
  gallery: string[];
  description: string;
  features: string[];
  featured: boolean;
  agentName: string;
  agentPhone: string;
};
