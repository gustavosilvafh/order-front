// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Orders, Table, Product } = initSchema(schema);

export {
  Orders,
  Table,
  Product
};