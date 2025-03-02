const allDogs = [
    {dogName: "Dallas",
        breed: "Pit Bull",
        age: 3,
        photo: "pics/dallas.jpg"},

    {dogName: "Luna Lovegood",
        breed: "American Pit Bull",
        age: 4,
        photo: "pics/Luna.jpg"},

    
    {dogName: "Marley",
        breed: "Retriever",
        age: 9,
        photo: "pics/Marley.jpg"},

    {dogName: "Piper",
        breed: "Pit Terrier",
        age: 5,
        photo: "pics/Piper.jpg"},

    {dogName: "Ashton",
        breed: "Pit Terrier",
        age: 3,
        photo: "pics/Ashton.jpg"},

    {dogName: "Axel",
        breed: "Pit Bull Mix",
        age: 2,
        photo: "pics/Axel.jpg"},

    {dogName: "Bama",
        breed: "Husky",
        age: 6,
        photo: "pics/Bama.jpg"},

    {dogName: "Bane",
        breed: "Rotweiler",
        age: 9,
        photo: "pics/Bane.jpg"},

    {dogName: "Bea",
        breed: "Pit Mix",
        age: 2,
        photo: "pics/Bea.jpg"},

    {dogName: "Beanie",
        breed: "Pit MIx",
        age: 3,
        photo: "pics/Beanie.jpg"},
]

function findDogs() {
    const minAge = document.querySelector(".min-age").value;
    const selectedDogs = [];

    allDogs.forEach(dog => {
        if (dog.age >= minAge) {
            selectedDogs.push(dog);
        }
    });

    displayDogs(selectedDogs);
}

function displayDogs(dogs) {
    const results = document.querySelector('.result');
    results.innerHTML = '';

    dogs.forEach(dog => {
        results.innerHTML +=`<p>${dog.dogName} - ${dog.breed} - Age: ${dog.age}</p>
            <img src="${dog.photo}" style="width:150px;height:150px;"><br><br>`;
    });
}