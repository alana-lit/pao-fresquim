export const reportProductsMock = [
    {
        id: 1,
        nome: "Pão Francês"
    },
    {
        id: 2,
        nome: "Rosca"
    },
    {
        id: 3,
        nome: "Bolo de Cenoura"
    },
    {
        id: 4,
        nome: "Pão de Queijo"
    }
]

export const salesReportMock = {
    valorTotal: 15000
}


export const debtorsMock = [
    {
        id: crypto.randomUUID(),
        nome: "João Silva",
        total: 250,
        produtos: ["Pão Francês", "Rosca"],
        dataCompra: "10/05/2026",
        dataNotificacao: "15/05/2026"
    },
    {
        id: crypto.randomUUID(),
        nome: "Maria Souza",
        total: 120,
        produtos: ["Bolo de Cenoura"],
        dataCompra: "11/05/2026",
        dataNotificacao: "16/05/2026"
    },
    {
        id: crypto.randomUUID(),
        nome: "Pedro Henrique",
        total: 85,
        produtos: ["Pão de Queijo", "Sonho"],
        dataCompra: "14/05/2026",
        dataNotificacao: "18/05/2026"
    }
]

export const productReportMock = {
    valorTotalProduto: 2540,

    graficoMes: [
        { periodo: "01", vendas: 120 },
        { periodo: "02", vendas: 180 },
        { periodo: "03", vendas: 150 },
        { periodo: "04", vendas: 220 },
        { periodo: "05", vendas: 190 }
    ],

    graficoSemana: [
        { periodo: "Seg", vendas: 40 },
        { periodo: "Ter", vendas: 60 },
        { periodo: "Qua", vendas: 50 },
        { periodo: "Qui", vendas: 80 },
        { periodo: "Sex", vendas: 70 }
    ]
}

