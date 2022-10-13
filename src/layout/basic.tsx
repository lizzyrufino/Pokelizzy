import { createGlobalStyle, ThemeProvider } from "styled-components";
import {ReactNode} from "react";

export const GlobalStyle = createGlobalStyle`
    *,*:before,*:after{
        margin: 0;
        padding: 0;
    }
    span, h3, h1{
        font-family: 'Montserrat', sans-serif;
    }
`
export const theme = {
    yellow:"#F6CE1F",
    gray: "#3E3E3E",
    light_black: "rgba(0, 0, 0, 0.30)",
    white: "#FFF"

}

export default function Layout({children}:{children:ReactNode}){
    return(
        <ThemeProvider theme={theme}> 
            <GlobalStyle/>
                {children}
        </ThemeProvider>
    )
}
