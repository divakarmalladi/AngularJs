app.controller("ctrl",first_controller);
function first_controller($scope) {
    $scope.var_one="My first variable";
    $scope.val1=90;
    $scope.val2=100;
    $scope.array_one=[10,20,30,40];
    $scope.obj_one={"Name":"Diwakar","Position":"PHP Developer","Experience":3}
    $scope.fun_one=  function () {
        alert('This is my first function');
    }
}