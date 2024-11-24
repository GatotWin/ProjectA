document.addEventListener('DOMContentLoaded', () => {
    // Tambahkan style dinamically
    const style = document.createElement('style');
    style.innerHTML = `
        .transaksi-header:nth-child(1), .bukanseo {
            border: 2px solid #232534 !important;
            color: White!important;
            width: 100% !important;
            height: 33px !important;
            background: #121212;
        }
        .box-middle, .bukanseo-box {
            padding: 0;
            border: 4px groove #ffe600;
            box-shadow: #ffe600 0px 0px 10px 1px;
            margin: 0 5px 10px;
            max-width: 267px;
            display: inline-block;
            text-align: center;
            margin-top: 14px;
            margin-bottom: 15px;
        }
        .post-card3, .bukanseo-card {
            position: relative;
            transition: all .3s ease;
            border-radius: 10px;
        }
        .post-card3:hover, .bukanseo-card:hover {
            transform: scale(1.05);
            z-index: 10;
        }
        .post-card3 img, .bukanseo-card img {
            border-radius: 10px;
            max-width: 100%;
            height: auto;
        }
        .post-card3 a, .post-card3 a:hover, .bukanseo-card a, .bukanseo-card a:hover {
            text-decoration: none;
            color: #f1f1f1;
        }
        .post-card3 .post-overlay, .bukanseo-card .post-overlay {
            position: absolute;
            background-color: transparent;
            width: 100%;
            height: 100%;
            z-index: 5;
        }
        .post-card3-link, .bukanseo-card-link {
            position: absolute;
            bottom: 0;
            background: #000;
            background: rgba(0,0,0,.5);
            color: #f1f1f1;
            width: 100%;
            transition: .5s ease;
            opacity: 0;
            color: #fff;
            font-size: 17px;
            padding: 10px;
            text-align: center;
            border-radius: 0 0 10px 10px;
            font-family: Helvetica, sans-serif;
        }
        .post-card3:hover .post-card3-link, .bukanseo-card:hover .bukanseo-card-link {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Tambahkan konten gambar jackpot
    const content = `
        <center>
            <div class="item box-middle post-card3">
                <a href="#"><img title="GATOT4D" width="100%" src="https://i.ibb.co/PQ58tzM/jackpot-wd1.png" alt="GATOT4D"></a>
            </div>
            <div class="item box-middle post-card3">
                <a href="#"><img title="GATOT4D" width="100%" src="https://i.ibb.co/yg1KfdM/jackpot-wd2.png" alt="GATOT4D"></a>
            </div>
            <div class="item box-middle post-card3">
                <a href="#"><img title="GATOT4D" width="100%" src="https://i.ibb.co/tZqb6gn/jackpot-wd3.png" alt="GATOT4D"></a>
            </div>
            <div class="item box-middle post-card3">
                <a href="#"><img title="GATOT4D" width="100%" src="https://i.ibb.co/3F0XXm4/jackpot-wd4.png" alt="GATOT4D"></a>
            </div>
            <div class="item box-middle post-card3">
                <a href="#"><img title="GATOT4D" width="100%" src="https://i.ibb.co/XCBdWNj/jackpot-wd5.png" alt="GATOT4D"></a>
            </div>
        </center>
    `;
    document.querySelector('#mobile-slider').insertAdjacentHTML('afterend', content);
});
