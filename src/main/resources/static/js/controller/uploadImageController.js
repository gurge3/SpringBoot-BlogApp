(function () {
    angular
        .module("BlogProject")
        .controller("uploadImageController", uploadImageController);

    function uploadImageController($scope, $uibModalInstance, Upload) {

        $scope.progress = 0;

        // $scope.upload = function () {
        //     Upload.upload({
        //         url: 'api/upload',
        //         fields: {'dir': 'img/uploads/'},
        //         file: $scope.files[0],
        //         method: 'POST'
        //     }).progress(function (evt) {
        //         $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
        //     }).success(function (data) {
        //         $scope.progress = 0;
        //         $scope.image = data.dir + data.filename;
        //     });
        // };

        $scope.insert = function () {
            $uibModalInstance.close($scope.image);
        };
    }
})();