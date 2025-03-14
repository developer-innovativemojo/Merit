import React from "react";
import Link from "next/link";


import {ButtonProps} from "./Button";

interface LinkButtonProps extends ButtonProps{
    href: string;
}

const LinkButton = (props: LinkButtonProps)=>{
    const { href,...rest } = props;
    return(
        <Link href={href}>
            <button {...rest}>
                
            </button>
        </Link>
    )
}

export default LinkButton;