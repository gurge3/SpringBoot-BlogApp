(function() {
    angular
        .module("BlogProject")
        .controller("postListViewController", postListViewController);

    function postListViewController($sce, $routeParams, userService) {
        var model = this;
        var userId = $routeParams['uid'];
        model.getHtml = getHtml;

        function init() {
            userService
                .findBlogsByUserId(userId)
                .then(function (response) {
                    model.blogs = response;
                });
        }
        init();

        function getHtml(blog) {
            var html = $sce.trustAsHtml(blog.content);
            return html;
        }
    }
})();