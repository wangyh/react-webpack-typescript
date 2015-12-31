/// <reference path="../typings/tsd.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";

ReactDOM.render(
    <div>
        <Header name="AMS"/>
        <Footer/>
    </div>,
    document.body
);
