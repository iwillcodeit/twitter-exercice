import Tweet from "./Tweet";
import HomeBar from "./HomeBar";
import { WholeContainer } from "./styles/Main/Tweet/WholeContainer";
import { FunctionComponent } from "react";


type TopMainProps = {
    user: object
}

const TopMain:FunctionComponent<TopMainProps> = ({user}) => {
    return (
        <WholeContainer>
            <HomeBar/>
            <Tweet user={user}/>
        </WholeContainer>
    )
}

export default TopMain