const phones = [
  {
    id: 1,
    name: "iPhone",
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2,
  },

  {
    id: 2,
    name: "Galaxy",
    maker: "Samsung",
    operatingSystem: "Android",
    price: 600,
    weight: 1.4,
  },

  {
    id: 3,
    name: "nok",
    maker: "Nokia",
    operatingSystem: "Android",
    price: 300,
    weight: 1.8,
  },
];


const pixel = {
    id: 4,
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 750,
    weight: 1.3
}

const iPad = {
    id: 5,
    name: "IPad",
    maker: "Apple",
    operatingSystem: "OS",
    price: 1750,
    weight: 1.9
}

phones.push(pixel,iPad)

const phoneToFind = 2

for (const phone of phones) {
    if (phone.id === phoneToFind) {
        phone.price *= 1.05
        console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars.`)
    }
}

// for (const phone of phones) {
//     console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars.`)
// }


