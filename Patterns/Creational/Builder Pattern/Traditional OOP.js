// ================================ Problem:
/*
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User(
  "Bob",
  undefined,
  undefined,
  new Address("70123", "2501 Callie Lane")
); // all these undefineds are cumbersome
console.log(user);
*/

// ================================ Solution:

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  setAge(age) {
    this.user.age = age;
    return this;
  }
  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }
  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

let builder = new UserBuilder("Bob").setAge(10).build();
console.log(user);
