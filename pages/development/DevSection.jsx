import {appItems} from '../../public/data/app-items'
import AppItem from '../../components/App-item'
import {StyledSection, ListWrapper, StyledUl} from '../../styles/DevSection_style'

const DevSection = () => {
    return (
        <main>
            <StyledSection>
                <ListWrapper>
                    <StyledUl> {
                        appItems.map(a => (
                            <AppItem key={Math.random()} app={a}/>
                            ))
                    } </StyledUl>
                </ListWrapper>
            </StyledSection>
        </main>
    )
}
export default DevSection
