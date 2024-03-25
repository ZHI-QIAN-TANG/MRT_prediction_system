var collage_data_over10000 = [
    { "校名": "中山大學", "總人數 ": "10296", "行政區": "鼓山區" },
    { "校名": "高師和平校區", "總人數 ": "2281", "行政區": "苓雅區"},
    { "校名": "高師燕巢校區", "總人數 ": "1512", "行政區": "燕巢區"},
    { "校名": "高雄餐旅大學", "總人數 ": "4929", "行政區": "小港區"},
    { "校名": "義守大學", "總人數 ": "14351", "行政區": "大樹區"},
    { "校名": "高雄醫學大學", "總人數 ": "5632", "行政區": "三民區"},
    { "校名": "高雄大學", "總人數 ": "5986", "行政區": "楠梓區" },
    { "校名": "實踐大學", "總人數 ": "6000", "行政區": "旗山區" }
    
]

var collage_data_under10000 = [
    { "校名": "文藻外語大學", "總人數 ": "7930", "行政區": "三民區" },
    { "校名": "高科第一校區", "總人數 ": "6904", "行政區": "燕巢區"},
    { "校名": "高科建工校區", "總人數 ": "4218", "行政區": "三民區"},
    { "校名": "高科燕巢校區", "總人數 ": "4218", "行政區": "燕巢區"},
    { "校名": "高科楠梓校區", "總人數 ": "2732", "行政區": "楠梓區"},
    { "校名": "高科旗津校區", "總人數 ": "2732", "行政區": "旗津區"},
    { "校名": "正修科技大學", "總人數 ": "16767", "行政區": "鳥松區" },
    { "校名": "東方設計大學", "總人數 ": "950", "行政區": "湖內區" },
    { "校名": "樹德科技大學", "總人數 ": "8819", "行政區": "燕巢區"},
    { "校名": "輔英科技大學", "總人數 ": "11900", "行政區": "大寮區"},
    { "校名": "樹人科技大學", "總人數 ": "7305", "行政區": "路竹區"}

]



function collage_bar_demo_over10000() {
    var ctx2 = document.getElementById("collage_over10000_canvas");
    const school_name = [];
    const collage = [];
    for (var i = 0; i < 3; i++) {
        school_name.push(collage_data_over10000[i]["校名"]);
        collage.push(collage_data_over10000[i]["總人數 "]);
    }
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: school_name,
            datasets: [{
                label: '高雄市各大學生人數',
                data: collage,
            }]
        },
        borderWidth: 1
    });
}

function collage_bar_demo_under10000() {
    var ctx2 = document.getElementById("collage_under10000_canvas");
    const school_name = [];
    const collage = [];
    for (var i = 0; i < 6; i++) {
        school_name.push(collage_data_under10000[i]["校名"]);
        collage.push(collage_data_under10000[i]["總人數 "]);
    }
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: school_name,
            datasets: [{
                label: '高雄市各科大學生人數',
                data: collage,
            }]
        },
        borderWidth: 1
    });
}

