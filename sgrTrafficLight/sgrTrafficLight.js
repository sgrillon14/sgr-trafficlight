/*Copyright (c) 2016 Stéphane GRILLON https://github.com/sgrillon14/sgr-trafficlight
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */
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
					scope.cyellow="";
					scope.cgreen="green";
				} else if(value=="half_OK") {
					scope.cred="";
					scope.cyellow="";
					scope.cgreen="grenn anim";
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
					scope.cyellow="";
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
