//Инициализируем модуль
var laso = angular.module('myApp', []);
//Это моргание глаза
laso.controller('myCtrl', function($scope, $timeout, $interval) {
	$scope.num = 1;
	$scope.test = true;
	$scope.blink = function blink() {  //Функция которая осуществляет замену картинок для моргания
		if ($scope.test) {
				$scope.num++;
				if ($scope.num === 6) { $scope.test = false; }
			}
			else {
				$scope.num--;
				if ($scope.num === 1) { $scope.test = true; }
			}
	}
	$scope.run = function run() {	//Функция осуществляет задержку между выполнениями функции blink()
		var time = 100;
		for (i = 1; i <=10; i++) {
			$timeout($scope.blink, time);
			time += 100;
		}
	}
	$interval($scope.run, 5000);	//Запускает функцию run() каждые 5 секунд
});

//Это для подкачки книг из файла books.json, изначально
//на полке 8 книг, при нажатии на кнопку, подгружается
//ещё 20 книг
laso.controller('shelfCtrl', function($scope, $http) {
	$scope.count = 8;
	$scope.booksShow = function () {
    	$scope.count += 20;
    	$http.get('books.json').then(function(response) {
      		$scope.books = response.data.slice(0, $scope.count);
   	 	});
    }
    $http.get('books.json').then(function(response) {
      $scope.books = response.data.slice(0, $scope.count);
    });
	
});