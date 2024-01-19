import suppliersData from '../data';
import { Supplier } from '../types/schema';

function isSupplier(obj: any): obj is Supplier {
  return (
    'name' in obj &&
    'logo' in obj &&
    'state' in obj &&
    'costPerKwh' in obj &&
    'minLimitKwh' in obj &&
    'numCustomers' in obj &&
    'averageRating' in obj
  );
}

const resolvers = {
  Query: {
    getSuppliers: (_: any, { consumMonth }: { consumMonth: number }) => {
      const suppliers = suppliersData.flat(); // Flatten the array if necessary
      return suppliers.filter((supplier) => isSupplier(supplier) && consumMonth > supplier.minLimitKwh);
    },
  },
};

export default resolvers;
