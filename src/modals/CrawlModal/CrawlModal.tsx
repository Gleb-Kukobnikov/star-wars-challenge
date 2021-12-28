import React from 'react';
import {Button, Modal} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./styles";
import {CrawlModalState} from "../../types";

interface CrawlModalProps {
    classes: {
        fade: string;
        starWars: string;
        crawl: string;
        closeButton: string;
    },
    state: CrawlModalState;
    closeModal: () => void;
}

export const CrawlModalComponent: React.FC<CrawlModalProps> = ({ classes, state, closeModal }) => {
    return (
        <Modal open={state.open} style={{ background: 'black' }}>
            <>
                <Button className={classes.closeButton} onClick={closeModal}>Close crawl</Button>
                <div className={classes.fade} />
                <section className={classes.starWars}>
                    <div className={classes.crawl}>
                        <div>
                            <p>{state?.film?.episodeID}</p>
                            <h1>{state?.film?.title}</h1>
                        </div>

                        {state?.film?.openingCrawl}
                    </div>
                </section>
            </>
        </Modal>
    );
};

export const CrawlModal = withStyles(styles)(CrawlModalComponent);
