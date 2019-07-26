function myPropertyEditorController($scope, $http, editorService) {
    $scope.add = function () {

        /* Définition d'une modale du infinit editor */
        var giphyPicker = {
            apikey: $scope.model.config.apikey,
            title: "Animated Gif Search",
            view: "/App_Plugins/MyPropertyEditor/MyPicker.html",
            /* Appel à la petite fenêtre vertical de droite */
            size: "small",
            submit: function (model) {
                $scope.model.value = model.images.original.url;
                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };

        /**
         * Appel du service Infinite Editor *
         */
        editorService.open(giphyPicker);
    };

    $scope.remove = function () {
        $scope.model.value = null;
    };
}

angular.module("umbraco").controller("myPropertyEditorController", myPropertyEditorController);