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
    hasSubmenu: true,
    subCategories: [
      { name: "Smartphones" },
      { name: "Laptops & Tablets" },
      { name: "Audio" },
      { name: "Cameras" },
      { name: "Gaming" },
      { name: "Accessories" },
    ],
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
    hasSubmenu: true,
    subCategories: [
      { name: "Fitness Equipment" },
      { name: "Team Sports" },
      { name: "Camping & Hiking" },
      { name: "Cycling" },
      { name: "Swimming" },
    ],
  },
  {
    name: "Baby's & Toys",
    hasSubmenu: true,
    subCategories: [
      { name: "Baby Clothing" },
      { name: "Toys" },
      { name: "Baby Gear" },
      { name: "Feeding" },
      { name: "Diapering" },
    ],
  },
  {
    name: "Groceries & Pets",
    hasSubmenu: false,
  },
  {
    name: "Health & Beauty",
    hasSubmenu: true,
    subCategories: [
      { name: "Skincare" },
      { name: "Makeup" },
      { name: "Haircare" },
      { name: "Fragrances" },
      { name: "Personal Care" },
    ],
  },
];