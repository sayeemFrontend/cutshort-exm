import ProductCard from "../../../../components/common/product-cart/ProductCart";

export default function ProductSection({ products = [] }) {
  return (
    <div className="grid grid-flow-row gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products?.map((prod) => (
        <ProductCard key={prod.id} item={prod} />
      ))}
    </div>
  );
}
