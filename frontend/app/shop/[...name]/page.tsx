import ProductPage from "@/components/shop/ProductPage";

export default async function Page({ params }: { params: { name: string } }) {
  const path = params.name;
  const id = params.name[0];

  const res = await fetch(`http://127.0.0.1:8000/api/v1/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 5,
    },
  });
  const product:Products = await res.json();

  return (
    <ProductPage
      id={product.id}
      brand={product.brand}
      description={product?.description}
      image={product.image}
      name={product?.name}
      price={product?.price}
      product_id={product?.product_id}
      product_images={[]}
      quantity={product?.quantity}
      weight={product?.weight}
      color={product.color}
      size={product.size}
    />
  );
}
