export default class UserService{
    url = 'https://jsonplaceholder.typicode.com/users';

    async getUsers(){
        return await fetch(this.url).then(value => value.json())
    }

    user(id){
        return fetch(this.url +'/' + id).then(value => value.json());
    }

}
