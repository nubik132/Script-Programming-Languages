class User{
    static users = []
    constructor(login, password, basket) {
        this.login = login;
        this.password = password;
        this.basket = basket;
        User.users.push(this);
    }
}