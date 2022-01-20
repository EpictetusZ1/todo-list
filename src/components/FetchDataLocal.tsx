import React, {useEffect, useState} from 'react';
import Main from "./Main/Main";
import {IAppProps} from "../types/Project.types";
import {initStateBlank} from "./Firebase/defaultValues";

const FetchDataLocal: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const [localProjects, setLocalProjects] = useState<IAppProps>()

    useEffect(() => {
        const makeCall = async() => {
            const response = await localStorage.getItem('projects')
            if (response !== null) {
                return JSON.parse(response)
            } else {
                return initStateBlank
            }
        }
        makeCall().then( (r) => {
            setLocalProjects(r)
            setLoading(false)
        })
    }, [])

    return (
        <>
             {/* @ts-ignore */}
            { loading ? <div>Loading</div> : <Main localProjects={localProjects} usingFire={false} />}
        </>
    );
};

export default FetchDataLocal;