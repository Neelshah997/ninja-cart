import React from "react";
import Menu from "./Menu";

const Base = ({
    title = "My Title",
    className = "bg-dark text-white p-1",
    children,
}) =>{
    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h4>If you got any Query, reach us by clicking below button</h4>
                    <button className="btn btn-warning btn-lg">Contact Us</button>
                    <div className="container">
                        <span className="text-muted">
                            &copy;2021Copyright: 
                                <a href="#">ninjacart.com</a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Base; 