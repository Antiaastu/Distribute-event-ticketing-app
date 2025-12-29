export function EventDetails({ eventName, eventDate, eventTime, eventVenue, ticketClass }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4">Event Details</h3>
      <p><strong>Event:</strong> {eventName}</p>
      <p><strong>Date:</strong> {eventDate}</p>
      <p><strong>Time:</strong> {eventTime}</p>
      <p><strong>Venue:</strong> {eventVenue}</p>
      <p><strong>Class:</strong> {ticketClass}</p>
    </div>
  );
}
