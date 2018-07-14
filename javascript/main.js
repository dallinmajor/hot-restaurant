var userReservation = [{
    reserved: false,
    table: "Table 1",
    name: "",
    email: "",
    number: "",
    id: "",
}];

function makeReservation(name,email,number,id) {
    for (var i = 0; i < userReservation.length; i++) {
        var table = userReservation[i];
 
        if (userReservation[i].reserved === true) {
            console.log(table.table + "is already reserved")
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