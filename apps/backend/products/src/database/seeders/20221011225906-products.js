'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        id: 'e99a6998-befe-4b9c-8e71-91e1ab81595e',
        product_name: 'Notebook',
        price: 2499.99,
        image: 'https://www.lg.com/br/images/computadores/md05949297/gallery/medium01.jpg',
        description: "Notebook LG gram 15,6' Windows 10 Home - Intel® Core™ i7, leve e compacto, bateria de 72wh até 19 horas de uso. Máximo desempenho"
      },
      {
        id: 'd125eff3-d72b-4978-a138-0c4f4463d2b2',
        product_name: 'Tablet',
        price: 1499.99,
        image: 'https://a-static.mlcdn.com.br/1500x1500/tablet-samsung-galaxy-tab-s7-fe-124-4g-wi-fi-128gb-android-cam-8mp-selfie-5mp/magazineluiza/230608700/825c7d70626aaedb75dd7fc5d93f749f.jpg',
        description: 'Aproveite a elegância do Galaxy Tab S7 FE em suas mãos. A estrutura única e simples do design tem aparência sofisticada com espaço mínimo de câmera na parte posterior, e o formato fino garante conforto durante o uso.'
      },
      {
        id: '9380b80f-9782-4507-9436-953f1db70157',
        product_name: 'iPhone 13',
        price: 2499.99,
        image: 'https://a-static.mlcdn.com.br/1500x1500/tablet-samsung-galaxy-tab-s7-fe-124-4g-wi-fi-128gb-android-cam-8mp-selfie-5mp/magazineluiza/230608700/825c7d70626aaedb75dd7fc5d93f749f.jpg',
        description: 'Aproveite a elegância do Galaxy Tab S7 FE em suas mãos. A estrutura única e simples do design tem aparência sofisticada com espaço mínimo de câmera na parte posterior, e o formato fino garante conforto durante o uso.'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
