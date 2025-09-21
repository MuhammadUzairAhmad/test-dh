"use client";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="p-6 bg-gray-100 rounded-md shadow">
        <h2 className="text-lg font-semibold">Widget 1</h2>
        <p>Some content...</p>
      </div>
      <div className="p-6 bg-gray-100 rounded-md shadow">
        <h2 className="text-lg font-semibold">Widget 2</h2>
        <p>Some content...</p>
      </div>
      {/* Add more cards to test scrolling */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-6 bg-gray-100 rounded-md shadow">
          <h2 className="text-lg font-semibold">Extra Widget {i + 1}</h2>
        </div>
      ))}
    </div>
  );
}
