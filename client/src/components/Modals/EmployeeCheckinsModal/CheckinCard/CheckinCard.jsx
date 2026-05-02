import './checkinCard.css'

export const CheckinCard = ({ info }) => {
    return (
        <li className='checkin__card--container'>
            <div>
                <p className='font_inter_regular'>Data: {`${info.date.getDay()}/${info.date.getMonth()}/${info.date.getFullYear()}`}</p>
                <p className='font_inter_regular'>Horário: {info.time}</p>
            </div>
            <span className={`font_inter_semibold ${info.type == "Entrada" ? "in" : "out"}`}>{info.type}</span>
        </li>
    )
}