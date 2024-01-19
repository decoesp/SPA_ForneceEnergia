// App.tsx
import React, { useState } from 'react';
import ConsumptionForm from './components/ConsumptionForm';
import SuppliersQuery from './components/SuppliersQuery';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  const [monthlyConsumption, setMonthlyConsumption] = useState<number | null>(null);

  const fetchSuppliers = (consumption: number) => {
    setMonthlyConsumption(consumption);
  };

  return (
    <ErrorBoundary>
      <div>
        <ConsumptionForm fetchSuppliers={fetchSuppliers} />
        {monthlyConsumption !== null && <SuppliersQuery monthlyConsumption={monthlyConsumption} />}
      </div>
    </ErrorBoundary>
  );
};

export default App;
