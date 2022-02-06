import {WebdesignStyledSection, CarouselWrapper} from './WebdesignSection_style'
import HagCarousel from '../Carousel/Carousel'

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
