import * as mongoose from 'mongoose';
import { asyncProvidersTokens } from '../shared/constants';

// async providers are run before initiating the application
export const databaseProviders = [
  {
    provide: asyncProvidersTokens.dbProviders.mongoToken,
    useFactory: async (): Promise<typeof mongoose> => {
      const dbConnection = await mongoose.connect(process.env.MONGO_URI);
      console.log('database successfully connected ');
      return dbConnection;
    },
  },
];
