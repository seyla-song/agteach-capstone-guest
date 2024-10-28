import React from 'react';
import { Box } from '@mui/material';

const StyledBox = ({ children }) => {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                padding: '10px 30px',
                borderRadius: '10px',
                textAlign: 'center',
                width: '320px',
                marginTop: '250px',
                position: 'relative',
            }}
        >
            {children}
        </Box>
    );
};

export default StyledBox;
