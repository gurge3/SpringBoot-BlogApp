(function() {
    angular.module("BlogProject")
        .controller("loginController", loginController);

    function loginController($location, userService, $cookieStore, $window) {
        var model = this;
        this.login = login;

        function login(username, password) {
            userService.login(username, password)
                .then(function(data) {
                    if (data !== "invalid") {
                        $cookieStore.put("user", data);
                        $window.location.href = ("#!/" + data.id + "/profile");
                        $window.location.reload();
                    } else {
                        model.message = "Invalid credentials";
                    }
                })
        }
    }
})();