function initMap() {
        var tokyo = {lat: 35.652832, lng: 139.839478};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: tokyo,
          scrollwheel: false
        });
        var markerIcon = '../img/marker-45x45.png';
        var infowindow = new google.maps.InfoWindow({
        });
        
        /* Marker for Yann device garage*/
        var contentStringYannGarage = '<div id="marker-content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<div id="firstHeading" class="firstHeading">ヤンのデバイス</div>'+
          '<div id="bodyContent">'+
          '<p>僕はよくKICKSTARTERやアマゾンで人気があるデバイスを買って使ってます。 ' +
          '3Dプリンタやドローンとかボディセンサーを持ってます（持ち過ぎぐらい）ので'+
          '見たいとか試したいとか借りたいであれば遠慮なしで声掛けて下さい。 '+
          'コーヒーも大好きなので学大の近くにいた声掛けて下さい！</p>'+
          '<p>ヤンが持ってるデバイスはこちらです。</p>'+
          '<a href="https://www.thalmic.com/en/myo/"><img src="../img/myo.png" alt=""></a>'+
          '<a href="http://www.leapmotion.com"><img src="../img/leap.png" alt=""></a>'+
          '<a href="http://www.lixpen.com/"><img src="../img/lix.png" alt=""></a>'+
          '<a href="http://www.apple.com/apple-watch-series-1/"><img src="../img/applewatch.png" alt=""></a>'+
          '<a href="http://www.mbot3d.com/product-3d-printer/mbot-grid-ii-plus"><img src="../img/mbot3d-grid2.png" alt=""></a>'+
          '<a href="http://www.parrot.com/us/drones/parrot-bebop-drone.com/"><img src="../img/bebop.png" alt=""></a></p>'+
          '<p><a id="try" href="#contact-wrapper">ヤンに連絡する</a></p>'+
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
          '<div id="firstHeading" class="firstHeading">Fab Cafe, 渋谷</div>'+
          '<div id="bodyContent">'+
          '<p>このカフェーで確かに素晴らしい雰囲気と美味しいコーヒーばかりでなく' +
          '面白いテックデバイス沢山あります。３Dプリンター及びミシンかレーザーカッターがあります。'+
          'ちなみにスタッフも優しいです！</p>'+
          '<p>Fab Cafe, Shibuyaで見つけるデバイスはこちらです。</p>'+
          '<a href="http://fabcafe.com/tokyo/fab_details#trotec-speedy"><img src="../img/fabcafe-trotec360.png" alt=""></a>'+
          '<a href="http://fabcafe.com/tokyo/fab_details#trotec-lase-speedy100"><img src="../img/fabcafe-trotec100.png" alt=""></a>'+
          '<a href="http://fabcafe.com/tokyo/fab_details#sense"><img src="../img/fabcafe-sense.png" alt=""></a>'+
          '<a href="http://fabcafe.com/tokyo/fab_details#LEF-12"><img src="../img/fabcafe-rolandUV.png" alt=""></a>' +
          '<a href="http://fabcafe.com/tokyo/fab_details#zortrax-m200"><img src="../img/fabcafe-zortrax.png" alt=""></a></p>'+
          '<p><a id="try" href="http://fabcafe.com/tokyo/">FabCafeのウエブサイト</a></p>'+
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
          '<p>Maximeはニューテックのロジーが好きでよく出てきたばかりデバイスを買って試します。' +
          'ベルギーからの優しい人なので武蔵小杉駅の隣で会ってベルギービール飲んだり話せば嬉しいはずです！</p>'+
          '<p>Maximeが持ってるデバイスはこちらです。</p>'+
          '<a href="https://theta360.com/ja/"><img src="../img/theta360.png" alt=""></a>'+
          '<a href="http://www.sphero.com/starwars/bb8"><img src="../img/bb8.png" alt=""></a></p>'+
          '<p><a id="try" href="https://www.facebook.com/maxvdg">Maximeに連絡する</a></p>'+
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
          '<div id="firstHeading" class="firstHeading">111 Studio, 神田</div>'+
          '<div id="bodyContent">'+
          '<p>「１１１STUDIO」とはLOUIS VUITTONやRECRUITという会社のためイノヴェーション的ITソリュションを開発する会社です。' +
          'とりわけRaspberry PIをITソリュションで 使用していますのでこの機械の技術をTECH2TRYに提供します。'+
          'Raspberry PIについて質問があれば、機械を試したいなら遠慮なし１１１STUDIOチームに連絡してください。</p>'+
          '<p>111 Studioで使用してるデバイスはこちらです。</p>'+
          '<a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b/"><img src="../img/raspPI3.png" alt=""></a>'+
          '<a href="https://www.raspberrypi.org/products/pi-zero/"><img src="../img/rasPIZ.png" alt=""></a></p>'+
          '<p><a id="try" href="http://www.111studio.jp/contact.html">111 Studioに連絡する</a></p>'+
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