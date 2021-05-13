import Link from 'next/link';
import navStyle from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <header>
            <nav className={navStyle.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
