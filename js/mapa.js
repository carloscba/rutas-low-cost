angular.module('mapApp', []).controller('mapCtrl', function($scope, $http) {
                
                $scope.destinos = []

                $http({
                    method: 'GET',
                    url: './js/destinos.json'
                }).then(function successCallback(response) {
                    
                    var canvas = new google.maps.Map(document.getElementById('map-canvas'));
                    var map = new googleMapMarkers("AIzaSyCvzWscengQ1ItOtYVWjldACDm7jBH3o7I", canvas);
                    
                    map.setCenter(-24.8442254, -65.4806004);
                    map.zoom(8);
                    map.mapType("roadmap")

                    $scope.destinos = response.data
                    var markers = {
                        data: response.data,
                        callback: function (m) {
                            map.setCenter(m.data.lat, m.data.lng);
                            map.zoom(9);
                            $scope.$apply();
                        }
                    };
                    map.addMarkers(markers);

                    //------------------------------------------------------
                    $scope.getName = function(iata){
                        for(n in $scope.destinos){
                            if($scope.destinos[n].iata == iata){
                                return $scope.destinos[n].title;
                            }
                        }                        
                    }

                    var getPosition = function(iata){
                        for(n in $scope.destinos){
                            if($scope.destinos[n].iata == iata){
                                return $scope.destinos[n]
                            }
                        }
                    }

                    var drawLine = function(dest, color){
                        points = [];
                        for(n in dest){
                            data = getPosition(dest[n]);
                            points.push(new google.maps.LatLng(data.lat, data.lng))
                        }

                        var line = new google.maps.Polyline({
                            path: points,
                            strokeColor: color,
                            strokeOpacity: 1.0,
                            strokeWeight: 5,
                            geodesic: false,
                            map: canvas
                        }); 
                    }

                    $scope.rutas = {
                        "Andes" : [
                            ["AEP","ROS","RES","PSS","IGR"],
                            ["AEP","SDE","TUC","SLA","JUJ"],
                            ["AEP","MDZ","NQN","BRC"],
                            ["AEP","PMY","CRD","FTE","USH"]
                        ],
                        "Alas del Sur" : [
                            ["COR","AEP","ROS"],
                            ["COR","AEP","REL","PMY","BRC","NQN","FTE","USH"],
                            ["COR","VGL","BHI","REL","CRD","RGA","USH"],
                            ["COR","AEP","NQN","CPC","EQS"],
                            ["COR","AEP","RCU","LUQ","MDZ","TUC","SLA","JUJ"],
                            ["COR","MDZ","NQN","REL","CRD","RGL","RGA"],
                            ["COR","AEP","AFA","UAQ","IRJ","CTC","SDE"],
                            ["COR","AEP","BHI","RSA","VDM"],
                            ["COR","AEP","SFN","PSS","IGR"],
                            ["SLA","IGR","FTE","BRC","COR"],
                            ["COR","AEP","CNQ","RES","FMA"],
                            ["SLA","JUJ","CTC","UAQ","MDZ","COR","NQN","RGL"],
                        ]
                    }

                    for(n in $scope.rutas["Andes"]){
                        drawLine($scope.rutas["Andes"][n],"#000000")
                    }

                    for(n in  $scope.rutas["Alas del Sur"]){
                        drawLine( $scope.rutas["Alas del Sur"][n],"#CCCCCC")
                    }   

                });
            });