var app=angular.module('Courses', []);

app.controller('MainController', ['$scope',     
    function($scope) {
        $scope.test='Hello World';
        $scope.posts=[
            {
                title: 'post 1',
                link: 'www.xyz.com',
                upvotes: 5
            },
            {
                title: 'post 2',
                link: 'www.xyz1.com',
                upvotes: 3
            },
            {
                title: 'post 3',
                link: 'www.xyz2.com',
                upvotes: 4
            },
            {
                title: 'post 4',
                link: 'www.xyz3.com',
                upvotes: 9
            },
        ];   
        $scope.addpost = function() {
            if($scope.title === '' || !$scope.title) {
                console.log("No Post submitted!");
                return;
            }
            $scope.posts.push({title: $scope.title, link:$scope.link, upvotes:0});
        };
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };
    }    
])