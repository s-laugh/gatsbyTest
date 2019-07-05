import React from "react"
import Header from "../components/header"
import { Link } from "gatsby";

export default () => (
    <div>
        <Header headerText="Page Not Found (404)" />
        <p>The page you are looking for wasn't found.<br/>
        <Link to="/index/">Return Home.</Link></p>
    </div>
)
