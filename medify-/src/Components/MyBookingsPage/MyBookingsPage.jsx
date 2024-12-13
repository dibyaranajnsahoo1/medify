import HeaderRibbon from "../HeaderRibbon/HeaderRibbon";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import BookingCard from "../BookingCard/BookingCard";
import BookingOfferCard from "../BookingofferCard/BookingOfferCard";
import MyBookingcard from "../MyBookingCard/MyBookingcard";
import AppDownload from "../AppDownload/AppDownload";
import Footer from "../Footer/Footer";
import './MyBookingsPage.css'

const MyBookingsPage = ({ bookings, onBooking, hospitals }) => {
  return (
    <div className="booking-card" style={{ minHeight: '100vh', background: 'linear-gradient(81deg, #EFF5FE 9.01%, rgba(241,247,255,0.47) 89.11%)' }}>
      <HeaderRibbon />
      <Navbar />
      <div style={{ backgroundColor: '#2AA7FF', height: '110px', width: '100%', borderRadius: '0 0 16px 16px ', borderTopLeftRadius: 'none', zIndex: 0 }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', margin: '0 auto', marginTop: '-60px', marginBottom: '24px' }}>
        <div style={{ width: '100%', display: 'grid', gridTemplateRows: 'auto 1fr', gap: '16px', margin: '0 auto' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '40px', marginLeft: '12px', marginTop:'-20px', position:'relative'}}>
              My Bookings
            </h1>
            <div style={{ width: '50px'}}>
              <SearchBar type="bookings" />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '32px' }}>
            <div style={{ gridColumn: 'span 3' ,}}>
              {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <MyBookingcard
                    key={index}
                    hospital={booking.hospital} 
                    booking={booking}
                  />
                ))
              ) : (
                <p>No bookings found.</p>
              )}
            </div>
            <div style={{ gridColumn: 'span 1' }}>
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
