import React from 'react';
import {Box, CircularProgress} from "@material-ui/core";

export const Loading: React.FC = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    );
};
