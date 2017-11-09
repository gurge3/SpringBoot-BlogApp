(function() {
    angular
        .module("BlogProject")
        .controller("navBarController", navBarController);

    function navBarController($scope, $window, $cookieStore) {
        var user = $cookieStore.get("user");
        $scope.isLoggedIn = (typeof user !== "undefined");

        $scope.getUsername = function() {
          if (typeof user === "undefined") {
              return null;
          } else {
              return user.username;
          }
        };

        $scope.getId = function() {
            if (typeof user === "undefined") {
                return null;
            } else {
                return user.id;
            }
        };

        $scope.logOut = function() {
            var user = $cookieStore.remove("user");
            $window.location.href = ("#!/login");
            $window.location.reload();
        }

    }
})();