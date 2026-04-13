import logo from "../../assets/logo-pao-fresquim.svg"
import { websiteLinks } from "../../mocks/websiteLinksMock"
import { SideBarItem } from "./SideBarItem/SideBarItem"

import './sideBar.css'

// This is a sidebar but will behave like a header when on mobile devices
export const SideBar = () => { 
    return (
        <aside className="menu_aside">
            <img src={logo} alt="" />
            <ul className="scrollbar">
                {
                    websiteLinks.map((link, idx) => <SideBarItem item={link} key={idx}/>)
                }
            </ul>
        </aside>
    )
}