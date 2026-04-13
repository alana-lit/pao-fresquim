import { IoHome } from 'react-icons/io5'
import { FaAddressCard, FaBarcode, FaCashRegister } from 'react-icons/fa'
import { GrUserWorker } from 'react-icons/gr'
import { PiSecurityCameraDuotone } from 'react-icons/pi'
import { FaChartPie } from 'react-icons/fa6'

export const websiteLinks = [
    {
        'ItemIcon': IoHome,
        'linkRef': 'Início',
        'redirectTo': '/'
    },
    {
        'ItemIcon': FaBarcode,
        'linkRef': 'Cadastro de produtos',
        'redirectTo': '/'
    },
    {
        'ItemIcon': GrUserWorker,
        'linkRef': 'Gerenciar funcionários',
        'redirectTo': '/'
    },
    {
        'ItemIcon': FaAddressCard,
        'linkRef': 'Bater ponto',
        'redirectTo': '/'
    },
    {
        'ItemIcon': PiSecurityCameraDuotone,
        'linkRef': 'Acessar câmeras',
        'redirectTo': '/'
    },
    {
        'ItemIcon': FaChartPie,
        'linkRef': 'Relatório',
        'redirectTo': '/'
    },
    {
        'ItemIcon': FaCashRegister,
        'linkRef': 'Área de vendas',
        'redirectTo': '/'
    },
]