import Image from 'next/image'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import candychaseDesign from '../../public/webdesigns/candychase_webdesign-page.png'
import cartongeniusDesign from '../../public/webdesigns/cartongenius_webdesign-page.png'
import wstDesign from '../../public/webdesigns/wst_webdesign-page.png'
import wstDesign2 from '../../public/webdesigns/wst_webdesign-page-2.png'
import azurcrmDesign from '../../public/webdesigns/azurcrm_webdesign-page.png'
import monkeytransferDesign from '../../public/webdesigns/monkeytransfer_webdesign-page.png'

const designLayouts = [ candychaseDesign, cartongeniusDesign, wstDesign, wstDesign2, azurcrmDesign, monkeytransferDesign ]

const HagCarousel = () => {
    return (
        <Carousel>
            { designLayouts.map( d => (
                
                <div key={Math.random()}>
                    <Image src={d} alt='candychase Design'/>
                   {/*  <p className='legend'>Legend 1</p> */}
                </div>

            )) }
        </Carousel>
    )
}
export default HagCarousel
