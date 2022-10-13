import {Container, Icon, TextRegion} from "./styles"

interface RegionProps{
    name: string
}

export default function Region({name}:RegionProps){
        return(
           <Container>
                <Icon/>
                <TextRegion>{name}</TextRegion>
           </Container>
        )
}
