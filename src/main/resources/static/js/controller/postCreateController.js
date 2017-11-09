(function () {
    angular
        .module("BlogProject")
        .controller("postCreateController", postCreateController);

    function postCreateController($routeParams, blogService) {
        var model = this;
        var userId = $routeParams['uid'];


        model.createBlog = createBlog;

        function createBlog() {
            var newPost = {
                "title": model.title,
                "content": model.text,
                "pubDate": new Date(),
                "userId": userId
            };

            blogService
                .createBlog(newPost)
                .then(function (response) {
                    if (response.message === "success") {
                        model.message = "Blog has been successfully created!";
                    } else {
                        model.error = "Created unsuccessfully!";
                    }
                })
        }
    }


})();