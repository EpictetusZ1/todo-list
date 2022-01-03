import React from 'react';
import {ProjectInterface} from "./interfaces";
import uniqid from "uniqid";

const Project = ({data}: {data: ProjectInterface}) => {
    return (
        <div>
            {JSON.stringify(data)}

        </div>
    );
}

export default Project;