(function() {
    angular
        .module("BlogProject")
        .controller("registerController", registerController);

    function registerController($location, userService, $cookieStore) {
        var model = this;
        model.register = function (username, password, password2) {
            if (password !== password2) {
                model.error = "Password must match!";
            } else {
                var user = {
                    "username": username,
                    "password": password,
                    "role": "user"
                };
                userService.register(user)
                    .then(function(response) {
                        if (typeof response.data !== "undefined") {
                            $cookieStore.put("user", response.data);
                            $location.path('/' + response.data.id + '/profile');
                        } else {
                            model.error = "Registration error, please check!"
                        }
                    })
            }
        }

    }
})();