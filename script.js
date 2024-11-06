function bookTickets() {
	// Get input values
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;
	var date = document.getElementById("date").value;
	var seats = parseInt(document.getElementById("seats").value);

	// Get payment details
	var cardNumber = document.getElementById("cardNumber").value;
	var expiryDate = document.getElementById("expiryDate").value;
	var cvv = document.getElementById("cvv").value;

	// Validate all input fields
	if (
		from === "" || 
		to === "" || 
		date === "" || 
		isNaN(seats) || seats < 1 ||
		cardNumber === "" || 
		expiryDate === "" || 
		cvv === ""
	) {
		alert("Please enter all required information.");
		return;
	}

	// Basic validation for payment fields
	if (cardNumber.length !== 16 || isNaN(cardNumber)) {
		alert("Please enter a valid 16-digit card number.");
		return;
	}

	if (cvv.length !== 3 || isNaN(cvv)) {
		alert("Please enter a valid 3-digit CVV.");
		return;
	}

	// Confirm booking details with user
	var confirmation = confirm(
		"You have selected the following options:\n" +
		"From: " + from +
		"\nTo: " + to +
		"\nDate: " + date +
		"\nNumber of Seats: " + seats +
		"\n\nPayment Details:\nCard Number: **** **** **** " + cardNumber.slice(-4) +
		"\n\nClick OK to confirm booking."
	);

	// Show success message if booking confirmed
	if (confirmation) {
		alert("Booking successful! You will be redirected to your ticket.");

		// Save booking details in localStorage for use on the ticket page
		localStorage.setItem("from", from);
		localStorage.setItem("to", to);
		localStorage.setItem("date", date);
		localStorage.setItem("seats", seats);
		localStorage.setItem("cardNumber", "**** **** **** " + cardNumber.slice(-4));

		// Redirect to ticket page
		window.location.href = "ticket.html";
	}
}

// On ticket.html, display ticket information
if (window.location.pathname.endsWith("ticket.html")) {
	var ticketDetails = `
		<p><strong>From:</strong> ${localStorage.getItem("from")}</p>
		<p><strong>To:</strong> ${localStorage.getItem("to")}</p>
		<p><strong>Date:</strong> ${localStorage.getItem("date")}</p>
		<p><strong>Number of Seats:</strong> ${localStorage.getItem("seats")}</p>
		<p><strong>Payment:</strong> ${localStorage.getItem("cardNumber")}</p>
	`;
	document.getElementById("ticketDetails").innerHTML = ticketDetails;
}
