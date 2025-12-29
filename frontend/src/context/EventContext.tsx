'use client';
import { createContext, useContext, useState } from 'react';

const EventContext = createContext<any>(null);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [selectedEvent, setSelectedEvent] = useState({ id: '1', name: 'Event', date: '2025-01-01', time: '10:00', venue: 'Venue' });
  const [checkoutSeats, setCheckoutSeats] = useState([]);
  const [checkoutTicket, setCheckoutTicket] = useState(null);
  const addBooking = (booking: any) => console.log('booking added', booking);
  const isEventLoading = false;

  return (
    <EventContext.Provider value={{ 
      selectedEvent, setSelectedEvent, 
      checkoutSeats, setCheckoutSeats, 
      checkoutTicket, setCheckoutTicket,
      addBooking, isEventLoading 
    }}>
      {children}
    </EventContext.Provider>
  );
}

export const useEvents = () => useContext(EventContext);
