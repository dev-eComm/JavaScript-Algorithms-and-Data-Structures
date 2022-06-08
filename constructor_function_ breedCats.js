function breedCats(breed, name, color, age, owner) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.color = color;
    this.owner = owner;
  }
  
  var blackTiger = new breedCats(
    "Mainecoon",
    "Lisa",
    "lightbluesilver",
    4,
    "Mike"
  );
  var redJumper = new breedCats("Mainecoon", "Copper", "red", 1, "Jessica");
  
  console.log(blackTiger, redJumper);
  {
      "breed": "Mainecoon",
      "name": "Lisa",
      "age": 4,
      "color": "lightbluesilver",
      "owner": "Mike"
  }
  {
      "breed": "Mainecoon",
      "name": "Copper",
      "age": 1,
      "color": "red",
      "owner": "Jessica"
  }