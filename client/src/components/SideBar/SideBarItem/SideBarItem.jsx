import './sideBarItem.css'

export const SideBarItem = ({ item }) => {
    const { ItemIcon, linkRef, redirectTo } = item
    // TODO: when routing is added, need to get the path of the current page to check which one of the links are being accessed and paint it.

    return (
        <li className='link_li'>
            <ItemIcon />
            <a href={redirectTo} className='font_inter_regular'>
                {linkRef}
            </a>
        </li>
    )
}