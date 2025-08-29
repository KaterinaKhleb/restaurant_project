// import axios from "axios";

const state = {

    pizza: [{
            id: 1,
            name: "Diavola with olives",
            ingredients: "vegan cheese, tomatos, hot pepper, olives, ",
            price: 9,
            src: "pizzav1",
            vegan: true
        },
        {
            id: 2,
            name: "Pepperoni-spinat",
            ingredients: "pepperoni, parmesan, mozarella, spinat, tomatos",
            price: 12,
            src: "pizzav2",
            vegan: false

        },
        {
            id: 3,
            name: "Cheesy paprika",
            ingredients: "brie, cheddar, paprika, olives, leek",
            price: 10,
            src: "pizzav3",
            vegan: false
        },
        {
            id: 4,
            name: "Vegetarian",
            ingredients: "paprika, zucchini, green and black olives, leek, tomatos",
            price: 11,
            src: "pizzav4",
            vegan: true

        },
        {
            id: 5,
            name: "Quattro Formaggi",
            ingredients: "brie, cheddar, blue cheese, mozzarella, tomatos",
            price: 12,
            src: "pizzav9",
            vegan: false

        },
        {
            id: 6,
            name: "Ruccola",
            ingredients: "tomatos, vegan parmesan, mozzarella, ruccola",
            price: 10,
            src: "pizzav6",
            vegan: true

        },
        {
            id: 7,
            name: "Cranberry-Beef",
            ingredients: "cranberry souce, beef, onion, garlic, spinat",
            price: 13,
            src: "pizzav7",
            vegan: false

        },
        {
            id: 8,
            name: "Grilled veggies",
            ingredients: "frilled vegetables, pepperoni, cheddar, mozarella",
            price: 9,
            src: "pizzav8",
            vegan: false

        },
        {
            id: 9,
            name: "Cherry-bomb",
            ingredients: "cherry tomatos, parmesan, vegan mozarella, spinat",
            price: 10,
            src: "pizzav5",
            vegan: true

        },

    ],


    wine: [
        {
            id: 1,
            name: "Yellow fall",
            sweet: "Dry",
            region: "Tuscany",
            price: 13,
            src: "wine1",
            color: "white"
        },
        {
            id: 2,
            name: "Slumehof",
            sweet: "Semi-sweet",
            region: "Sardinia",
            price: 14,
            src: "wine2",
            color: "white"

        },
        {
            id: 3,
            name: "Jacob's Greek",
            sweet: "Sweet",
            region: "Apulia",
            price: 10,
            src: "wine3",
            color: "red"


        },
        {
            id: 4,
            name: "Campo Vijeio",
            sweet: "Dry",
            region: "Lombardy",
            price: 11,
            src: "wine4",
            color: "white"

        },
        {
            id: 5,
            name: "Earthquake",
            sweet: "Semi-sweet",
            region: "Sardinia",
            price: 12,
            src: "wine5",
            color: "red"

        },
        {
            id: 6,
            name: "Bird Bottle",
            sweet: "Sweet",
            region: "Tuscany",
            price: 10,
            src: "wine6",
            color: "white"

        },
        {
            id: 7,
            name: "Lallier Laborie",
            sweet: "Semi-sweet",
            region: "Apulia",
            price: 11,
            src: "wine7",
            color: "red"

        },
        {
            id: 8,
            name: "Everything is wine",
            sweet: "Dry",
            region: "Lombardy",
            price: 14,
            src: "wine8",
            color: "red"

        },
        {
            id: 9,
            name: "Montepalio",
            sweet: "Semi-sweet",
            region: "Sardinia",
            price: 10,
            src: "wine9",
            color: "red"
        }

    ],

    locations: [{
            id: 1,
            city: "New York",
            country: "USA",
            address: " 92-02 Atlantic Ave, Jamaica, NY 11416, USA",
            monfri: "8am - 10pm",
            saturday: "10am - 10pm",
            sunday: "10am - 8pm",
            phone: "+555 876743423",
            email: "cozynight_ny@pizza.com"
        },
        {
            id: 2,
            city: "Denver",
            country: "USA",
            address: " 1365 S Osceola St, Denver, CO 80219, USA",
            monfri: "9am - 10pm",
            saturday: "8am - 10pm",
            sunday: "8am - 8pm",
            phone: "+555 028369730",
            email: "cozynight_dv@pizza.com"
        },
        {
            id: 3,
            city: "Brasilia",
            country: "Brazil",
            address: " Loja 1, Taguatinga Norte, DF, 72150-055, Brazil",
            monfri: "11am - 10pm",
            saturday: "11am - 10pm",
            sunday: "closed",
            phone: "+555 876743423",
            email: "cozynight_bz@pizza.com"
        },
        {
            id: 4,
            city: "Sevilla",
            country: "Spain",
            address: " Av. de Ramón y Cajal, 24, 41005 Sevilla, Spain",
            monfri: "9am - 11pm",
            saturday: "9am - 11pm",
            sunday: "10am - 8pm",
            phone: "+555 893843423",
            email: "cozynight_sp@pizza.com"
        },
        {
            id: 5,
            city: "Florence",
            country: "Italy",
            address: "Viale Giovanni Amendola, 24/r, 50121 Firenze FI, Italy",
            monfri: "9am - 9pm",
            saturday: "9am - 10pm",
            sunday: "closed",
            phone: "+555 122143423",
            email: "cozynight_it@pizza.com"
        },
        {
            id: 6,
            city: "Munich",
            country: "Germany",
            address: " Breisacher Str. 30, 81667 München, Germany",
            monfri: "10am - 9pm",
            saturday: "11am - 9pm",
            sunday: "10am - 8pm",
            phone: "+555 887245132",
            email: "cozynight_de@pizza.com"
        },
        {
            id: 7,
            city: "Tallin",
            country: "Estonia",
            address: " Viru tänav street 18, 10140 Tallinn, Estonia",
            monfri: "8am - 10pm",
            saturday: "10am - 10pm",
            sunday: "10am - 8pm",
            phone: "+555 913243736",
            email: "cozynight_es@pizza.com"
        },
        {
            id: 8,
            city: "Canberra",
            country: "Australia",
            address: "East Block, Kings Ave, Parkes ACT 2600, Australia",
            monfri: "9am - 11pm",
            saturday: "10am - 9pm",
            sunday: "closed",
            phone: "+555 71293423",
            email: "cozynight_as@pizza.com"
        },
    ],
    persons: [{
            id: 1,
            name: "Orson Colon",
            position: "Chief Cook",
            location: "New York",
            src: "person1",
        },
        {
            id: 2,
            name: "Jolene Gilliam",
            position: "Chief Cook",
            location: "Sevilla",
            src: "person2",

        },
        {
            id: 3,
            name: "Maxime Thornton",
            position: "Chief Cook",
            location: "Tallin",
            src: "person3",
        },
        {
            id: 4,
            name: "Austin Leal",
            position: "Chief Cook",
            location: "Brasilia",
            src: "person4",

        },
        {
            id: 5,
            name: "Jolene Gilliam",
            position: "Chief Cook",
            location: "Munich",
            src: "person5",

        },
        {
            id: 6,
            name: "Caiden Hobbs",
            position: "Chief Cook",
            location: "Florence",
            src: "person6",

        },
        {
            id: 7,
            name: "Lillie-Mae Cantu",
            position: "Chief Cook",
            location: "Canberra",
            src: "person7",

        },
        {
            id: 8,
            name: "Matteo Rowe",
            position: "Chief Cook",
            location: "Denver",
            src: "person8",

        },
        {
            id: 9,
            name: "Mariana Mcphee",
            position: "Senior Chief",
            location: "Denver",
            src: "person9",

        },


    ],



}

const getters = {
    allPizza: (state) => state.pizza,
    allWine: (state) => state.wine,
    allLocations: (state) => state.locations,
    allPersons: (state) => state.persons,

};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}