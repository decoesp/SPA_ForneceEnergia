import React, { useState } from 'react';

interface ConsumptionFormProps {
  fetchSuppliers: (monthlyConsumption: number) => void;
}

const ConsumptionForm: React.FC<ConsumptionFormProps> = ({ fetchSuppliers }) => {
  const [monthlyConsumption, setMonthlyConsumption] = useState('');

  const handleFetchSuppliers = () => {
    const monthlyConsumptionNumber = parseInt(monthlyConsumption, 10);

    if (monthlyConsumptionNumber > 0) {
      console.log('Chamando fetchSuppliers');
      fetchSuppliers(monthlyConsumptionNumber);
    } else {
      console.warn('O consumo mensal deve ser maior que 0.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleFetchSuppliers();
    }
  };

  return (
    <div className="flex items-center justify-center h-50">
      <div className="text-center w-full max-w-md">
        <label className="block text-lg my-2">Consumo Mensal de Energia (kWh):</label>
        <input
          type="number"
          value={monthlyConsumption}
          onChange={(e) => setMonthlyConsumption(e.target.value)}
          onKeyDown={handleKeyPress}
          className="border p-2 my-2 w-full"
        />
        <button
          onClick={handleFetchSuppliers}
          className="bg-blue-500 text-white my-2 p-2 rounded w-full"
        >
          Consultar Fornecedores
        </button>
      </div>
    </div>
  );
};

export default ConsumptionForm;
