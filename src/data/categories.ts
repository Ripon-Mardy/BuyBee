import { category } from "../types/category";

export const categories: category[] = [
  {
    name: "Woman's Fashion",
    hasSubmenu: true,
    subCategories: [
      { name: "Dresses" },
      { name: "Tops & Blouses" },
      { name: "Bottoms" },
      { name: "Outerwear" },
      { name: "Lingerie & Sleepwear" },
      { name: "Accessories" },
    ],
  },
  {
    name: "Men's Fashion",
    hasSubmenu: true,
    subCategories: [
      { name: "Shirts" },
      { name: "T-Shirts & Polos" },
      { name: "Pants & Jeans" },
      { name: "Jackets & Coats" },
      { name: "Footwear" },
      { name: "Accessories" },
    ],
  },
  {
    name: "Electronics",
    hasSubmenu: false,
  },
  {
    name: "Home & Lifestyle",
    hasSubmenu: false, 
  },
  {
    name: "Medicine",
    hasSubmenu: false,
  },
  {
    name: "Sports & Outdoor",
    hasSubmenu: false,
  },
  {
    name: "Baby's & Toys",
    hasSubmenu: false,
  },
  {
    name: "Groceries & Pets",
    hasSubmenu: false,
  },
  {
    name: "Health & Beauty",
    hasSubmenu: false,
  },
];