document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.querySelector(".noBtn");
    let yesBtn = document.querySelector(".yesBtn");
    let choice = document.querySelector(".choice");
    let sizepN = document.querySelector(".pN");
    let sizepY = document.querySelector(".pY");
    let left = yesBtn.getBoundingClientRect().left;

    noBtn.addEventListener("click", function () {
        let noWidth = noBtn.offsetWidth;
        let noHeight = noBtn.offsetHeight;
        let yesWidth = yesBtn.offsetWidth;
        let yesHeight = yesBtn.offsetHeight;
        let choiceHeight = choice.offsetHeight;
        const fontsizepN = parseFloat(window.getComputedStyle(sizepN).fontSize) - 1;
        const fontsizepY = parseFloat(window.getComputedStyle(sizepY).fontSize) + 1;

        noBtn.style.width = (noWidth - 2) + "px";
        noBtn.style.height = (noHeight - 2) + "px";
        yesBtn.style.width = (yesWidth * 2) + "px";
        yesBtn.style.height = (yesHeight * 2) + "px";
        choice.style.height = (choiceHeight * 2 - yesHeight) + "px";
        sizepN.style.fontSize = fontsizepN + "px";
        sizepY.style.fontSize = fontsizepY + "px";

        yesBtn.style.left = (left + 10);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.querySelector(".yesBtn");
    const heart = document.querySelector(".heart");
    const content = document.querySelector(".content");
    const choice = document.querySelector(".choice");

    // Tạo phần tử chúc mừng
    const congratsMessage = document.createElement("div");
    congratsMessage.classList.add("content_yes");
    congratsMessage.textContent = "❤️Aww, I love you too!🥰";
    document.body.appendChild(congratsMessage);

    yesBtn.addEventListener("click", function () {
        // Ẩn câu hỏi và các nút chọn
        setTimeout(() => {
            // thu nhỏ trái tim
            heart.style.transition = "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
            heart.style.opacity = "0";

            content.style.transition = "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
            content.style.opacity = "0";

            choice.style.transition = "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
            choice.style.opacity = "0";

            // Hiển thị nội dung chúc mừng
            congratsMessage.style.display = "block";
        }, 1000); // Đợi trái tim xoay xong rồi mới ẩn
    });
});
