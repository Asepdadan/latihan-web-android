
var app = angular.module('Appku', ['ngRoute']);
app.controller('xctrl',function($scope){

$scope.mahasiswa = mahasiswa;
	
});

app.controller('xfooter',function($scope){
	$scope.menu = [
	{ icon : 'home', title : "Home"},
	{ icon : 'person', title : "Akun Saya"},
	{ icon : 'plus', title : "Pasang Iklan"},
	{ icon : 'star', title : "Iklan Favorites"}
	];
});


app.config(function($routeProvider){
	$routeProvider
	.when('/kontak',{
		templateUrl : 'kontak.html'
	})
	.when('/detail',{	
		templateUrl : 'detail.html'
	})
	.when('/profil',{	
		templateUrl : 'profil.html'
	})
	.otherwise({redirectTo: '/'});
});

app.directive('headerTitle',function(){
	return {
		restrict : 'A',
		templateUrl : 'header.html'
	}
});

app.directive('contentTitle',function(){
	return {
		restrict : 'A',
		templateUrl : 'content.html'
	}
});

app.directive('footerTitle',function(){
	return {
		restrict : 'A',
		templateUrl : 'footer.html'
	}
});

var mahasiswa = [{
					nama : "Asep Dadan",
					kelas : "MIF-R45/11",
					nilai : 90
				},{
					nama : "Asdan",
					kelas : "MIF-R45/12",
					nilai : 60
				},{
					nama : "Syahrul",
					kelas : "MIF-R45/13",
					nilai : 100
				},{
					nama : "Agam Muslim",
					kelas : "MIF-R45/13",
					nilai : 90
				},
				{
					nama : "Roni Riadi",
					kelas : "MIF-R45/13",
					nilai : 90
				},
				{
					nama : "Lukman Nurjaman",
					kelas : "MIF-R45/13",
					nilai : 90
				},
				{
					nama : "Rohmat nurjaman",
					kelas : "MIF-R45/13",
					nilai : 90
				},
				{
					nama : "Muahmmad reja",
					kelas : "MIF-R45/13",
					nilai : 90
				},
				{
					nama : "Dadun",
					kelas : "MIF-R45/13",
					nilai : 90
				},
				{
					nama : "Usman",
					kelas : "MIF-R45/13",
					nilai : 90
				},
				{
					nama : "Sidik",
					kelas : "MIF-R45/13",
					nilai : 90
				},
				{
					nama : "Khanza",
					kelas : "MIF-R45/13",
					nilai : 90
				}];
