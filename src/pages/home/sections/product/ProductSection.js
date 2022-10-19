export default function ProductSection({ products = [] }) {
  return (
    <div className="grid grid-flow-row gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products?.map((pro) => (
        <div key={pro.id} className="rounded-lg overflow-hidden">
          <img src={pro.image} alt="images" />
        </div>
      ))}
    </div>
  );
}
