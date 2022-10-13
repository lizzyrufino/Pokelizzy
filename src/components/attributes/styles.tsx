import styled from "styled-components";

interface IconProps{
    isStar?: boolean;
}

export const Attribute = styled.div`
    display: flex;
    background-color: ${props=>props.theme.white};
    padding: 1em 1.2em;
    border-radius: 30px;
    gap: 1em;
    align-items: center;
    justify-content: center;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Icon = styled.i.attrs({className:"fas fa-star"})<IconProps>`
    ${props=>props.isStar ? `
    display:flex;
    color: ${props.theme.yellow};
    font-size: 1.2em;
    `:`display:none;`}

`

export const Name = styled.span`
    font-size: 1.2em;
    font-weight: 500;
`

export const Value = styled.span`
    font-weight: bold;
    color: ${props=>props.theme.yellow};
    font-size: 1.2em;
`
