document.addEventListener('DOMContentLoaded', () => {
    // Random member count
    const min = 12554;
    const max = 36548;
    const memberUser = Math.floor(Math.random() * (max - min + 1)) + min;

    // Styles in JavaScript
    const addStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .count-gatot {
                font-size: 1.8rem;
                background: #ffe600;
                padding: 0.3rem 0.5rem;
                color: #000000 !important;
                border-radius: 10px;
                font-weight: bold;
            }
            .wrapper-gatot4d {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: center;
                border-radius: 10px;
                margin-top: 1.3rem;
                border: 3px solid #ffe600;
                box-shadow: #ffe600 0px 0px 10px 1px;
                padding: 0.8rem;
            }
            .status-gatotmaxwin, .status-gatotmaxwin-mem {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .status-gatotmaxwin p {
                margin-right: 0.6rem !important;
            }
            .item-service {
                margin-right: 3rem;
            }
            .item-service:last-child {
                margin-right: 0;
            }
            .item-service h1 {
                font-size: 2.2rem;
                margin-top: 7px !important;
                text-transform: uppercase;
                font-weight: bold !important;
            }
            .google-wrapper {
                background: #fff;
                padding: 1.7rem;
                width: 18rem;
                height: 0.5rem;
                border-radius: 10px;
                position: relative;
            }
            .google-wrapper img {
                position: absolute;
                width: 2rem;
                top: 9px;
                left: 10px;
            }
            .google-wrapper p {
                position: absolute;
                left: 3.4rem;
                top: 0.6rem;
                text-transform: uppercase;
                font-size: 1.50rem !important;
                font-weight: bold !important;
                color: #000 !important;
            }
            .custom-section p {
                margin-bottom: 20px;
                text-align: center;
                font-size: 2rem;
                font-weight: bold;
                color: #fff;
                text-shadow: 5px 5px 10px rgba(128, 83, 0, 0.8);
            }
            .custom-button-container {
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            .custom-button {
                color: #000000;
                padding: 15px 100px;
                border: none;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: #000000 0px 0px 10px 2px;
                text-decoration: none;
                font-family: Arial, Helvetica, sans-serif;
                margin: 10px;
                font-size: 15px;
                display: inline-block;
                background-size: 600% 100%;
                animation: AnimationName 8s ease infinite;
                font-weight: bold;
                background-image: linear-gradient(
                    45deg,
                    #ffe600,
                    #ff9900,
                    #ffe600,
                    #ff9900,
                    #ffe600,
                    #ff9900
                );
            }
            @keyframes AnimationName {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);
    };

    // Add styles
    addStyles();

    // Existing content for Google gatot
    const googlegatotContent = `
        <div class="wrapper-gatot4d">
            <div class="item-service">
                <h1>Deposit</h1>
                <div class="status-gatotmaxwin">
                    <p>Rata-Rata</p>
                    <p><span class="count-gatot">1</span> Menit</p>
                </div>
            </div>
            <div class="item-service">
                <h1>Withdraw</h1>
                <div class="status-gatotmaxwin">
                    <p>Rata-Rata</p>
                    <p><span class="count-gatot">3</span> Menit</p>
                </div>
            </div>
            <div class="item-service">
                <h1>Member Online</h1>
                <div class="status-gatotmaxwin-mem">
                    <p></p>
                    <p><span class="count-gatot">${memberUser}</span> Member</p>
                </div>
            </div>
            <div class="item-service">
                <p style="text-align: center;">Ketik Di Google:</p>
                <div class="google-wrapper">
                    <img src="https://img.hotimg.com/Google.png" />
                    <p>Gatot4D</p>
                </div>
            </div>
        </div>
    `;

    // Insert content before ".provider-group"
    document.querySelector(".provider-group").insertAdjacentHTML('beforebegin', googlegatotContent);

    // Add new custom section
    document.querySelector(".provider-group").innerHTML = `
        <div class="custom-section">
            <p>LINK ALTERNATIF GATOT4D</p>
        </div>
        <div class="custom-button-container">
            <a href="https://heylink.me/Gatot4D/" class="custom-button"><b>GATOT4D</b></a>
        </div>
    `;
});
