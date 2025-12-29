export function PaymentForm({ total, isProcessing, onSubmit, initialFirstName, initialLastName }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4">Payment Method</h3>
      <button 
        onClick={() => onSubmit({})} 
        disabled={isProcessing}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
      >
        {isProcessing ? 'Processing...' : 'Pay with Chapa'}
      </button>
    </div>
  );
}
