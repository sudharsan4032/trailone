import React from "react";


type formtypes = {
    first: string;
    sec: number;
    third : string;
    fourth : string;
};

function form(props: formtypes) {
    return (
        <div>
            <div className="list-group">
                <a
                    href="/"
                    className="list-group-item list-group-item-action active"
                    aria-current="true"
                >
                    {props.first}
                </a>
                <a href="/" className="list-group-item list-group-item-action">
                {props.sec}
                </a>
                <a href="/" className="list-group-item list-group-item-action">
                {props.third}
                </a>
                <a href="/" className="list-group-item list-group-item-action">
                {props.fourth}
                </a>
                
            </div>
        </div>
    );
}

export default form;
