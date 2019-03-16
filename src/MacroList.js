import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { withRouter } from "react-router-dom"
import MacroForm from './MacroForm'
import Button from '@material-ui/core/Button';
import DateSelector from './DateSelector'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    margin: {
        margin: theme.spacing.unit,
       
       
    },
});



class MacroList extends React.Component {
    constructor(prop) {
        super(prop)
    this.state = {
        carbohydrates: '',
        protein: '',
        fat: '',
        client: {
                username: "",
                date: []
              },
    };
}



    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

   

    render() {
        const { classes } = this.props;

        return (
            <div>
            
                <Grid container>
                    <Grid item sm>
                        <form className={classes.container} noValidate autoComplete="off">
                        <DateSelector />
                            <TextField
                                id="filled-number"
                                label="Carbohydrates"
                                value={this.state.carbohydrates}
                                onChange={this.handleChange('carbohydrates')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                variant="filled"
                            />

                            <TextField
                                id="filled-number"
                                label="Protein"
                                value={this.state.protein}
                                onChange={this.handleChange('protein')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                variant="filled"
                            />
                            <TextField
                                id="filled-number"
                                label="Fat"
                                value={this.state.fat}
                                onChange={this.handleChange('fat')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                variant="filled"
                            />



                            <Button
                                onClick={this.handleSubmit}
                                variant="contained"
                                size="small"
                                color="primary"
                                className={classes.margin}>
                                ADD
    
                            </Button>
                        </form>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm>
                        <MacroForm />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

MacroList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MacroList));