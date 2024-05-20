import campImage1 from './assets/fouragetent.png';
import campImage2 from './assets/gasbakken.png';
import campImage3 from './assets/PVC-zeil.png';
import campImage4 from './assets/quechua-rugtas.png';
import campImage5 from './assets/quechua-tent.png';
import campImage6 from './assets/seniorentent.png';
import campImage7 from './assets/verlengkabel.png';
import campImage8 from './assets/zeil.png';
import campImage9 from './assets/klapstoel.jpg';
import campImage10 from './assets/hangmat.jpeg';
import campImage11 from './assets/kampeertafel.jpg';
import campImage16 from './assets/veldbed.jpg';


///Staat 1 = Beschadigd
///Staat 2 = Defect
///Staat 3 = Matig
///Staat 4 = Goed
///Staat 5 = Perfect

export const products = [{
  id: '123',
  name: 'fouragetent',
  item: {
    price: '30',
    stock: 2,
    waarborg: '150.00',
    available: true,
    staat: "5",
    art_category: 'tent, kampeermateriaal, legertenten',
  },
  description: 'Transformeer jullie kamp-ervaring met onze praktische fourage tenten! 🏕️ Groot en uitgerust, is deze tent ideaal voor allerlei activiteiten, van gezellige kampvuren tot boeiende workshops. Ook geschikt voor langdurige kampen. Regen/windbestendig.',
  imageUrl: campImage1,
  seller: {
    name: 'Chiro Kuringen',
    email: 'chirokuringen@gmail.com',
    location: 'Hasselt, Kuringen',
    averageRating: '5.0',
  },
  premium: true,
}, {
  id: '234',
  name: 'gasbakken',
  item: {
    price: '1.50',
    stock: 5,
    waarborg: '50.00',
    available: true,
    staat: "4",
    art_category: 'kookmateriaal, gasbakken, kookvuur',
  },
  description: 'Onze gasbakken zijn perfect voor het bereiden van maaltijden in de buitenlucht. Ze zijn compact, efficiënt en eenvoudig in gebruik. Ideaal voor kampvuren en groepsmaaltijden.',
  imageUrl: campImage2,
  seller: {
    name: 'Scouts en Gidsen Sint-Brixius-Rode',
    email: 'scoetevanroi@gmail.com',
    location: 'Sint-Brixius-Rode, Meise',
    averageRating: '5.0',
  },
  premium: false,
}, {
  id: '345',
  name: 'PVC zeil',
  item : { 
    price: '2.50',
    stock: 3,
    waarborg: '100.00',
    available: false,
    staat: "3",
    art_category: 'zeilen, kampeermateriaal',
  },
  description: 'Onze PVC zeilen bieden uitstekende bescherming tegen regen en wind. Ze zijn duurzaam en gemakkelijk op te zetten, perfect voor elk kamp.',
  imageUrl: campImage3,
  seller: {
    name: 'Chiro Sint-Truiden',
    email: 'chirosinttruiden@gmail.com',
    location: 'Sint-Truiden, Limburg',
    averageRating: '4.5',
  },
  premium: false,
}, {
  id: '456',
  name: 'quechua rugtas',
  item: {
    price: '6.00',
    stock: 1,
    waarborg: '20.00',
    available: true,
    staat: "2",
    art_category: 'rugzak, kampeermateriaal',
  },
  description: 'Onze Quechua rugzakken zijn ideaal voor dagtochten en lange wandelingen. Ze bieden voldoende ruimte en comfort, zodat je al je benodigdheden gemakkelijk kunt meenemen.',
  imageUrl: campImage4,
  seller: {
    name: 'Scouts en Gidsen Nieuwenrode',
    email: 'scoutsengidsennieuwenrode@gmail.com',
    location: 'Nieuwenrode, Kapelle-op-den-Bos',
    averageRating: '4.0',
  },
  premium: true,
}, { 
  id: '567',
  name: 'quechua tent',
  item: {
    price: '12.00',
    stock: 1,
    waarborg: '50.00',
    available: true,
    staat: "1",
    art_category: 'tent, kampeermateriaal, kleine tent, quechua tent, quechua',
  },
  description: 'Onze Quechua tenten zijn eenvoudig op te zetten en bieden een comfortabele slaapplek voor twee personen. Ze zijn lichtgewicht en gemakkelijk te vervoeren.',
  imageUrl: campImage5,
  seller: {
    name: 'Chiro Kuringen',
    email: 'chirokuringen@gmail.com',
    location: 'Hasselt, Kuringen',
    averageRating: '5.0',
  },
  premium: true,
}, {
  id: '678',
  name: 'seniorentent',
  item: {
    price: '25.00',
    stock: 1,
    waarborg: '100.00',
    available: false,
    staat: "4",
    art_category: 'tent, kampeermateriaal, seniortent, seniorentent',
  },
  description: 'Onze seniorententen bieden ruime accommodatie voor grote groepen. Ze zijn stevig en duurzaam, perfect voor langdurige kampen en evenementen.',
  imageUrl: campImage6,
  seller: {
    name: 'Scouts en Gidsen Sint-Brixius-Rode',
    email: 'scoetevanroi@gmail.com',
    location: 'Sint-Brixius-Rode, Meise',
    averageRating: '5.0',
  },
  premium: false,
}, {
  id: '789',
  name: 'verlengkabel',
  item: {
    price: '0.50',
    stock: 2,
    waarborg: '10.00',
    available: true,
    staat: "3",
    art_category: 'elektronica, verlengkabels',
  },
  description: 'Onze verlengkabels zijn essentieel voor elk kamp. Ze zijn betrouwbaar en veilig, waardoor je gemakkelijk stroom kunt voorzien waar je het nodig hebt.',
  imageUrl: campImage7,
  seller: {
    name: 'Chiro Kuringen',
    email: 'chirokuringen@gmail.com',
    location: 'Hasselt, Kuringen',
    averageRating: '5.0',
  },
  premium: false,
}, {
  id: '890',
  name: 'zeil',
  item: {
    price: '5.00',
    stock: 3,
    waarborg: '15.00',
    available: true,
    staat: "5",
    art_category: 'zeilen, kampeermateriaal, afdekzeil',
  },
  description: 'Onze zeilen zijn perfect voor het afdekken van je uitrusting of als extra beschutting tegen het weer. Ze zijn sterk en waterdicht.',
  imageUrl: campImage8,
  seller: {
    name: 'Scouts en Gidsen Nieuwenrode',
    email: 'scoutsengidsennieuwenrode@gmail.com',
    location: 'Nieuwenrode, Kapelle-op-den-Bos',
    averageRating: '4.0',
  },
  premium: true,
}, {
  id: '901',
  name: 'klapstoel',
  item: {
    price: '2.00',
    stock: 10,
    waarborg: '10.00',
    available: true,
    staat: "4",
    art_category: 'meubilair, kampeermateriaal',
  },
  description: 'Onze klapstoelen zijn lichtgewicht en gemakkelijk te vervoeren. Perfect voor extra zitplaatsen bij elk kampvuur of evenement.',
  imageUrl: campImage9,
  seller: {
    name: 'Scouts Sint-Jan',
    email: 'scoutsstjan@gmail.com',
    location: 'Antwerpen, Vlaanderen',
    averageRating: '4.2',
  },
  premium: false,
}, {
  id: '1012',
  name: 'hangmat',
  item: {
    price: '8.00',
    stock: 4,
    waarborg: '25.00',
    available: true,
    staat: "5",
    art_category: 'slaapmateriaal, kampeermateriaal',
  },
  description: 'Onze hangmatten zijn comfortabel en duurzaam. Ideaal voor een ontspannen middag in de natuur.',
  imageUrl: campImage10,
  seller: {
    name: 'Chiro Don Bosco',
    email: 'chirodonbosco@gmail.com',
    location: 'Leuven, Vlaams-Brabant',
    averageRating: '4.8',
  },
  premium: true,
}, {
  id: '1113',
  name: 'kampeertafel',
  item: {
    price: '4.50',
    stock: 3,
    waarborg: '20.00',
    available: true,
    staat: "3",
    art_category: 'meubilair, kampeermateriaal',
  },
  description: 'Onze kampeertafels zijn stevig en gemakkelijk op te zetten. Ideaal voor maaltijden en activiteiten in de buitenlucht.',
  imageUrl: campImage11,
  seller: {
    name: 'Scouts De Pioniers',
    email: 'scoutspioniers@gmail.com',
    location: 'Gent, Oost-Vlaanderen',
    averageRating: '4.5',
  },
  premium: false,
}, {
  id: '1618',
  name: 'veldbed',
  item: {
    price: '7.00',
    stock: 4,
    waarborg: '25.00',
    available: true,
    staat: "3",
    art_category: 'slaapmateriaal, kampeermateriaal',
  },
  description: 'Onze veldbedden zijn comfortabel en eenvoudig op te zetten. Perfect voor een goede nachtrust tijdens het kamperen.',
  imageUrl: campImage16,
  seller: {
    name: 'Chiro Nieuwland',
    email: 'chironieuwland@gmail.com',
    location: 'Aalst, Oost-Vlaanderen',
    averageRating: '4.3',
  },
  premium: false,
}];


export const cartItems = [
  products[0],
  products[2],
  products[3],
];

export const user = {
  name: 'Jarno',
  email: 'ckc@outlook.com',
  location: 'Hasselt',
  jeugdbeweging: 'Chiro Klaarstraat',
}

export const categorie = {
  Keukenmateriaal: {
    name: 'Keukenmateriaal',
    items: ['Kookpotten','Service','Bestek']
  },
  Legermateriaal: {
    name: 'Legermateriaal',
    items: ['Legertenten','Seniortenten','Patrouilletenten']
  },
  Kampmateriaal: {
    name: 'Kampmateriaal',
    items: ['Gasbakken','Verlengtafels']
  },
}
