import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer HnjfQc5NKi0XuBAl8GIJZezfGnKsK3sqF_iWsF8iucdmPJqbXJ6ifSUqd1cGGyAEtZpzWLghJ712m-3WFdU-X9AcFeLidUYIyJTM0yTMk2QlwYzN9EPyEVszqi1IX3Yx'
    }
});