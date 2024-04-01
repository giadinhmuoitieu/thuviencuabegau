// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Em iu ơi",
        "Anh yêu em",
        "Hôm nay là sinh nhật của em",
        "Anh chỉ muốn nói là",
        "Em yêu đừng buồn khi hong có anh nha, anh luôn ở bên bé nè",
        "Anh muốn bé yêu lúc nào cũng vui vẻ và tích cực nhiều nè",
        "Bé là em bé ngoan giỏi của anh",
        "Cưng cưng em bé",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Em iu ơi": "./imgs/cute1.jpg",
        "Anh yêu em": "./imgs/cute2.jpg",
        "Hôm nay là sinh nhật của em": "./imgs/cute3.jpg",
        "Anh chỉ muốn nói là": "./imgs/cute4.jpg",
        "Em yêu đừng buồn khi hong có anh nha, anh luôn ở bên bé nè": "./imgs/cute5.jpg",
        "Anh muốn bé yêu lúc nào cũng vui vẻ và tích cực nhiều nè": "./imgs/cute6.jpg",
        "Bé là em bé ngoan giỏi của anh": "./imgs/cute7.jpg",
        "Cưng cưng em bé": "./imgs/chuo.gif"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bé bấm để bắt đầu nè",
        play: "Bật nhạc chỗ này nè bé",
        bannar_coming: "Trang trí thêm một chút",
        balloons_flying: "Có vẻ thiếu một cái gì đó?",
        cake_fadein: "Bánh sinh nhật？",
        light_candle: "Nến？",
        wish_message: "Chúc mừng sinh nhật em yêu của anh",
        story: "bé có tin nhắn nè"
    },

    // 结束语
    loveText: 'Anh yêu em bé Nguyễn Ngọc Tú Anh'
};
