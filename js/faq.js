navs = document.querySelectorAll("button[data-lang='sp']")

for (let index = 0; index < navs.length; index++) {
    const element = navs[index];
    element.addEventListener("click", () => {
        console.log("ready !!!", index)
    })
    
}