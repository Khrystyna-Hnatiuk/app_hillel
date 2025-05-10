import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import HotelCard from '@/pages/hotelsList/components/hotelCard';
import clsx from 'clsx';
import { fetchHotelsRequest } from '@/store/hotelsList/hotelsSlice';

const HotelsListPage = () => {
  
const dispatch = useDispatch();
 
  const [searchParams, setSearchParams] = useSearchParams();
  const {hotels,loading,error} = useSelector(state => state.hotels);
 
 useEffect(() => {
    dispatch(fetchHotelsRequest())
  }, [dispatch]);

  const location = searchParams.get('location')?.toLowerCase() || '';
  const priceFrom = parseInt(searchParams.get('priceFrom')) || 0;
  const priceTo = parseInt(searchParams.get('priceTo')) || Infinity;

  
  const filteredHotels = Array.isArray(hotels) && hotels.length > 0
  ? hotels.filter(hotel => {
      const matchLocation = hotel.location.toLowerCase().includes(location);
      const matchPrice = hotel.price >= priceFrom && hotel.price <= priceTo;
      return matchLocation && matchPrice;
    })
  : [];


  if (loading) {
    return <p className="text-center text-blue-900">Hotels loading...</p>;
  }

  if (!filteredHotels.length) {
    return <p className="text-center text-black">No hotels found for this query.</p>;
  }

  return (
    <section>
      {!!searchParams.size && (
        <button
          className="text-blue-900 hover:underline self-start mb-6"
          onClick={() => setSearchParams('')}
        >
          Clear filters
        </button>
      )}

      <h2 className="text-3xl font-bold text-blue-900 mb-6">Available hotels</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map(hotel => (
          <HotelCard key={hotel.id} {...hotel} className={clsx(hotel.booked && 'grayscale')} />
        ))}
      </div>
    </section>
  );
};

export default HotelsListPage;