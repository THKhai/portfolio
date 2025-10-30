/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Node modules
 * */
import React from 'react';
import { useRef } from 'react';
import PropTypes  from 'prop-types';

const NavBar = ({navOpen}) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];
    return (
        <nav className={"navbar" + (navOpen ? '-active' : '')}>
            {
                navItems.map(({ label, link, className, ref},key) => (
                        <a
                            key={key}
                            href={link}
                            className={className}
                            ref={ref}
                            onClick={null}
                        >
                            {label}
                        </a>
                ))
            }
            <div
                className="active-box"
                ref={activeBox}
            >

            </div>
        </nav>
    );
};

NavBar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};
export default NavBar;