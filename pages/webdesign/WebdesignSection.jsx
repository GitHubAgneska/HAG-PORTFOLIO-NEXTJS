import {WebdesignStyledSection, CarouselWrapper} from '../../styles/WebdesignSection_style'
import HagCarousel from '../../components/Carousel'

const WebdesignSection = () => {
    return (
        <main>
            <WebdesignStyledSection>
                <CarouselWrapper>
                    <HagCarousel/>
                </CarouselWrapper>
            </WebdesignStyledSection>
        </main>
    )
}
export default WebdesignSection
