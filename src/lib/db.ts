import {CosmosClient} from '@azure/cosmos';
import dotenv from 'dotenv';
dotenv.config();

const {COSMOS_ENDPOINT, COSMOS_KEY, COSMOS_DATABASE_ID} = process.env;

const cosmosClient = new CosmosClient({ endpoint: COSMOS_ENDPOINT, key: COSMOS_KEY });

const containers = {
  availabilityContainer: cosmosClient.database(COSMOS_DATABASE_ID).container('availability'),
  eventContainer: cosmosClient.database(COSMOS_DATABASE_ID).container('event')
}

export {containers}