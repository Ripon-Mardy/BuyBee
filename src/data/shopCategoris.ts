import { shopCategory } from "../types/shopCategory";

import {
    Smartphone,
    Laptop,
    Watch,
    Camera,
    Headphones,
    Gamepad2,
} from "lucide-react";

export const shopCategories: shopCategory[] = [
    { id: 1, name: "Phones", icon: Smartphone, bg: "bg-cyan-200" },
    { id: 2, name: "Computers", icon: Laptop, bg: "bg-yellow-300" },
    { id: 3, name: "SmartWatch", icon: Watch, bg: "bg-green-200" },
    { id: 4, name: "Camera", icon: Camera, bg: "bg-blue-300" },
    { id: 5, name: "HeadPhones", icon: Headphones, bg: "bg-orange-300" },
    { id: 6, name: "Gaming", icon: Gamepad2, bg: "bg-pink-300" },
];