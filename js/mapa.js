angular.module('mapApp', []).controller('mapCtrl', function($scope, $http) {
                
                $scope.destinos = []
                $scope.colMenu = 1;
                $scope.colMapa = 11;

                $scope.rutas = angular.copy({
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
                });            

                $http({
                    method: 'GET',
                    url: './js/destinos.json'
                }).then(function successCallback(response) {
                    $scope.destinos = response.data

                    var canvas = new google.maps.Map(document.getElementById('map-canvas'));
                    var map = new googleMapMarkers("AIzaSyCvzWscengQ1ItOtYVWjldACDm7jBH3o7I", canvas);
                    map.mapType("roadmap")

                    //------------------------------------------------------

                    $scope.clear = function(){
                        map.clearMarkers();
                        for(n in lines){
                            lines[n].setMap(null)
                        }                        
                    }

                    $scope.getName = function(iata){
                        for(n in $scope.destinos){
                            if($scope.destinos[n].iata == iata){
                                return $scope.destinos[n].title;
                            }
                        }                        
                    }

                    $scope.viewRoute = function(company, route){
                        $scope.colMenu = 1;


                        $scope.clear();
                        drawLine($scope.rutas[company][route],getColor(company));
                    }

                    var getColor = function(company){
                        switch(company){
                            case "Andes":
                                color = "#FF0000"
                            break;
                            case "Alas del Sur":
                                color = "#00FF00"
                            break;
                            case "American":
                                color = "#0000FF"
                            break;
                        }
                        return color;
                    }

                    $scope.viewAirport = function(iata, lat, lng){
                        $scope.colMenu = 1;
                        map.setCenter(lat, lng);
                        map.zoom(7)
                        $scope.clear()                       

                        for(var n in $scope.rutas){
                            
                            for(var j in $scope.rutas[n]){
                                
                                if($scope.rutas[n][j].indexOf(iata)>-1){
                                     drawLine($scope.rutas[n][j], getColor(n))
                                }

                            }                           
                        }

                    }

                    $scope.setRoutes = function(company, clear, color){
                        if(clear){
                            $scope.clear();
                        }                        
                        for(n in $scope.rutas[company]){
                            drawLine($scope.rutas[company][n],color)
                        }
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
                        
                        points  = [];
                        markers = [];
                        
                        for(n in dest){
                            console.log(typeof dest[n])
                            if(typeof dest[n] == "string"){
                                
                                data = getPosition(dest[n]);

                                if(data.lat && data.lng){
                                    points.push(new google.maps.LatLng(data.lat, data.lng))
                                    markers.push(data)
                                }
                                
                            }
                        }

                        var line = new google.maps.Polyline({
                            path: points,
                            strokeColor: color,
                            strokeOpacity: 1,
                            strokeWeight: 3,
                            geodesic: false,
                            map: canvas
                        }); 
                        lines.push(line)

                        var _markers = {
                            data: markers,
                            callback: function (m) {
                                map.setCenter(m.data.lat, m.data.lng);
                                map.zoom(7);
                                $scope.$apply();
                            }
                        };
                            
                        map.addMarkers(_markers);
                                            
                    }

                   

                    $scope.all = function(centered){
                        $scope.setRoutes("Andes", false, "#FF0000");
                        $scope.setRoutes("Alas del Sur", false, "#00FF00");
                        $scope.setRoutes("American", false, "#0000FF");
                        if(centered){
                            map.setCenter(-24.8442254, -65.4806004);
                            map.zoom(7);
                        }
                    }

                    $scope.all(true);


                    
                      

                });
            });