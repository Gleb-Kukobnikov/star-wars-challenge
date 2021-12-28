import React, {useCallback, useState} from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Link as MaterialLink,
} from "@material-ui/core";
import {useParams, useHistory} from "react-router-dom";
import {FilmsList, Loading} from "../../components";
import {useQuery} from "@apollo/client";
import {HERO} from "../../queries";
import {Film, Hero} from "../../types";
import {CrawlModal} from "../../modals";
import {CrawlModalState} from "../../types";

export const HeroDetails: React.FC = () => {
    const history = useHistory();

    const { id }: { id: string; } = useParams();
    const [crawlModalState, setCrawlState] = useState<CrawlModalState>({ open: false });

    const handleCloseCrawl = useCallback(() => setCrawlState({ open: false }), []);
    const handleOpenCrawl = useCallback((film: Film) => setCrawlState({ open: true, film }), []);

    const { loading, data } = useQuery(HERO, { variables: { id } });

    if (loading) return <Loading/>;

    const { person: { name, birthYear, height, gender, filmConnection } }: { person: Hero; } = data;

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <>
                <Card raised style={{ borderRadius: 16, minWidth: 250 }}>
                    <CardHeader
                        avatar={<Avatar alt={name}>{name[0]}</Avatar>}
                        title={name}
                        subheader={birthYear}
                    />
                    <CardContent>
                        <Box mb={2} display="flex" justifyContent="space-between">
                            <Box display="flex" flexDirection="column" justifyContent="space-between">
                                <Typography variant="subtitle2" color="textSecondary">Height</Typography>
                                <Typography variant="body1" color="textPrimary">{height}</Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="space-between">
                                <Typography variant="subtitle2" color="textSecondary">Gender</Typography>
                                <Typography variant="body1" color="textPrimary" style={{ textTransform: 'capitalize' }}>{gender}</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="subtitle2" color="textSecondary">Acted in</Typography>
                            <FilmsList films={filmConnection.films} handleOpenCrawl={handleOpenCrawl} />
                        </Box>
                    </CardContent>
                </Card>
                <Box mt={2}>
                    <MaterialLink component="button" onClick={history.goBack}>
                        <Typography variant="subtitle2">Go Back</Typography>
                    </MaterialLink>
                </Box>
                <CrawlModal state={crawlModalState} closeModal={handleCloseCrawl} />
            </>
        </Box>
    )
};
