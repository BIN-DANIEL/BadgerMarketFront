
function URLs() {
    this.root = "http://localhost:8080/";
    this.loginURL = this.root + "login";
    this.regURL = this.root + "register";
    this.hasUserURL = this.root + "hasUser";
    this.uploadItemURL =  this.root + "uploadItem";
    this.fetchItemURL = this.root + "fetchItem";
    this.findKeyWord = this.root + "searchItem";
    this.deleteItemURL = this.root + "deleteItem";
    this.buildDeleteItemURL = (itemId) => {
        return this.deleteItemURL + "?itemId=" + itemId;
    }
    this.buildLoginURL = (username, password) => {
        return this.loginURL + "?username=" + username + "&password="+password;
    }
    this.buildHasUserURL = (username) => {
        return this.hasUserURL + "?username=" + username;
    }
    this.buildFetchItemURL = (category, number, page) => {
        return this.fetchItemURL + "?category=" + category + "&number=" + number + "&page=" + page;
    }
    this.buildFindKeyWordURL = (keyword, number, page) => {
        return this.findKeyWord + "?keyword=" + keyword + "&number=" + number + "&page=" + page;
    }
};
export default new URLs();
