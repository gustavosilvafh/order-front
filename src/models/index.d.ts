import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrdersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Orders {
  readonly id: string;
  readonly Table?: Table | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordersTableId?: string | null;
  constructor(init: ModelInit<Orders, OrdersMetaData>);
  static copyOf(source: Orders, mutator: (draft: MutableModel<Orders, OrdersMetaData>) => MutableModel<Orders, OrdersMetaData> | void): Orders;
}

export declare class Table {
  readonly id: string;
  readonly name?: string | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Table, TableMetaData>);
  static copyOf(source: Table, mutator: (draft: MutableModel<Table, TableMetaData>) => MutableModel<Table, TableMetaData> | void): Table;
}

export declare class Product {
  readonly id: string;
  readonly name?: string | null;
  readonly value?: number | null;
  readonly image?: string | null;
  readonly ordersID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}