import { DataSource } from 'typeorm';
import { URL } from "url";
import { Metrics } from './entities/Metrics';
import {Organization }from './entities/Organization'
import { Repositorie } from './entities/Repositorie';
import { Tribe } from './entities/Tribe';

const dbUrl = new URL("postgresql://fabianrezabala_db:SuTFOyIsGxmzavRFTe39ZQ@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dlake-koala-5118");
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
  entities: [Organization, Tribe, Repositorie, Metrics],
  migrations: ["src/migrations/*.ts"],
  synchronize: false
});

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "root",
//   database: "typeormdb",
//   synchronize: false,
//   logging: true,
//   entities: [Organization, Tribe, Repositorie, Metrics],
//   subscribers: [],
//   migrations: ["src/migrations/*.ts"]

// });