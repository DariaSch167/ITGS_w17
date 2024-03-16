// Родительский класс Transport
class Transport {
  constructor(brand, price, image) {
    this.brand = brand;
    this.price = price;
    this.image = image;
    this.type = null;
  }

  getInfo() {
    return this.brand;
  }
  getPrice() {
    return this.price;
  }
  getType() {
    if (this.type === "Car") {
      return "автомобиль";
    } else if (this.type === "Bike") {
      return "мотоцикл";
    } else {
      return this.type;
    }
  }
}

// Дочерний класс Car
class Car extends Transport {
  constructor(brand, price, image, doors) {
    super(brand, price, image);
    this.type = "Car";
    this.doors = doors;
  }

  getDoorsCount() {
    return this.doors;
  }
}

// Дочерний класс Bike
class Bike extends Transport {
  constructor(brand, price, image, maxSpeed) {
    super(brand, price, image);
    this.type = "Bike";
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }
}

// Заданный массив объектов
const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-f57/360/2022-iron-883-f57-motorcycle-01.jpg?impolicy=myresize&rw=1600",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

// Перевела заданный массив в массив объектов классов Car и Bike
const transportObj = new Array(data.length);

for (let i = 0; i < data.length; i++) {
  if (data[i].type === "car") {
    transportObj[i] = new Car(
      data[i].brand,
      data[i].price,
      data[i].image,
      data[i].doors
    );
  } else {
    transportObj[i] = new Bike(
      data[i].brand,
      data[i].price,
      data[i].image,
      data[i].maxSpeed
    );
  }
}

// Вывожу данные из массива объектов на страницу
const transportWrapper = document.querySelector(".transport__container");

transportObj.forEach(function (obj) {
  const transport = document.createElement("div");
  transport.classList.add("transport");
  transportWrapper.appendChild(transport);

  const transportImage = document.createElement("img");
  transportImage.classList.add("transport-image");
  transportImage.src = obj.image;
  transportImage.alt = obj.brand;
  transport.append(transportImage);

  const transportType = document.createElement("p");
  transportType.classList.add("transport-type");
  transportType.textContent = "Вид транспорта: " + obj.getType();
  transport.append(transportType);

  const transportInfo = document.createElement("p");
  transportInfo.classList.add("transport-info");
  transportInfo.textContent = "Бренд: " + obj.getInfo();
  transport.append(transportInfo);

  const transportPrice = document.createElement("p");
  transportPrice.classList.add("transport-price");
  transportPrice.textContent =
    "Стоимость: " + obj.getPrice().toLocaleString("ru-RU") + " руб";
  transport.append(transportPrice);

  const transportOption = document.createElement("p");
  transportOption.classList.add("transport-option");
  if (obj.type === "Car") {
    transportOption.textContent = "Количество дверей: " + obj.getDoorsCount();
  } else if (obj.type === "Bike") {
    transportOption.textContent =
      "Максимальная скорость: " + obj.getMaxSpeed() + " км/ч";
  }
  transport.append(transportOption);
});
