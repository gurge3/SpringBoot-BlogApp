(function() {
    angular
        .module("BlogProject")
        .factory("blogService", blogService);

    function blogService($http) {
        return {
            "findBlogById": findBlogById,
            "updateBlog": updateBlog,
            "deleteBlog": deleteBlog,
            "createBlog": createBlog
        };

        function findBlogById(pid) {
            var url = "/api/blogs";
            return $http
                .get(url, pid)
                .then(function(response) {
                    return response.data[0];
                });
        }

        function updateBlog(blog) {
            var url = "/api/blogUpdate";
            return $http
                .put(url, blog)
                .then(function(response) {
                    return response.data;
                });
        }

        function deleteBlog(pid) {
            var url = "/api/blogDelete/" + pid;
            return $http
                .delete(url)
                .then(function(response) {
                    return response.data;
                });
        }

        function createBlog(blog) {
            var url = "/api/blogs/add";
            return $http
                .post(url, blog)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();