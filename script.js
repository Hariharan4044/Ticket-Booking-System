function bookTickets() {
	const from = document.getElementById("from").value;
	const to = document.getElementById("to").value;
	const date = document.getElementById("date").value;
	const seats = parseInt(document.getElementById("seats").value);
	const cardNumber = document.getElementById("cardNumber").value;
	const phone = document.getElementById("phone").value;

	// Validate inputs
	if (!from || !to || !date || isNaN(seats) || seats < 1 || !cardNumber || !phone) {
		alert("Please fill in all required fields.");
		return;
	}

	if (cardNumber.length !== 16 || isNaN(cardNumber)) {
		alert("Please enter a valid 16-digit card number.");
		return;
	}

	if (!/^\d{10,12}$/.test(phone)) {
		alert("Please enter a valid phone number (10-12 digits).");
		return;
	}

	
	const ticketNumber = `TKT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

	localStorage.setItem("ticketNumber", ticketNumber);
	localStorage.setItem("from", from);
	localStorage.setItem("to", to);
	localStorage.setItem("date", date);
	localStorage.setItem("seats", seats);
	localStorage.setItem("cardNumber", cardNumber.slice(-4));
	localStorage.setItem("phone", phone);

	
	window.location.href = "ticket.html";
}
