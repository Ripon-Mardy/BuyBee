import { fromTheme } from "tailwind-merge";
import { electronicsBrand } from "../types/electronicsBrand";

import image1 from '@/public/Electronics/1.png'
import image2 from '@/public/Electronics/2.jpg'
import image3 from '@/public/Electronics/3.jpg'

export const electronicsBrands: electronicsBrand[] = [
    {
        name : "10% Off On Hp series",
        image : image1
    },
    {
        name : "10% Off On Apple Mackbook series",
        image : image2
    },
    {
        name : "10% Off On Iphone series",
        image : image3
    }
]