// components/ProductCard.jsx
export default function ProductCard({ product }) {
    return (
      <div className="border rounded-lg shadow-lg p-4 m-2">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-green-500 font-bold mt-4">${product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
      </div>
    );
  }
  