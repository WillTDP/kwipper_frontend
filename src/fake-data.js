import campImage1 from './assets/fouragetent.png';
import campImage2 from './assets/gasbakken.png';
import campImage3 from './assets/PVC-zeil.png';
import campImage4 from './assets/quechua-rugtas.png';
import campImage5 from './assets/quechua-tent.png';
import campImage6 from './assets/seniorentent.png';
import campImage7 from './assets/verlengkabel.png';
import campImage8 from './assets/zeil.png';

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
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
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
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
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
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
  imageUrl: campImage3,
  seller: {
    name: 'Chiro Kuringen',
    email: 'chirokuringen@gmail.com',
    location: 'Hasselt, Kuringen',
    averageRating: '5.0',
  } ,
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
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
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
  price: '12.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
  imageUrl: campImage5,
  averageRating: '5.0',
}, {
  id: '678',
  name: 'seniorentent',
  price: '25.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
  imageUrl: campImage6,
  averageRating: '5.0',
}, {
  id: '789',
  name: 'verlengkabel',
  price: '0.50',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
  imageUrl: campImage7,
  averageRating: '5.0',
}, {
  id: '890',
  name: 'zeil',
  price: '5.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
  imageUrl: campImage8,
  averageRating: '5.0',
}];

export const cartItems = [
  products[0],
  products[2],
  products[3],
];
