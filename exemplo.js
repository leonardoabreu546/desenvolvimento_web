var obj = {};

var person = {
    id:54766643454,
    firstNname: "Antero",
    lastName: "Caboco",
    age: 45,
    friends: [7634, 4355467878, 3456567876],
    address: {
        street: "Cabo da roca",
        number: "23",
        postalCode: "2785-123",
        city: "Malvinas",
        country: "USA"
    },
    greeting: function() {
        return "O meu nome é " + this.firstNname;
        }
};

var x = person.greeting();
console.log(x);


