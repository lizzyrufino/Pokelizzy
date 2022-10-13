import {Container, PokemomArt, ContainerAttributes, PokemomNumber, HeaderContainer, ContainerPokemomAlign, PokemomPixel, PokemomName, PokemomDescription, ContainerArrow, Arrow, ContainerBody, ContentAlign} from "./styles"
import Region from "../../components/region"
import Attributes from "../../components/attributes"

export default function Pokemom(){
    return (
        <Container>
            <ContainerArrow>
                <Arrow className="fas fa-chevron-left"/>
            </ContainerArrow>
            <ContainerBody>
                <ContentAlign>
                    <HeaderContainer> 
                        <Region name="Kanto"/>
                        <ContainerPokemomAlign> 
                            <PokemomNumber> #025 </PokemomNumber>
                            <PokemomPixel src="https://webstockreview.net/images/pikachu-clipart-lightning-13.gif"></PokemomPixel>
                        </ContainerPokemomAlign>
                        <PokemomName>Pikachu</PokemomName>
                    </HeaderContainer>
                    <PokemomArt src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/>
                    <ContainerAttributes> 
                    <Attributes name="HP" value="98"/>
                    <Attributes name="ATTACK" value="112"/>
                    <Attributes name="DEFENSE" value="61"/>
                    <Attributes name="SP.ATTACK" value="68"/>
                    <Attributes name="SP.DEFENSE" value="41"/>
                    <Attributes name="SPEED" isStar value="168"/>
                    </ContainerAttributes>
                </ContentAlign>
                <PokemomDescription> Pikachu that can generate powerful electricty have cheek sacs that are extra soft and super stretchy. </PokemomDescription>
            </ContainerBody>
            <ContainerArrow>
                <Arrow className="fas fa-chevron-right"/>
            </ContainerArrow>
        </Container>
    )
}
