
import { StaticImageData } from "next/image";

export interface product {
  name: string;
  image: StaticImageData;
  originalPrice: number;
  discountedPrice: number;
  discount?: string;       
  buttonText: string;
  addToCartText: string;
}