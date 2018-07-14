var userReservation = [{
    reserved: false,
    table: "Table 1",
    name: "",
    email: "",
    number: "",
    id: "",
}, {
    reserved: false,
    table: "Table 2",
    name: "",
    email: "",
    number: "",
    id: "",
}, {
    reserved: false,
    table: "Table 3",
    name: "",
    email: "",
    number: "",
    id: "",
}, {
    reserved: false,
    table: "Table 4",
    name: "",
    email: "",
    number: "",
    id: "",
}, {
    reserved: false,
    table: "Table 5",
    name: "",
    email: "",
    number: "",
    id: "",
}];

$("#reservation-btn").on("click", function(data) {
var name = $("#name").val().trim();
var email = $("#email").val().trim();
var number = $("#number").val().trim();
var id = $("#id").val().trim();
makeReservation(name, email, number, id);
});

function makeReservation(name, email, number, id) {

    for (var i = 0; i < userReservation.length; i++) {

        var table = userReservation[i];

        if (count === userReservation.length) {
            
        }

        if (userReservation[i].reserved === true) {
            console.log(table.table + "is already reserved")
            count = count + 1;
        } else {
            table.name = name;
            table.email = email;
            table.number = number;
            table.id = id;
            i = userReservation.length + i;

            console.log(`${table.table} is now reserved for ${name}!`)
        }
    }
}

module.exports = userReservation;