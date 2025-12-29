export function OrderSummary({ items, subtotal, serviceFee, total }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4">Order Summary</h3>
      {items.map((item: any) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.label}</span>
          <span>{item.price}</span>
        </div>
      ))}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
}
