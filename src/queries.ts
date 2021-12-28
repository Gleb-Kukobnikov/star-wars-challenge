import {gql} from "@apollo/client";

export const ALL_HEROES = gql`
    query Root {
        allPeople {
            people {
                id
                name
                gender
            }
        }
    }
`;

export const HERO = gql`
    query Root($id: ID) {
        person(id: $id) {
            id
            name
            gender
            height
            birthYear
            filmConnection {
                films {
                    title
                    episodeID
                    openingCrawl
                }
            }
        }
    }
`;
