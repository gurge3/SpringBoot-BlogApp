(function () {
    angular
        .module("BlogProject")
        .controller("postEditController", postEditController);

    function postEditController($routeParams, $window, blogService) {
        var model = this;
        var blogId = $routeParams['pid'];
        model.deleteBlog = deleteBlog;
        model.updateBlog = updateBlog;

        function deleteBlog() {
            blogService
                .deleteBlog(blogId)
                .then(function(response) {
                    if (response.message === "success") {
                        $window.history.back();
                    } else {
                        model.error = "Delete unsuccessfully.";
                    }
                })
        }

        function updateBlog() {
            blogService
                .updateBlog(model.blog)
                .then(function(response) {
                    console.log(response);
                    if (response.message === "success") {
                        model.message = "Blog has been updated successfully!"
                    } else {
                        model.error = "Updated unsuccessfully.";
                    }
                })
        }

        function init() {
            blogService
                .findBlogById(blogId)
                .then(function (response) {
                    console.log(response);
                    model.blog = response;
                });
        }
        init();


    }
})();