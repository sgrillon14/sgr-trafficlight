var sgrTrafficLight = function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			id: '=id',
			sgrtrafficlightstatus: '=status'
		},
		link : function(scope, element, attributes) {
			scope.$watch("sgrtrafficlightstatus", function (value) {
				console.log("value: " + value);
				if(value=="OK") {
					scope.cred="";
					scope.corange="";
					scope.cgreen="green";
				} else if(value=="half_OK") {
					scope.cred="";
					scope.cyellow="";
					scope.cgreen="green anim";
				} else if(value=="WARN") {
					scope.cred="";
					scope.cyellow="yellow";
					scope.cgreen="";
				} else if(value=="half_WARN") {
					scope.cred="";
					scope.cyellow="yellow anim";
					scope.cgreen="";
				} else if(value=="KO") {
					scope.cred="red";
					scope.corange="";
					scope.cgreen="";
				} else if(value=="half_KO") {
					scope.cred="red anim";
					scope.cyellow="";
					scope.cgreen="";
				} else {
					scope.cred="";
					scope.cyellow="";
					scope.cgreen="";
				}
            });
        },
        templateUrl: 'sgrTrafficLight/sgrTrafficLight.html'
	};
};
