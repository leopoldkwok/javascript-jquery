var hotel = {
	name: 'Quay',
	room: 40,
	booked: 25,
	checkAvailability: function() {
		return this.rooms = this.booked;
	}
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

val elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

