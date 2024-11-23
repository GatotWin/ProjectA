function applyStyles() {
    // Tambahkan CSS ke elemen <head>
    const style = document.createElement("style");
    style.textContent = `
        #gatotbar {
            visibility: hidden;
            min-width: 250px;
            margin-left: -140px;
            background: linear-gradient(to bottom, #7d5601 1%, #403c01 40%, #000000 100%);
            color: white;
            text-align: center;
            box-shadow: #d4bb82 0px 0px 10px 2px;
            border-radius: 50px;
            border: 3px solid #d4bb82;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 12px;
            text-shadow: 1px 1px 5px rgb(0,0,0);
            position: fixed;
            z-index: 1;
            left: 50%;
            top: 100px;
            font-size: 14px;
            font-weight: bold;
            font-family: 'Arial', sans-serif;
        }
        #GradientBorder {
            position: relative;
            width: 450px;
            padding: 400px 0;
            font-size: 5em;
            color: #fff;
            text-align: center;
            letter-spacing: 10px;
            background: #f9c108;
        }
        #gatotbar.show {
            visibility: visible;
            -webkit-animation: fadein 0.8s, fadeout 0.8s 4.5s;
            animation: fadein 0.8s, fadeout 0.8s 4.5s;
        }
        @-webkit-keyframes fadein {
            from {top: 0; opacity: 0;} 
            to {top: 100px; opacity: 2;}
        }
        @keyframes fadein {
            from {top: 0; opacity: 0;}
            to {top: 100px; opacity: 2;}
        }
        @-webkit-keyframes fadeout {
            from {top: 100px; opacity: 2;} 
            to {top: 0; opacity: 0;}
        }
        @keyframes fadeout {
            from {top: 100px; opacity: 2;}
            to {top: 0; opacity: 0;}
        }
    `;
    document.head.appendChild(style);
}

function createElements() {
    // Tambahkan elemen #gatotbar
    const gatotbar = document.createElement("div");
    gatotbar.id = "gatotbar";
    document.body.appendChild(gatotbar);

    // Tambahkan elemen #withdraw
    const withdraw = document.createElement("p");
    withdraw.id = "withdraw";
    gatotbar.appendChild(withdraw);
}

function loadlink() {
    // Generate angka acak
    const angka_acak = Math.floor(Math.random() * (10001 - 50) + 50);

    // Generate huruf acak
    function maketextnumber(n) {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < n; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }

    const huruf_acak = maketextnumber(8);
    const huruf_belakang = huruf_acak.substring(6);
    const huruf_depan = huruf_acak.substring(0, 2);

    // Format angka ke dalam format rupiah
    const rupiah = (number) =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);

    const nominal = rupiah(angka_acak + "000");
    const baris = `${huruf_depan}****${huruf_belakang} Berhasil Withdraw ${nominal}`;

    // Tampilkan pesan
    const gatotbar = document.getElementById("gatotbar");
    gatotbar.className = "show";
    setTimeout(() => {
        gatotbar.className = gatotbar.className.replace("show", "");
    }, 3000);

    // Update teks withdraw
    document.getElementById("withdraw").innerHTML = baris;
}

// Inisialisasi gaya, elemen, dan interval
applyStyles();
createElements();
loadlink();
setInterval(loadlink, 5000);
