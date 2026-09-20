
/* ==========================================
   🔐 SURPRISE WEBSITE PRIVACY LOCK
========================================== */

(function () {

    const PASSWORD = "ONLYYOU";

    const unlocked =
        sessionStorage.getItem("birthdayUnlocked");

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    /* Pages that require protection */

    const protectedPages = [
        "dashboard.html",
        "memories.html",
        "reasons.html",
        "gift.html",
        "future.html",
        "birthdayboy.html",
        "boy.html",
        "forever.html",
        "final.html"
    ];


    /* Protect only the pages listed above */

    if (
        protectedPages.includes(currentPage) &&
        unlocked !== "true"
    ) {

        const entered =
            prompt(
                "🔐 This surprise is private ❤️\n\nEnter the secret password:"
            );


        if (entered === PASSWORD) {

            sessionStorage.setItem(
                "birthdayUnlocked",
                "true"
            );

        } else {

            alert(
                "❌ Wrong password.\nThis surprise is only for you ❤️"
            );

            window.location.href = "index.html";
        }

    }

})();

/* Prevent casual right-click saving */

    document.addEventListener(
        "contextmenu",
        function (event) {
            event.preventDefault();
        }
    );


    /* Prevent dragging images */

    document.addEventListener(
        "dragstart",
        function (event) {

            if (
                event.target.tagName === "IMG" ||
                event.target.tagName === "VIDEO"
            ) {
                event.preventDefault();
            }

        }
    );
