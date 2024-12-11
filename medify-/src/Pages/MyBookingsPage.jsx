import HeaderRibbon from "../Components/HeaderRibbon/HeaderRibbon";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import BookingCard from "../Components/BookingCard/BookingCard";
import BookingOfferCard from "../Components/BookingofferCard/BookingOfferCard";
import MyBookingcard from "../Components/MyBookingCard/MyBookingcard";
import AppDownload from "../Components/AppDownload/AppDownload";
import Footer from "../Components/Footer/Footer";

const MyBookingsPage = ({ bookings, onBooking, hospitals }) => {
  return (
    <div className="min-h-screen bg-[linear-gradient(81deg,_#EFF5FE_9.01%,_rgba(241,247,255,0.47)_89.11%)]">
      <HeaderRibbon />
      <Navbar />
      <div className="bg-[#2AA7FF] h-[110px] w-full rounded-2xl rounded-t-none  z-0"></div>
      <div className="flex justify-center items-center w-4/5 mx-auto mt-[-60px] mb-24 ">
        <div className="w-full grid grid-rows-[auto,1fr] gap-4 mx-auto">
          <div className="w-full flex items-start gap-2">
            <h1 className="text-white font-bold text-[40px] ml-3 flex-grow">
              My Bookings
            </h1>
            <div className="w-[65%]">
              <SearchBar type="booking" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="col-span-3">
              {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <MyBookingcard
                    key={index}
                    hospital={booking.hospital} // Make sure to pass correct props
                    booking={booking}
                  />
                ))
              ) : (
                <p>No bookings found.</p>
              )}
            </div>
            <div className="col-span-1 ">
              <BookingOfferCard />
            </div>
          </div>
        </div>
      </div>
      <AppDownload />
      <Footer />
    </div>
  );
};

export default MyBookingsPage;
