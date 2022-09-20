import {DataSource} from 'typeorm';
import { URL } from "url";
import {Organization }from './entities/Organization'

// const dbUrl = new URL(process.env.DATABASE_URL);
const dbUrl = new URL("postgresql://fabianrezabala_db:tYis7lu71ycQeKunOP54bA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dcanine-chum-5102");
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

export const AppDataSource = new DataSource({
  type: "cockroachdb",
  url: dbUrl.toString(),
  ssl: true,
  extra: {
    options: routingId
  },
  logging: true,
  entities: [Organization],
  synchronize: true

});

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "test",
//     password: "test",
//     database: "test",
//     synchronize: true,
//     logging: true,
//     entities: [],
//     subscribers: [],
//     migrations: [],
// })