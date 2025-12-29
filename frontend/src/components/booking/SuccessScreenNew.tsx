export function SuccessScreenNew({ selectedSeats, eventName, eventDate, eventTime, eventVenue, onBackToHome }: any) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold">Booking Successful!</h2>
      <p>Thank you for booking for {eventName}</p>
      <button onClick={onBackToHome} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">Home</button>
    </div>
  );
}
