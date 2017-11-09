(function() {
    angular
        .module("BlogProject")
        .factory("userService", userService);

    function userService($http) {
        return {
            "login": login,
            "register": register,
            "findBlogsByUserId": findBlogsByUserId
        };

        function login(username, password) {
            var url = "/api/users";
            return $http
                .get(url, username)
                .then(function (response) {
                    if (response.data[0].password === password) {
                    return response.data[0];
                    } else {
                        return "invalid";
                    }
            });
        }

        function register(user) {
            var url = "/api/users/add";
            return $http
                .post(url, user)
                .then(function(response) {
                    return response;
                });
        }

        function findBlogsByUserId(userId) {
            var url = "/api/blogQuery/" + userId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data;
                });
        }

    }
})();