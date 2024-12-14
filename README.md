Live link - https://medify-taupe.vercel.app/
# MEDIFY - Medical Center Slot Booking Platform

## Overview

**Medify** is a React-based web application that allows users to search for medical centers in a specific state and city in the USA, book appointments, and view their bookings. The platform is designed with a responsive layout and provides various sections such as Find Doctors, Hospitals, Medicines, and more, as per the Figma design. The platform integrates with a backend API to fetch data such as states, cities, and medical centers.


---

## Key Features

### 1. **Landing Page**
- **Navigation Bar**: Allows users to navigate through different sections such as "Find Doctors", "Hospitals", "Medicines", etc.
- **State and City Selection**: Users can select a state and city from dropdown menus. Options are fetched dynamically via the API.
- **Search**: Based on the selected state and city, users are shown a list of available medical centers in that area.


![Landing Page Screenshot](https://github.com/dibyaranajnsahoo1/medify/blob/main/Screenshot%202024-12-14%20134618.png)

### 2. **Search Results Page**
- Displays available medical centers in the selected state and city.
- Each medical center includes key details like the name, address, overall rating, and more.
- Users can view more details and book an appointment at their chosen medical center.

### 3. **Booking Interface**
- Users can select a medical center, choose an appointment date, and book a slot.
- Appointment booking is possible within a time frame from today up to one week in advance.
- The interface includes a calendar-like selection for the date and available time slots for booking.

![Booking Interface](https://github.com/dibyaranajnsahoo1/medify/blob/main/Screenshot%202024-12-14%20134705.png?raw=true)

### 4. **My Bookings Page**
- Displays a personalized list of all user bookings, including:
  - Medical center name
  - Appointment date and time
  - Other relevant details.

### 5. **Responsive Design**
- The entire application is fully responsive and adapts to all screen sizes, ensuring that the user experience remains smooth on mobile devices, tablets, and desktops.
  
### 6. **Carousel**
- Swiper carousel used for displaying relevant information in an interactive and responsive format.

---
![Slot_Booking ](https://github.com/dibyaranajnsahoo1/medify/blob/main/Screenshot%202024-12-14%20134712.png?raw=true)
![MyBookings ](https://github.com/dibyaranajnsahoo1/medify/blob/main/Screenshot%202024-12-14%20134723.png?raw=true)

## API Integration

The application fetches data from the backend API to populate dropdown options for states and cities, as well as medical center information based on the selected state and city.

- **Get a list of all states:**

- https://meddata-backend.onrender.com/states
  
- **Get a list of all cities in a particular state:**
-https://meddata-backend.onrender.com/cities/:state

- **Get a list of all medical centers based on a state and city:**
https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name>

Example:
https://meddata-backend.onrender.com/data?state=Alaska&city=SOLDOTNA

**Sample JSON Response:**
```json
{
"hospital_name": "Soldotna Medical Center",
"hospital_address": "123 Main St",
"city": "Soldotna",
"state": "Alaska",
"zip_code": "99669",
"rating": 4.5
}
