import Image from "next/image";
import { Product } from "@/src/types/product";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className="rounded-md"
        />

        <h3 className="mt-3 font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500">${product.price}</p>

        <Button variant={'destructive'} className="mt-3 w-full">Add to Cart</Button>
      </CardContent>
    </Card>

  );
}
