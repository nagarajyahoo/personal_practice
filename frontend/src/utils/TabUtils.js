import {Link} from "react-router-dom";
import React from 'react';

export const createTabs = (path, tabs, clickHandler) => {
    return tabs.map((tab, index) => {
        if (tab.submenus) {
            return (
                <li key={index} className={'dropdown-submenu'}>
                    <Link
                        id={tab.id}
                        className={isSubMenuPath(path, tab.submenus) ? 'dropdown dropdown-item active' : 'dropdown dropdown-item'}
                        to="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        {tab.name}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby={tab.id}>
                        {createTabs(path, tab.submenus, clickHandler)}
                    </ul>
                </li>
            )
        } else {
            return (
                <li key={index}>
                    <Link
                        onClick={() => clickHandler(tab.id)}
                        className={path === tab.link ? 'dropdown-item active' : 'dropdown-item'}
                        to={tab.link}>
                        {tab.name}
                    </Link>
                </li>
            )
        }
    });
};

export const isSubMenuPath = (path, menus) => {
    for (let submenu of menus) {
        if (submenu.submenus) {
            if(isSubMenuPath(path, submenu.submenus)) {
                return true;
            }
        } else {
            if (submenu.link === path) {
                return true;
            }
        }
    }
    return false;
};
