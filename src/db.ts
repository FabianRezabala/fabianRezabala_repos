import {DataSource} from 'typeorm';
import { URL } from "url";
import { Metrics } from './entities/Metrics';
import {Organization }from './entities/Organization'
import { Repositories } from './entities/Repositories';
import { Tribe } from './entities/Tribe';

// const dbUrl = new URL(process.env.DATABASE_URL);
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
  entities: [Organization, Tribe, Repositories, Metrics],
  synchronize: false

});