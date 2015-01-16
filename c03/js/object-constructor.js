var hotel = new Object;

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
	return this.rooms - this.booked;
};

val elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

val elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();