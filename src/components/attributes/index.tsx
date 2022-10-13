import {Attribute, Icon, Name, Value} from "./styles"

interface AttributeProps{
    isStar?: boolean;
    name: string;
    value: string;
}

export default function Attributes({
    isStar, 
    name,
    value}:AttributeProps){
    return (<Attribute>
                <Icon isStar={isStar}/> 
                <Name>{name}</Name>
                <Value>{value}</Value>
            </Attribute>)
}
