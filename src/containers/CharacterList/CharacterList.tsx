import React from 'react';
import {useHistory} from 'react-router-dom';
import {useQuery} from "@apollo/client";
import {
    List,
    Typography,
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText
} from "@material-ui/core";
import {Hero} from "../../types";
import {ALL_HEROES} from "../../queries";
import {Loading} from "../../components";

interface CharacterListProps {}

export const CharacterList: React.FC<CharacterListProps> = () => {
    const history = useHistory();
    const { loading, data } = useQuery(ALL_HEROES);

    if (loading) return (<Loading />);

    const { allPeople: { people } }: { allPeople: { people: Hero[] } } = data;

    return (
        <List>
            {people.map(({ id, name, gender }) =>
                <ListItem onClick={() => history.push(`/character/${id}`)} button id={id} key={`${id}_${name}`}>
                    <ListItemAvatar>
                        <Avatar alt={name}>{name[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography variant="subtitle1">{name}</Typography>}
                        secondary={gender}
                    />
                </ListItem>
            )}
        </List>
    );
};
