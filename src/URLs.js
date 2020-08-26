
function URLs() {
    this.loginURL = "http://localhost:8080/login";
    this.buildLoginURL = (username, password) => {
        return this.loginURL + "?username=" + username + "&password="+password;
    }
};
export default new URLs();
