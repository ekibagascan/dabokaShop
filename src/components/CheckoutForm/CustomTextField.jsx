import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput ({ name, label }) {
    const { control } = useForm();
    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                as={TextField}
                defaultValue=''
                name={name}
                control={control}
                label={label}
                fullWidth
                required
            />
        </Grid>
    )
}

export default FormInput
