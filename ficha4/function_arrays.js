const numbers = [];


numbers.push(function() {
    console.log("Hello, World 1");


});

numbers.push(function() {
    console.log("Hello, World 2");
});
numbers.push(function() {
    console.log("Hello, World 3");
});
for (let i = 0; i < numbers.length; i++) {
    numbers[i]();
}

