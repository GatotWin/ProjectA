<style>
    #enaksnackbar {
        visibility: hidden;
        min-width: 250px;
        margin-left: -140px;
        background: linear-gradient(to bottom, #7d5601 1%, #403c01 40%, #000000 100%);
        color: white;
        text-align: center;
        box-shadow: #f9c108 0px 0px 10px 2px;
        border-radius: 50px;
        border: 3px solid #f9c108;
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

    #enaksnackbar.show {
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
</style>
<title></title>
<div id="enaksnackbar" class="show">
<p id="withdraw"></p>
</div>
<script>
    function loadlink(){
        var angka_acak = Math.floor(Math.random() * (10001-50)+50);

        function maketextnumber(n) {
            for (var r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], e = n, t = new Array, a = 0; a <= e - 1; a++) {
                t[a] = r[parseInt(Math.random() * r.length)];
                t = t;
                randomtextnumber = t.join("")
            }
        }

        var huruf_acak = (maketextnumber(8), randomtextnumber);
        var huruf_belakang = huruf_acak.substring(6);
        var huruf_depan = huruf_acak.substring(0, 2);

        const rupiah = (number)=>{
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            }).format(number);
        }

        var nominal = rupiah(angka_acak+"000");

        var baris = huruf_depan+"****"+huruf_belakang+" Berhasil Withdraw "+nominal;

        var x = document.getElementById("enaksnackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

        document.getElementById("withdraw").innerHTML = huruf_depan+"****"+huruf_belakang+" Berhasil Withdraw "+nominal;
        // document.getElementById("withdraw").style.backgroundColor ="red";
        // document.getElementById("withdraw").width ="30%";
        // document.getElementById("withdraw").height ="25px";
    }
    loadlink();
    setInterval(function(){
    loadlink() 
}, 5000);
</script>
