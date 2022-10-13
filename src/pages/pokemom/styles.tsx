import styled from "styled-components"

export const Container = styled.div`
    background-color: ${props=>props.theme.yellow};
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
`
export const ContainerBody = styled.div`
    width: 80%;
    display: flex;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding-top: 4em;

`

export const ContainerPokemomAlign = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4em;
    align-items: center;

`

export const PokemomNumber = styled.h3`
    font-size: 3em;
    color: ${props=>props.theme.gray};
    filter: drop-shadow(0 4px 4px ${props=>props.theme.light_black});

`

export const PokemomPixel = styled.img`
    width: 4em;

`
export const PokemomName = styled.h1`
    font-size: 5em;
    filter: drop-shadow(0 4px 4px ${props=>props.theme.light_black});

`
export const PokemomDescription = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 1.5em;
    align-items: center;
    padding-left: 10em;
    padding-top: 4em;
    width: 15%;


`
export const ContainerArrow = styled.div`
    display: flex;
    width: 10%;
    align-items: center;
    justify-content: center;
`

export const Arrow = styled.i`
    font-size: 3em;
    
`
export const ContentAlign = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;

`


export const PokemomArt = styled.img`
    width: 25em;
    height: 25em;
    padding-left: 10em;
`

export const ContainerAttributes = styled.div`
    display:flex;
    gap: 1.5em;
    flex-wrap: wrap;
    max-width: 45em;
`
