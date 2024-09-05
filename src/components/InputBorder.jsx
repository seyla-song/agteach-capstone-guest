import { useMemo } from 'react';

const useTextFieldStyles = (error) => {
    return useMemo(() => ({
        '& .MuiOutlinedInput-root': {
            borderRadius: '1px',
            '& fieldset': {
                borderColor: error ? 'red' : '#032613',
            },
            '&:hover fieldset': {
                borderColor: error ? 'red' : '#032613',
            },
            '&.Mui-focused fieldset': {
                borderColor: error ? 'red' : '#032613',
            },
        },
        '& .MuiInputBase-input': {
            color: '#032613',
        },
    }), [error]);
};

export default useTextFieldStyles;

