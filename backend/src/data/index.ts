const suppliers = [
  [
    {
      "name": "Sousas Energia Renovável",
      "logo": "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "SP",
      "costPerKwh": 0.20,
      "minLimitKwh": 8000,
      "numCustomers": 1000,
      "averageRating": 4.5
    },
    {
      "name": "Didai Tecnologia Solar",
      "logo": "https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "RJ",
      "costPerKwh": 0.18,
      "minLimitKwh": 6000,
      "numCustomers": 800,
      "averageRating": 4.2
    },
    {
      "name": "Duna Solar",
      "logo": "https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "MG",
      "costPerKwh": 0.25,
      "minLimitKwh": 10000,
      "numCustomers": 1200,
      "averageRating": 4.8
    },
    {
      "name": "Flexmatic Solar",
      "logo": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "RS",
      "costPerKwh": 0.22,
      "minLimitKwh": 7500,
      "numCustomers": 950,
      "averageRating": 4.3
    },
    {
      "name": "Skalle",
      "logo": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "BA",
      "costPerKwh": 0.19,
      "minLimitKwh": 4800,
      "numCustomers": 900,
      "averageRating": 4.6
    },
    {
      "name": "Fate Energy",
      "logo": "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "SC",
      "costPerKwh": 0.21,
      "minLimitKwh": 5200,
      "numCustomers": 1100,
      "averageRating": 4.4
    },
    {
      "name": "Energia Renew Power",
      "logo": "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "CE",
      "costPerKwh": 0.23,
      "minLimitKwh": 8800,
      "numCustomers": 1050,
      "averageRating": 4.7
    },
    {
      "name": "SolarTech Solutions",
      "logo": "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "PR",
      "costPerKwh": 0.24,
      "minLimitKwh": 9500,
      "numCustomers": 1000,
      "averageRating": 4.9
    },
    {
      "name": "SunDynamics",
      "logo": "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "PE",
      "costPerKwh": 0.17,
      "minLimitKwh": 7200,
      "numCustomers": 750,
      "averageRating": 4.1
    },
    {
      "name": "GreenFlex Solar",
      "logo": "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "PA",
      "costPerKwh": 0.26,
      "minLimitKwh": 9600,
      "numCustomers": 1250,
      "averageRating": 4.2
    },
    {
      "name": "SunPower Innovations",
      "logo": "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "MT",
      "costPerKwh": 0.20,
      "minLimitKwh": 8300,
      "numCustomers": 1000,
      "averageRating": 4.5
    },
    {
      "name": "Amazon Solar Solutions",
      "logo": "https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "AM",
      "costPerKwh": 0.18,
      "minLimitKwh": 6700,
      "numCustomers": 800,
      "averageRating": 4.2
    },
    {
      "name": "Golden Sun Power",
      "logo": "https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "GO",
      "costPerKwh": 0.25,
      "minLimitKwh": 11000,
      "numCustomers": 1200,
      "averageRating": 4.8
    },
    {
      "name": "EcoEnergia Solutions",
      "logo": "https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "ES",
      "costPerKwh": 0.22,
      "minLimitKwh": 7700,
      "numCustomers": 950,
      "averageRating": 4.3
    },
    {
      "name": "GreenSkies",
      "logo": "https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "RN",
      "costPerKwh": 0.19,
      "minLimitKwh": 6900,
      "numCustomers": 900,
      "averageRating": 4.6
    },
    {
      "name": "PowerVibe Energy",
      "logo": "https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "TO",
      "costPerKwh": 0.21,
      "minLimitKwh": 8200,
      "numCustomers": 1100,
      "averageRating": 4.4
    },
    {
      "name": "RenovaSolar",
      "logo": "https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "AP",
      "costPerKwh": 0.23,
      "minLimitKwh": 8900,
      "numCustomers": 1050,
      "averageRating": 4.7
    },
    {
      "name": "SunSmart Energy",
      "logo": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "MS",
      "costPerKwh": 0.24,
      "minLimitKwh": 9700,
      "numCustomers": 1000,
      "averageRating": 4.9
    },
    {
      "name": "EcoSun",
      "logo": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "AC",
      "costPerKwh": 0.17,
      "minLimitKwh": 7400,
      "numCustomers": 750,
      "averageRating": 4.1
    },
    {
      "name": "SolarFlow",
      "logo": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "state": "RO",
      "costPerKwh": 0.26,
      "minLimitKwh": 10500,
      "numCustomers": 1250,
      "averageRating": 4.2
    }
  ]
];

export default suppliers;
