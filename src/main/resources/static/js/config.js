(function() {
    angular
        .module("BlogProject", ["ngRoute", "textAngular", "ui.bootstrap", "ngFileUpload", "ngCookies"])
        .config(Config);

    function Config($routeProvider, $provide) {
        $routeProvider
            .when("/", {
            redirectTo: "/1/blog"
        })
            .when("/login", {
                templateUrl: "pages/loginPage.html",
                controller:"loginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "pages/registerPage.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/:uid/profile", {
                templateUrl: "pages/profilePage.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/:pid/edit", {
                templateUrl: "pages/postEditPage.html",
                controller: "postEditController",
                controllerAs: "model"
            })
            .when("/:uid/createPost", {
                templateUrl: "pages/postCreatePage.html",
                controller:"postCreateController",
                controllerAs: "model"
            })
            .when("/manageSystem", {
                templateUrl: "pages/manageSystem.html",
                controller: "manageSystemController",
                controllerAs: "model"
            })
            .when("/:pid/view", {
               templateUrl: "pages/postViewPage.html",
                controller: "postViewController",
                controllerAs: "model"
            })
            .when("/:uid/blog", {
                templateUrl: "pages/postListViewPage.html",
                controller: "postListViewController",
                controllerAs: "model"
            });

        $provide.decorator('taOptions', ['taRegisterTool', '$delegate', '$uibModal', function (taRegisterTool, taOptions, $uibModal) {
            taRegisterTool('uploadImage', {
                buttontext: 'Upload Image',
                iconclass: "fa fa-image",
                action: function (deferred,restoreSelection) {
                    $uibModal.open({
                        controller: 'uploadImageController',
                        templateUrl: 'pages/upload.html'
                    }).result.then(
                        function (result) {
                            restoreSelection();
                            document.execCommand('insertImage', true, result);
                            deferred.resolve();
                        },
                        function () {
                            deferred.resolve();
                        }
                    );
                    return false;
                }
            });
            taOptions.toolbar[1].push('uploadImage');
            return taOptions;
        }]);
    }
})();