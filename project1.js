const Swiggy = [
    { hotel_Name: "vasant Bhavan", cuisine: "Indian", rating: "4", distance: "4" },
    { hotel_Name: "A2B", cuisine: "Indian", rating: "3", distance: "3" },
    { hotel_Name: "Saravana Bhavan", cuisine: "Indian", rating: "4", distance: "4" },
    { hotel_Name: "Dominos", cuisine: "American", rating: "4", distance: "3" },
    { hotel_Name: "Taco bell", cuisine: "Mexican", rating: "3", distance: "14" },
    { hotel_Name: "KFC", cuisine: "American", rating: "2", distance: "23"}
]

const Indian_cuisine = Swiggy.filter(data => data.cuisine == "Indian")
console.log(Indian_cuisine)


    
    