import React from 'react';
import {Box, Typography} from "@material-ui/core";

export const Header: React.FC = () => (
    <Box m={1} p={1}>
        <Typography variant="h5" gutterBottom>Star-Wars characters</Typography>
    </Box>
);
