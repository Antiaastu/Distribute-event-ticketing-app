export interface Seat {
  id: string;
  number: string;
  price: number;
  status: 'available' | 'occupied' | 'selected';
}

export interface Booking {
  id: string;
  userId: string;
  userEmail: string;
  seats: Seat[];
  totalAmount: number;
  bookingDate: string;
  status: string;
}
