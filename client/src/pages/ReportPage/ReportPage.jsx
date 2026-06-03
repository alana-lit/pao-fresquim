import { useState } from "react"

import "./reportPage.css"

import { SideBar } from "../../components/SideBar/SideBar.jsx"
import { Input } from "../../components/Input/Input.jsx"
import {
    reportProductsMock,
    salesReportMock,
    productReportMock,
    debtorsMock
} from "../../mocks/reportMock.js"

import {
    MdOutlineAssessment,
    MdAttachMoney,
    MdDateRange
} from "react-icons/md"

import {
    FaChartLine
} from "react-icons/fa"


export const ReportPage = () => {

    const [reportType, setReportType] = useState("MES")

    return (
        <div className="page_container">

            <SideBar />

            <div className="report_page">

                <h1 className="font_poppins_regular">
                    Relatórios
                </h1>

                <div className="report_dashboard">

                    <div className="report_card">

                        <h2>
                            <MdAttachMoney />
                            Relatório de Vendas
                        </h2>

                        <div className="report_filters">
                            <label>Data Inicial</label>
                            <Input
                                id="sales_start"
                                inputType="date"
                                LabelIcon={MdDateRange}
                                hasIconAside={true}
                            />
                            <label>Data Final</label>
                            <Input
                                id="sales_end"
                                inputType="date"
                                LabelIcon={MdDateRange}
                                hasIconAside={true}
                            />

                        </div>

                        <div className="sales_value_card">
                            <span>Total vendido</span>

                            <h3>
                                {salesReportMock.valorTotal.toLocaleString(
                                    "pt-BR",
                                    {
                                        style: "currency",
                                        currency: "BRL"
                                    }
                                )}
                            </h3>
                        </div>

                    </div>

                    <div className="report_card">

                        <h2>
                            <FaChartLine />
                            Relatório de Produtos
                        </h2>

                        <div className="report_filters">

                            <select id="product_filter">

                                <option value="">
                                    Selecione um produto
                                </option>

                                {reportProductsMock.map(product => (
                                    <option
                                        key={product.id}
                                        value={product.id}
                                    >
                                        {product.nome}
                                    </option>
                                ))}

                            </select>

                            <select
                                value={reportType}
                                onChange={(e) => setReportType(e.target.value)}
                            >
                                <option value="MES">
                                    Mês
                                </option>

                                <option value="SEMANA">
                                    Semana
                                </option>
                            </select>

                        </div>

                        <div className="report_filters">
                            <label>Data Inicial</label>

                            <Input
                                id="prod_start"
                                inputType="date"
                                LabelIcon={MdDateRange}
                                hasIconAside={true}
                            />
                            <label>Data Inicial</label>

                            <Input
                                id="prod_end"
                                inputType="date"
                                LabelIcon={MdDateRange}
                                hasIconAside={true}
                            />

                        </div>

                        <div className="sales_value_card">

                            <span>Venda total do produto</span>

                            <h3>
                                {productReportMock.valorTotalProduto.toLocaleString(
                                    "pt-BR",
                                    {
                                        style: "currency",
                                        currency: "BRL"
                                    }
                                )}
                            </h3>

                        </div>

                        <div className="graph_container">

                            <svg
                                width="100%"
                                height="250"
                                viewBox="0 0 320 220"
                            >

                                <polyline
                                    fill="none"
                                    stroke="#7A5E2A"
                                    strokeWidth="4"
                                    points={
                                        reportType === "MES"
                                            ? "20,180 80,120 140,140 200,90 260,110"
                                            : "20,170 80,140 140,100 200,130 260,80"
                                    }
                                />

                                {reportType === "MES" ? (
                                    <>
                                        <circle cx="20" cy="180" r="5" />
                                        <circle cx="80" cy="120" r="5" />
                                        <circle cx="140" cy="140" r="5" />
                                        <circle cx="200" cy="90" r="5" />
                                        <circle cx="260" cy="110" r="5" />
                                    </>
                                ) : (
                                    <>
                                        <circle cx="20" cy="170" r="5" />
                                        <circle cx="80" cy="140" r="5" />
                                        <circle cx="140" cy="100" r="5" />
                                        <circle cx="200" cy="130" r="5" />
                                        <circle cx="260" cy="80" r="5" />
                                    </>
                                )}

                            </svg>

                        </div>
                    </div>

                </div>


                <div className="report_card debtors_card">

                    <h2>
                        <MdOutlineAssessment />
                        Clientes Devedores
                    </h2>

                    <table>

                        <thead>

                            <tr>
                                <th>Cliente</th>
                                <th>Total</th>
                                <th>Produtos</th>
                                <th>Data Compra</th>
                                <th>Data Notificação</th>
                            </tr>

                        </thead>

                        <tbody>

                            {debtorsMock.map(debtor => (

                                <tr key={debtor.id}>

                                    <td>{debtor.nome}</td>

                                    <td>
                                        {debtor.total.toLocaleString(
                                            "pt-BR",
                                            {
                                                style: "currency",
                                                currency: "BRL"
                                            }
                                        )}
                                    </td>

                                    <td>
                                        {debtor.produtos.join(", ")}
                                    </td>

                                    <td>
                                        {debtor.dataCompra}
                                    </td>

                                    <td>
                                        {debtor.dataNotificacao}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}