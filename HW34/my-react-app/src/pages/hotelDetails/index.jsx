import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { fetchHotelRequest, bookHotelRequest } from '@/store/hotelDetails/hotelDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';

const HotelDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { hotel, loading, bookingInProgress } = useSelector((state) => state.hotelDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchHotelRequest(id));

    }
  }, [id, dispatch]);

  const handleBooking = async () => {
    if (!hotel || hotel.booked) return;
    dispatch(bookHotelRequest(id))
  };

  if (loading) {
    return <p className="text-center text-yellow-400">Loading...</p>;
  }

  if (!hotel) {
    return <p className="text-center text-red-400">Hotel is not found</p>;
  }

  return (
    <section className="flex flex-col gap-6 ">
      <button
        onClick={() => navigate('/hotels')}
        className="text-[#05113B] hover:underline self-start"
      >
        ← Back to list
      </button>

      <img src={hotel.image} alt={hotel.title} className="w-full h-96 object-cover rounded-lg" />

      <div>
        <h2 className="text-3xl font-bold text-[#05113B] mb-2">{hotel.title}</h2>
        <p className="text-gray-400 mb-2">{hotel.location}</p>
        <p className="text-[#05113B] font-bold text-xl mb-4">${hotel.price} / night</p>
        <p className="text-[#05113B] text-lg leading-relaxed">{hotel.description}</p>
      </div>

      <button
        onClick={handleBooking}
        disabled={hotel.booked || bookingInProgress}
        className={clsx(
          'mt-4 w-full py-3 text-lg font-bold rounded transition',
          hotel.booked
            ? 'bg-[#000123] text-gray-400 !cursor-not-allowed'
            : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300',
        )}
      >
        {hotel.booked ? 'Already booked' : bookingInProgress ? 'Booking...' : 'Book'}
      </button>
    </section>
  );
};

export default HotelDetailsPage;