import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardActions,
    CardContent,
    TextField,
    Button,
} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class LoginPage extends React.Component {
    state = {
        name: 'Shiva Kumar Kudikala',
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    /*componentDidMount(){
        fetch('../../json/demo.json')
            .then(res => console.log(res))
        .then((result) => {
            console.log(result);
        })
    }*/

    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center">
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    id="name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                />

                                <TextField
                                    id="password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </form>
                        </CardContent>
                        <CardActions>
                            <Link to='/register'>Register Here</Link>
                            <Button variant="raised" color="primary" className="float-right" size="small">Login</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);