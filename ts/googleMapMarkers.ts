class googleMapMarkers {
    
    public  key:string;
    private map:any;
    private loadedPoints:any[];
    private loadedMarkers:any[];
    public  bound:boolean = false;
    public  markersData:any[];

    constructor(key: string, map:any) {
        this.key = key;
        this.map = map;
        this.loadedPoints  = [];
        this.loadedMarkers = [];
        this.markersData   = [];
    }

    public setCenter(lat:number, lng:number):void{
        let point = new google.maps.LatLng(lat, lng);
        this.map.setCenter(point);
    }

    public zoom(zoom):void{
        this.map.setZoom(zoom);        
    } 

    public mapType(type):void{
        this.map.setMapTypeId(type);
    }   

    public addMarker(lat:number, lng:number, data?, callback?):void{
        
        let point = new google.maps.LatLng(lat, lng);

       var image = {
          url: data.image,
          size: new google.maps.Size(20, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32)
        };

        let marker = new google.maps.Marker({
            position : point,
            title    : (data) ? data.title : "",
            map      : this.map,
            data     : data,
            icon     : image
        });      

        this.loadedPoints.push(point);
        this.loadedMarkers.push(marker);

        google.maps.event.addListener(marker, 'click', function(e) {         
            if(callback){
                callback(marker);
            }
        });
    }

    public addMarkers(markers){

        this.markersData = markers;

        markers.data.forEach((marker, index) => {
            this.addMarker(marker.lat, marker.lng, marker, markers.callback);
        }); 

        if(this.bound){
            this.setBound();
        }
    }

    private setBound(){
        let bounds = new google.maps.LatLngBounds();
        
        this.loadedPoints.forEach((point, index) => {
            bounds.extend(point);
        });    

        this.map.fitBounds(bounds);        
    }   

    public clearMarkers():void{
        this.loadedMarkers.forEach((marker, index) => {
            marker.setMap(null);
        });        
    } 

    public near(lat, lng, radius){
        this.clearMarkers();

        var lat = lat;
        var lng = lng;
        var R   = 6371; // radius of earth in km
        var distances = [];
        var closest = -1;

        var thisCallback = this.markersData.callback;
        this.markersData.data.forEach((marker, index) => {

            var mlat = marker.lat;
            var mlng = marker.lng;

            if(mlat != '' && mlng != ''){
                var dLat  = this.rad(mlat - lat);
                var dLong = this.rad(mlng - lng);
                var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(this.rad(lat)) * Math.cos(this.rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c;
                distances[index] = d;

                if (Math.round(d) < (radius * 1.60934)) {
                    this.addMarker(marker.lat, marker.lng, marker, thisCallback);
                }
            }
        });
    }

    private rad(x){
        return x*Math.PI/180;
    }

}
