
function URLs() {
    this.loginURL = "http://localhost:8080/login";
    this.regURL = "http://localhost:8080/register";
    this.hasUserURL = "http://localhost:8080/hasUser";
    this.buildLoginURL = (username, password) => {
        return this.loginURL + "?username=" + username + "&password="+password;
    }
    this.buildHasUserURL = (username) => {
        return this.hasUserURL + "?username=" + username;
    }
};
export default new URLs();
