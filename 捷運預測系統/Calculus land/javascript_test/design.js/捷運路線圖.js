function circle(){
  return google.maps.SymbolPath.CIRCLE
}
function backward(){
  return google.maps.SymbolPath.BACKWARD_CLOSED_ARROW
}
function Scale(){
  return 5
}
function Scale2(){
  return 3
}
function initMap() {
    var nuk = {lat: 22.73429,lng: 120.2852};
    
    //要標示的區域
    var university=[
      {lat: 22.78705,lng: 120.40695},//nknu1
      {lat: 22.77232,lng: 120.40014},//nkust1
      {lat: 22.76387,lng: 120.37618},//ShoTu
      {lat: 22.72714,lng: 120.40582},//IShou
      {lat: 22.75682,lng: 120.33578},//nkust2
      {lat: 22.72473,lng: 120.3146},//nkust3
      {lat: 22.73429,lng: 120.2852},//nuk
      {lat: 22.78324,lng: 120.27053},//rcaf
      {lat: 22.7046,lng: 120.29224},//rocna
      {lat: 22.67022,lng: 120.31825},//wzu
      {lat: 22.65151,lng: 120.32866},//nkust4
      {lat: 22.64727,lng: 120.31074},//kmu
      {lat: 22.62586,lng: 120.3207},//nknu2
      {lat: 22.62833,lng: 120.26472},//nsyu
      {lat: 22.60853,lng: 120.27267},//nkust5
      {lat: 22.65098,lng: 120.34892},//chu
      {lat: 22.6193,lng: 120.36585},//rocma
      {lat: 22.60268,lng: 120.38968},//fy
      {lat: 22.56325,lng: 120.37238}//nkuht
    ]
    var attractions=[
      {lat:22.63551,lng: 120.27542},//壽山動物園
      {lat:22.61335,lng: 120.26863},//旗津區(地址是老街)
      {lat:22.68333,lng: 120.29669},//蓮池潭
      {lat:22.65669,lng: 120.28659},//高雄市立美術館
      {lat:22.61888,lng: 120.26688},//打狗英國領事館文化園區
      {lat:22.62695,lng: 120.28679},//高雄市立歷史博物館
      {lat:22.64148,lng: 120.32255},//國立科學工藝博物館
      {lat:22.62577,lng: 120.31806},//高雄市文化中心
      {lat:22.61989,lng: 120.28154},//駁二藝術特區
      {lat:22.6529,lng: 120.3054},//愛河
      {lat:22.70312,lng: 120.29446},//國家世運體育場
      {lat:22.91107,lng: 120.55754},//美濃客家文物館
      {lat:22.66036,lng: 120.3538},//澄清湖
      {lat:22.75547,lng: 120.44569},//佛光山
      {lat:22.88679,lng: 120.6633},//茂林遊憩區
      {lat:22.99843,lng: 120.6327},//寶來、不老溫泉區
      {lat:22.66275,lng: 120.32959},//金獅湖風景區
      {lat:22.73078,lng: 120.40898},//義大世界
      {lat:22.88896,lng: 120.38656},//田寮月世界
      {lat:22.55068, lng:120.31794},//紅毛港文化園區
    ];
    

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 11,
      center: nuk
    });
    var nknu1 = new google.maps.Marker({
      position: university[0],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄師範大學(燕巢校區)",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nkust1 = new google.maps.Marker({
      position: university[1],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄科技大學(燕巢校區)",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var ShoTu = new google.maps.Marker({
      position: university[2],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"樹德科技大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var IShou = new google.maps.Marker({
      position: university[3],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"義守大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nkust2 = new google.maps.Marker({
      position: university[4],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄科技大學(第一科大)",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nkust3 = new google.maps.Marker({
      position: university[5],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄科技大學(楠梓校區)",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nuk = new google.maps.Marker({
      position: university[6],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var rcaf = new google.maps.Marker({
      position: university[7],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"中華民國空軍軍官學校",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var rocna = new google.maps.Marker({
      position: university[9],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"海軍軍官學校",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var wzu = new google.maps.Marker({
      position: university[10],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"文藻大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nkust4 = new google.maps.Marker({
      position: university[11],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄科技大學(建功校區)",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var kmu = new google.maps.Marker({
      position: university[12],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄醫學大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nknu2 = new google.maps.Marker({
      position: university[13],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄師範大學(和平校區)",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nsyu = new google.maps.Marker({
      position: university[14],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"中山大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nkust5 = new google.maps.Marker({
      position: university[15],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄科技大學(旗津校區)",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var chu = new google.maps.Marker({
      position: university[16],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"正修科技大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var rocma = new google.maps.Marker({
      position: university[17],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"中華民國路軍軍官學校",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var fy = new google.maps.Marker({
      position: university[18],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"輔英科技大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    var nkuht = new google.maps.Marker({
      position: university[19],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄餐旅大學",
      icon: {
        path: circle(),
        scale: Scale(),
      },
    });
    
    var Shoushan = new google.maps.Marker({
      position: attractions[0],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"壽山動物園",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Cijin = new google.maps.Marker({
      position: attractions[1],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"旗津風景區",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Lianchitan = new google.maps.Marker({
      position: attractions[2],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"蓮池潭",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var art_gallery = new google.maps.Marker({
      position: attractions[3],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄市立美術館",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Dog_Consulate = new google.maps.Marker({
      position: attractions[4],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"打狗英國領事館文化園區",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var history_museum = new google.maps.Marker({
      position: attractions[5],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄市立歷史博物館",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var science_Museum = new google.maps.Marker({
      position: attractions[6],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"國立科學工藝博物館",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Cultural_Center = new google.maps.Marker({
      position: attractions[7],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"高雄市文化中心",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Art_Zone = new google.maps.Marker({
      position: attractions[8],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"駁二藝術特區",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var love_river = new google.maps.Marker({
      position: attractions[9],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"愛河",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var National_Stadium = new google.maps.Marker({
      position: attractions[10],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"國家體育場(世運主場館)",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Hakka_Museum = new google.maps.Marker({
      position: attractions[11],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"美濃客家文物館",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var clarification = new google.maps.Marker({
      position: attractions[12],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"澄清湖",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Fo_Guang_Shan = new google.maps.Marker({
      position: attractions[13],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"佛光山",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Maolin = new google.maps.Marker({
      position: attractions[14],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"茂林遊憩區",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var hot_spring_area = new google.maps.Marker({
      position: attractions[15],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"寶來、不老溫泉區",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Golden_Lion_Lake_Scenic_Area = new google.maps.Marker({
      position: attractions[16],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"金獅湖風景區",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var E_Da_World = new google.maps.Marker({
      position: attractions[17],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"義大世界",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Moon_World = new google.maps.Marker({
      position: attractions[18],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"田寮月世界",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });
    var Hongmaogang_Cultural_Park = new google.maps.Marker({
      position: attractions[19],
      map: map,
      //將滑鼠一到標示上時會顯示的字
      title:"紅毛港文化園區",
      icon: {
        path: backward(),
        scale: Scale2(),
      },
    });

    const flightPlanCoordinates = [
      //第一行，線頭，第二行，線尾
      {lat: 22.78705,lng: 120.40695},//nknu1
      {lat: 22.77232,lng: 120.40014},//nkust1
      {lat: 22.76387,lng: 120.37618},//ShoTu
      {lat: 22.72714,lng: 120.40582},//IShou
      //這邊多卡一個IShou是為了讓線在正確位置
      {lat: 22.76387,lng: 120.37618},//ShoTu
      {lat: 22.75682,lng: 120.33578},//nkust2
      {lat: 22.72473,lng: 120.3146},//nkust3
      {lat: 22.73429,lng: 120.2852},//nuk
      {lat: 22.78324,lng: 120.27053},//rcaf
      {lat: 22.73429,lng: 120.2852},//nuk
      {lat: 22.7046,lng: 120.29224},//rocna
      {lat: 22.67022,lng: 120.31825},//wzu
      {lat: 22.65151,lng: 120.32866},//nkust4
      {lat: 22.64727,lng: 120.31074},//kmu
      {lat: 22.62586,lng: 120.3207},//nknu2
      {lat: 22.64727,lng: 120.31074},//kmu
      {lat: 22.62833,lng: 120.26472},//nsyu
      {lat: 22.60853,lng: 120.27267},//nkust5
      {lat: 22.62833,lng: 120.26472},//nsyu
      {lat: 22.64727,lng: 120.31074},//kmu
      {lat: 22.65151,lng: 120.32866},//nkust4
      {lat: 22.65098,lng: 120.34892},//chu
      {lat: 22.6193,lng: 120.36585},//rocma
      {lat: 22.60268,lng: 120.38968},//fy
      {lat: 22.56325,lng: 120.37238}//nkuht
    ];
    const attractionsPlanCoordinates=[
      {lat:22.99843,lng: 120.6327},//寶來、不老溫泉區
      {lat:22.91107,lng: 120.55754},//美濃客家文物館
      {lat:22.88679,lng: 120.6633},//茂林遊憩區
      {lat:22.91107,lng: 120.55754},//美濃客家文物館
      {lat:22.88896,lng: 120.38656},//田寮月世界
      {lat:22.75547,lng: 120.44569},//佛光山
      {lat:22.73078,lng: 120.40898},//義大世界
      {lat:22.66036,lng: 120.3538},//澄清湖
      {lat:22.66275,lng: 120.32959},//金獅湖風景區
      {lat:22.68333,lng: 120.29669},//蓮池潭
      {lat:22.70312,lng: 120.29446},//國家世運體育場
      {lat:22.68333,lng: 120.29669},//蓮池潭
      {lat:22.66275,lng: 120.32959},//金獅湖風景區
      {lat:22.64148,lng: 120.32255},//國立科學工藝博物館
      {lat:22.62577,lng: 120.31806},//高雄市文化中心
      {lat:22.55068, lng:120.31794},//紅毛港文化園區
      {lat:22.62577,lng: 120.31806},//高雄市文化中心
      {lat:22.64148,lng: 120.32255},//國立科學工藝博物館
      {lat:22.66275,lng: 120.32959},//金獅湖風景區
      {lat:22.6529,lng: 120.3054},//愛河
      {lat:22.65669,lng: 120.28659},//高雄市立美術館
      {lat:22.63551,lng: 120.27542},//壽山動物園
      {lat:22.62695,lng: 120.28679},//高雄市立歷史博物館
      {lat:22.61989,lng: 120.28154},//駁二藝術特區
      {lat:22.61888,lng: 120.26688},//打狗英國領事館文化園區
      {lat:22.61335,lng: 120.26863},//旗津區(地址是老街)

    ];

    //畫線
    const flightPath = new google.maps.Polyline({
      //從哪裡到哪裡
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#ff1493",
      //透明度
      strokeOpacity: 1.0,
      //線寬度
      strokeWeight: 3,
    });
    const attractionsPath = new google.maps.Polyline({
      //從哪裡到哪裡
      path: attractionsPlanCoordinates,
      geodesic: true,
      strokeColor: "#00FFFF",
      //透明度
      strokeOpacity: 1.0,
      //線寬度
      strokeWeight: 3,
    });

    flightPath.setMap(map);
    attractionsPath.setMap(map);
    window.initMap = initMap;
  }

