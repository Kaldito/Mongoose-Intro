// --------------- PACKAGES --------------- //
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// --------------- SCHEMAS --------------- //
const fruitSchema = new mongoose.Schema({
    // name with validations
    name: {
        type: String,
        required: true
    },
    // rating with validations
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    //relations
    favouriteFood: fruitSchema
});

// --------------- MODELS --------------- //
const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", peopleSchema);

// --------------- OPERATIONS --------------- //
const fruit = new Fruit({
    name: "Apple",
    rating: 10,
    review: "Pretty solid as a fruit."
});

// fruit.save();

const person = new Person({
    name: "Dante",
    age: 20
});

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 5,
    review: "Pretty bad."
});

const orange = new Fruit({
    name: "Orange",
    rating: 10,
    review: "Perfect."
});

const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Gross"
});

const person2 = new Person({
    name: "Alma",
    age: 20,
    favouriteFood: banana
});

// person2.save();

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Succesfullt saved all the fruits to fruitsDB.");
//     }
// });

// Person.deleteOne({name: "Alma"}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Todo bien bro");
//     }
// })

// Fruit.find({name: "Banana"}, function(err, fruit){
//     if(err){
//         console.log(err);
//     } else{
//         const person2 = new Person({
//             name: "Alma",
//             age: 20,
//             favouriteFood: fruit[0]
//         });
//         person2.save()
//     }
// });

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    } else{
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
});

