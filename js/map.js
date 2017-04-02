function initMap() {
        var tokyo = {lat: 35.652832, lng: 139.839478};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: tokyo,
          scrollwheel: false
        });
        var markerIcon = 'img/marker-45x45.png';
        var infowindow = new google.maps.InfoWindow({
        });
        
        
        /* Marker for Yann device garage*/
        var contentStringYannGarage = '<div id="marker-content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<div id="firstHeading" class="firstHeading">Yann device garage</div>'+
          '<div id="bodyContent">'+
          '<p>I regularly buy kickstarting ' +
          'or well established tech devices from motion sensors '+
          'to 3D printing items and I am always willing to show or share them. '+
          'I am also totally up to having a good talk around a coffee '+
          'near Gakugei Daigaku, come and say hello!</p>'+
          '<p>Devices currently shared by Yann:</p>'+
          '<a href="https://www.thalmic.com/en/myo/"><img src="img/myo.png" alt=""></a>'+
          '<a href="http://www.leapmotion.com"><img src="img/leap.png" alt=""></a>'+
          '<a href="http://www.lixpen.com/"><img src="img/lix.png" alt=""></a>'+
          '<a href="http://www.apple.com/apple-watch-series-1/"><img src="img/applewatch.png" alt=""></a>'+
          '<a href="http://www.mbot3d.com/product-3d-printer/mbot-grid-ii-plus"><img src="img/mbot3d-grid2.png" alt=""></a>'+
          '<a href="http://www.parrot.com/us/drones/parrot-bebop-drone.com/"><img src="img/bebop.png" alt=""></a></p>'+
          '<p><a id="try" href="#contact-wrapper">Contact Yann</a></p>'+
          '</div>'+
          '</div>';

        var markerYannGarage = new google.maps.Marker({
          position: {lat: 35.628743, lng: 139.685247},
          map: map,
          icon: markerIcon
        });
        markerYannGarage.addListener('click', function() {
            infowindow.setContent(contentStringYannGarage);
            infowindow.open(map, markerYannGarage);
        });
        
        
        
        /* Marker for Shibuya Fab Cafe*/
        var contentStringFabcafe = '<div id="marker-content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<div id="firstHeading" class="firstHeading">Fab Cafe, Shibuya</div>'+
          '<div id="bodyContent">'+
          '<p>In addition to a very cozy ambiance, very good coffees ' +
          'and a interesting choice of DYI devices from the 3D printer '+
          'to the sewing machine and the laser cutting machine.</p>'+
          '<p>Devices currently available at Fab Cafe, Shibuya:</p>'+
          '<a href="http://fabcafe.com/tokyo/fab_details#trotec-speedy"><img src="img/fabcafe-trotec360.png" alt=""></a>'+
          '<a href="http://fabcafe.com/tokyo/fab_details#trotec-lase-speedy100"><img src="img/fabcafe-trotec100.png" alt=""></a>'+
          '<a href="http://fabcafe.com/tokyo/fab_details#sense"><img src="img/fabcafe-sense.png" alt=""></a>'+
          '<a href="http://fabcafe.com/tokyo/fab_details#LEF-12"><img src="img/fabcafe-rolandUV.png" alt=""></a>' +
          '<a href="http://fabcafe.com/tokyo/fab_details#zortrax-m200"><img src="img/fabcafe-zortrax.png" alt=""></a></p>'+
          '<p><a id="try" href="http://fabcafe.com/tokyo/">To there website</a></p>'+
          '</div>'+
          '</div>';
        
        var markerFabcafe = new google.maps.Marker({
          position: {lat: 35.656058, lng: 139.695436},
          map: map,
          icon: markerIcon
        });
        markerFabcafe.addListener('click', function() {
            infowindow.setContent(contentStringFabcafe);
            infowindow.open(map, markerFabcafe);
        });
        
        
        
        /* Marker for Maximes Vdg*/
        var contentStringMaxGarage = '<div id="marker-content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<div id="firstHeading" class="firstHeading">Maxime device garage</div>'+
          '<div id="bodyContent">'+
          '<p>Maxime is a tech and design lover, an early adopter and ' +
          'a Kerbal Space Program pro-gamer. '+
          'He will meet you with great pleasure in Musashikosugi area with his beloved Belgian beers.</p>'+
          '<p>Devices currently shared by Maxime:</p>'+
          '<a href="https://theta360.com/"><img src="img/theta360.png" alt=""></a>'+
          '<a href="http://www.sphero.com/starwars/bb8"><img src="img/bb8.png" alt=""></a></p>'+
          '<p><a id="try" href="https://www.facebook.com/maxvdg">Contact Maxime</a></p>'+
          '</div>'+
          '</div>';
        
        var markerMaxGarage = new google.maps.Marker({
          position: {lat: 35.557088, lng: 139.654769},
          map: map,
          icon: markerIcon
        });
        markerMaxGarage.addListener('click', function() {
            infowindow.setContent(contentStringMaxGarage);
            infowindow.open(map, markerMaxGarage);
        });
        
        
        
        /* Marker for 111Studio*/
        var contentString111studio = '<div id="marker-content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<div id="firstHeading" class="firstHeading">111 Studio, Kanda</div>'+
          '<div id="bodyContent">'+
          '<p>This innovative Software Company accepted to open its doors ' +
          'and its Raspberry PI expertise to Tech2Try community. Meet Florian Didron and its team '+
          'to talk about tech, entrepreneurs and try there marvelous devices.</p>'+
          '<p>Devices currently in use at 111 Studio:</p>'+
          '<a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b/"><img src="img/raspPI3.png" alt=""></a>'+
          '<a href="https://www.raspberrypi.org/products/pi-zero/"><img src="img/rasPIZ.png" alt=""></a></p>'+
          '<p><a id="try" href="http://www.111studio.jp/contact.html">Contact 111 Studio</a></p>'+
          '</div>'+
          '</div>';
        
        var marker111studio = new google.maps.Marker({
          position: {lat: 35.694620, lng: 139.768782},
          map: map,
          icon: markerIcon
        });
        marker111studio.addListener('click', function() {
            infowindow.setContent(contentString111studio);
            infowindow.open(map, marker111studio);
        });
}