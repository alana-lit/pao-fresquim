import { IoHome } from 'react-icons/io5'
import { FaAddressCard, FaBarcode, FaCashRegister, FaProductHunt } from 'react-icons/fa'
import { GrUserWorker } from 'react-icons/gr'
import { PiSecurityCameraDuotone } from 'react-icons/pi'
import { FaChartPie } from 'react-icons/fa6'

export const websiteLinks = [
    {
        'ItemIcon': IoHome,
        'linkRef': 'Início',
        'redirectTo': '/home'
    },
    {
        'ItemIcon': FaBarcode,
        'linkRef': 'Cadastro de produtos',
        'redirectTo': '/product_add'
    },
    {
        'ItemIcon': FaProductHunt,
        'linkRef': 'Listagem de produtos',
        'redirectTo': '/products'
    },
    {
        'ItemIcon': GrUserWorker,
        'linkRef': 'Gerenciar funcionários',
        'redirectTo': '/employees'
    },
    {
        'ItemIcon': FaAddressCard,
        'linkRef': 'Bater ponto',
        'redirectTo': '/checkin'
    },
    {
        'ItemIcon': PiSecurityCameraDuotone,
        'linkRef': 'Acessar câmeras',
        'redirectTo': '/camera'
    },
    {
        'ItemIcon': FaChartPie,
        'linkRef': 'Relatório',
        'redirectTo': '/report'
    },
    {
        'ItemIcon': FaCashRegister,
        'linkRef': 'Área de vendas',
        'redirectTo': '/sales'
    },
]