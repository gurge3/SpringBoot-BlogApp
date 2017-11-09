(function () {
    angular
        .module("BlogProject")
        .controller("postViewController", postViewController);

    function postViewController($sce, $routeParams, blogService) {
        var postId = $routeParams['pid'];
        var model = this;
        model.getHtml = getHtml;

        function init() {
            blogService
                .findBlogById(postId)
                .then(function (response) {
                    model.blog = response;
                });
        }
        init();

        function getHtml(blog) {
            var html = $sce.trustAsHtml(blog.content);
            return html;
        }
    }
})();