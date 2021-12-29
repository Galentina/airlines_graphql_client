import {gql} from "@apollo/client";


export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        name
        username
        age
        nationality
      }
    }
`;


export const QUERY_ALL_FLIGHTS = gql`
    query GetAllFlights {
        flights{
            id
            date
            time
            name
            direct
        }
}
`;

export const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users{
            name
            age
            nationality
        }
}
`;
