import { Connection } from 'mongoose';
import { ProductSchema } from './schemas/productSchema';
import { DATABASE_CONNECTION } from '../database/database.providers';

export const PRODUCTS_MODEL = 'PRODUCTS_MODEL';

export const ProductsProviders = [
  {
    provide: PRODUCTS_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('products', ProductSchema),
    inject: [DATABASE_CONNECTION],
  },
];
