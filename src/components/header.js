import React from "react"
import { Link } from "gatsby"

export default props => (
    <header>
        <h2 id="title">Gatsby Test</h2>
        <h1>{props.headerText}</h1>
        <nav>
            <ul>
                <li><Link to="/about/">About</Link></li>
            </ul>
        </nav>
    </header>
)