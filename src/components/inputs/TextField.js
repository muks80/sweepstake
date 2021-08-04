import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';

export default function TextField(props) {
    const { value, onChange, errors } = props;

    return (
        <div>
            <MuiTextField
                style={{backgroundColor: 'white', borderRadius: '4px', margin: '5px'}}
                variant='outlined'
                label='Player Name'
                color='secondary'
                name='player'
                inputRef={(input) => {
                    if(input != null) {
                        input.focus();
                    }
                }}
                value={value}
                onChange={onChange}
                error={false}
                {...(errors.input && {error: true, helperText: errors.input})}
                {...(errors.teams && {error: true, helperText: errors.teams})}
            >
            </MuiTextField>
        </div>
    )
}
