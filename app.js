let URL = "https://cat-fact.herokuapp.com/facts";
let para = document.querySelector("#facts_api")
let btn = document.querySelector("#btn")

let catfacts = async () => {

    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data)
    para.innerText = data[1].text;
}
btn.addEventListener("click", catfacts)