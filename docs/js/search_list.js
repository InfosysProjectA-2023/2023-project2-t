window.onload = function onLoad() {
//test
    const search_btn = document.getElementById("search_btn");
    search_btn.addEventListener("click", function(event){
        const keyword = document.getElementById("search_keyword").value;

        let search_url = "";

        if (keyword === "a") {
            search_url = "./park.html?id=0";
        } else {
            // 他のキーワードに対する処理をここに記述
            // 例えば、他のキーワードに対する条件分岐やURLの設定
        }

        if (search_url !== "") {
            window.open(search_url);
        }
    });

};
