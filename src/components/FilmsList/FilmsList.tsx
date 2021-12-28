import React from 'react';
import {Film} from "../../types";
import {Box, ButtonBase} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import {styles} from './styles';

interface FilmsListProps {
    films: Film[];
    handleOpenCrawl: (film: Film) => void;
    classes: {
        openCrawlBtn: string;
    };
}

const FilmsListComponent: React.FC<FilmsListProps> = ({ classes, films, handleOpenCrawl }) => (
    <>
        {films.map(({ title, episodeID, openingCrawl }) => (
            <ButtonBase className={classes.openCrawlBtn} key={title} onClick={() => handleOpenCrawl({ title, episodeID, openingCrawl })}>
                <Box display="flex" flexWrap alignItems="flexStart">
                    {title}
                </Box>
            </ButtonBase>
        ))}
    </>
);

export const FilmsList = withStyles(styles)(FilmsListComponent);
