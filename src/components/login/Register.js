import React from "react";
import { Link } from 'react-router-dom';

import {
    Icon
} from '@material-ui/core';

class Register extends React.Component {
    render() {
        return (
            <div>
                <div>Register Component</div>
                <div><Link to='/'><Icon>reply</Icon>Back To Login</Link></div>
            </div>
        )
    }
}

export default Register;