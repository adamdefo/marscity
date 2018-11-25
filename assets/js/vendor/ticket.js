var $tickets = [].slice.call(document.querySelectorAll('.js-ticket'));
$tickets.forEach(function (ticket, idx) {
    ticket.addEventListener('click', function (ev) {
        ev.preventDefault();
        var ticketId = this.dataset.ticketId;
    })
});