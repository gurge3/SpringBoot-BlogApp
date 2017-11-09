(function() {
    angular
        .module("BlogProject")
        .controller("profileController", profileController);

    function profileController($routeParams, userService, blogService) {
        var model = this;
        var userId = $routeParams['uid'];
        console.log(userId);
        model.userId = userId;
        model.deleteBlog = function(id, index) {
            blogService
                .deleteBlog(id)
                .then(function(response) {
                    if (response.message === "success") {
                        model.blogs.splice(index, 1);
                    }
                })
        };

        function init() {
            userService
                .findBlogsByUserId(userId)
                .then(function (response) {
                    model.blogs = response;
                });
        }
        init();
    }

})();