// ConsultSuppliersComponent.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SUPPLIERS } from '../../graphql/schema'
import { GetSuppliersQuery } from '../../generated/types';

interface ConsultSuppliersComponentProps {
  monthlyConsumption: number;
}

const ConsultSuppliersComponent: React.FC<ConsultSuppliersComponentProps> = ({ monthlyConsumption }) => {
  const { loading, error, data } = useQuery<GetSuppliersQuery>(QUERY_SUPPLIERS, {
    variables: { consumMonth: monthlyConsumption },
  });
 
  if (loading) return <p>Carregando...</p>;

  if (error) {
    return <p>Erro ao carregar dados: {error.message}</p>;
  }

  const suppliers = data?.getSuppliers || [];

  if (suppliers.length === 0) {
    return <p>Nenhum fornecedor disponível para o consumo mensal informado.</p>;
  }

  return (
    <div className='flex items-center flex-col'>
      <h2 className='block text-lg my-4'>Fornecedores Disponíveis:</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {suppliers.map((supplier, index) => (
          <li key={index} className="bg-white p-4 rounded-md shadow-md">
            <div className="flex">
              <img src={supplier?.logo || ''} alt={supplier?.name || ''} className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-lg font-semibold my-2">{supplier?.name}</h3>
                <p>Estado: {supplier?.state}</p>
                <p>Avaliação Média: {supplier?.averageRating} Estrelas</p>
              </div>
            </div>
            <div className="mt-4">
              <p>Custo por kWh: {supplier?.costPerKwh}</p>
              <p>Número de Clientes: {supplier?.numCustomers}</p>
              <p>Limite minimo por kWh: {supplier?.minLimitKwh}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultSuppliersComponent;
