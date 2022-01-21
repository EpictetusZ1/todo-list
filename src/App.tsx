import React, {useState} from 'react';
import * as styled from "./styles/App.styles"
import FetchDataLocal from "./components/FetchDataLocal";
import Firebase from "./components/Firebase/Firebase";
import {IPromptProps} from "./types/Storage.types";

const Prompt: React.FC<IPromptProps> = ( {SLocal, SFire} ) => {
    return (
        <styled.PromptContainer>
            <h3>To Do-ify</h3>
            <hr/>
            <h4>Save Your Projects</h4>
            <p>To function properly this app requires you sign in with Google.
                Alternatively, you can use local storage<sup>*</sup>
            </p>
            <div className={"btnContainer"}>
                <styled.ChooseStorage onClick={() => SFire(true)}>Use Google</styled.ChooseStorage>
                <styled.ChooseStorage onClick={() => SLocal(true)}>Use local storage</styled.ChooseStorage>
            </div>
            <p className={"footNote"}><sup>*</sup> Using local storage your 'To Dos' and projects will only be available on the machine you are currently using.</p>
        </styled.PromptContainer>
    )
}

const App: React.FC = () => {
    const [useFire, setUseFire] = useState<boolean>(false)
    const [useLocal, setUseLocal] = useState<boolean>(false)

    return (
        <styled.AppStyles>
            { !useFire && !useLocal && <Prompt SLocal={setUseLocal} SFire={setUseFire} /> }

            {useFire && <Firebase />}
            {useLocal && <FetchDataLocal />}
        </styled.AppStyles>
    )
}

export default App;