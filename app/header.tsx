/// <reference path="../typings/tsd.d.ts" />
import * as React from "react";

export interface IHeaderProps {name: string}
export class Header extends React.Component<IHeaderProps, any>{
    constructor(props: IHeaderProps){
        super(props);
    }
    render(){
        return <h1>
            Hello, {this.props.name}!
        </h1>
    }
}
