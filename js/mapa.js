angular.module('mapApp', []).controller('mapCtrl', function($scope, $http) {
                
                $scope.destinos = []

                $http({
                    method: 'GET',
                    url: './js/destinos.json'
                }).then(function successCallback(response) {
                    
                    var canvas = new google.maps.Map(document.getElementById('map-canvas'));
                    var map = new googleMapMarkers("AIzaSyCvzWscengQ1ItOtYVWjldACDm7jBH3o7I", canvas);
                    
                    map.setCenter(-24.8442254, -65.4806004);
                    map.zoom(12);
                    map.mapType("roadmap")

                    $scope.destinos = response.data
                    

                    //------------------------------------------------------
                    $scope.getName = function(iata){
                        for(n in $scope.destinos){
                            if($scope.destinos[n].iata == iata){
                                return $scope.destinos[n].title;
                            }
                        }                        
                    }

                    $scope.viewRoute = function(company, route){
                        map.clearMarkers();
                        
                        for(n in lines){
                            lines[n].setMap(null)
                        }

                        drawLine( $scope.rutas[company][route],"#CCCCCC");
                        map.setBound();
                        
                        
                    }

                    var getPosition = function(iata){
                        for(n in $scope.destinos){
                            if($scope.destinos[n].iata == iata){
                                return $scope.destinos[n]
                            }
                        }
                        return false;
                    }

                    var lines = []
                    var drawLine = function(dest, color){
                        points = [];
                        markers = [];
                        
                        for(n in dest){
                            
                            data = getPosition(dest[n]);

                            if(data.lat && data.lng){
                                points.push(new google.maps.LatLng(data.lat, data.lng))
                                markers.push(data)
                            }
                        }

                        var line = new google.maps.Polyline({
                            path: points,
                            strokeColor: color,
                            strokeOpacity: 1.0,
                            strokeWeight: 5,
                            geodesic: false,
                            map: canvas
                        }); 
                        lines.push(line)

                        var _markers = {
                            data: markers,
                            callback: function (m) {
                                map.setCenter(m.data.lat, m.data.lng);
                                map.zoom(9);
                                $scope.$apply();
                            }
                        };
                            
                        map.addMarkers(_markers);
                       
                       
                                            
                    }

                    $scope.rutas = {
                        "Andes" : [
                            ["AEP","ROS","RES","PSS","IGR"],
                            ["AEP","TUC","SDE","SLA","JUJ"],
                            ["AEP","COR","MDZ","NQN","BRC"], 
                            ["AEP","PMY","CRD","FTE","USH"], 
                            ["AEP","COR","SCL"],
                            ["AEP","COR","LIM"], 
                            ["AEP","COR","GRU"], 

                        ],
                        "Alas del Sur" : [
                            ["COR","AEP","ROS"],
                            ["COR","AEP","REL","PMY","BRC"],
                            ["NQN","FTE","USH"],
                            ["COR","AEP","VGL","MDQ","BHI","REL","CRD","RGL","RGA","USH"],
                            ["COR","AEP","NQN","CPC","EQS"],
                            ["COR","AEP","RCU","LUQ","MDZ","TUC","SLA","JUJ"], 
                            ["COR","MDZ","NQN"],
                            ["REL","CRD","RGL","RGA"],
                            ["COR","AEP","MDZ","AFA","UAQ","IRJ","CTC","SDE"],
                            ["COR","AEP","BHI","RSA","VDM"],
                            ["COR","AEP","SFN","PSS","IGR"],
                            ["SLA","IGR","FTE","BRC","COR"],
                            ["COR","AEP","CNQ","RES","FMA"],
                            ["SLA","JUJ","CTC","UAQ","MDZ","COR","NQN","FTE"],
                            ["COR","SLA","VVI"],
                            ["COR","AEP","ROS","POA","GRU","GIG"],
                            ["COR","AEP","ROS","LIM","MIA"],
                            ["COR","AEP","ROS","ASU","MIA"],
                            ["COR","AEP","ROS","VVI"],
                            ["COR","AEP","ROS","SCL","MIA"],
                            ["COR","AEP","ROS","MVD","PDP"],
                            ["COR","AEP",",LAX","PVG"],
                            ["COR","AEP","FCO"]
                        ],
                        "American" : [
                            ["NQN","CRD","RGL","FTE","RGA","USH"],
                            ["NQN","CRD","USH"],
                            ["NQN","ZCO","SCL"],
                            ["NQN","CRD","RGL","PUQ"],
                            ["NQN","LGS","MDZ","TUC","SLA","TJA"],
                            ["NQN","COR","TUC","VVI"],
                            ["NQN","COR","RES","ASU"],
                            ["NQN","ROS","IGR"], 
                            ["NQN","ROS","AEP","PDP"],
                            ["NQN","BHI","MDQ","AEP"], 
                            ["NQN","COR","ROS","POA"], 
                            ["NQN","RSA","AEP"],
                            ["NQN","BRC","FTE","USH"] 
                        ]
                    }

                    for(n in $scope.rutas["Andes"]){
                        drawLine($scope.rutas["Andes"][n],"#000000")
                    }

                    for(n in  $scope.rutas["Alas del Sur"]){
                        drawLine($scope.rutas["Alas del Sur"][n],"#CCCCCC")
                    }   

                });
            });