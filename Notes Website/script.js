console.log("hello everyone")
shownote()

// Adding click funtion so that we can add notes

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    
    let addTxt = document.getElementById("addTxt");
    let addTit = document.getElementById("addTitle");
    let addTitle= document.getElementById("addtitl");
     let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesarr = [];
    }
    else {
        notesarr = JSON.parse(notes);
    }
    // here created a object stored in notesarr in which value of title and adddtext we have passed now and pusshed this ibject in notesarr

    let myobj= {
        title:addTit.value,
        titl:addTitle.value,
        adddtxt:addTxt.value
    }
    notesarr.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesarr));
    addTxt.value = "";
    addTit.value="";
    addTitle.value="";
    console.log(notesarr)
    shownote();

})

// this is to show fucnt which will run after we click on creating note

function shownote(element) {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesarr = [];
    }
    else {
        notesarr = JSON.parse(notes);
    }


    let html = "";


    notesarr.forEach(function (element, index) {
        html +=
            `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                <h4 class="card-title">Title</h4>
                    <h6 class="card-title" id="h55">${element.title}</h6>
                    <h4 class="card-title " >Author</h4>
                    <h6 class="card-title" id="h54">${element.titl}</h6>
                    <h4 class="card-title">Notes</h4>
                    <p class="card-text">${element.adddtxt}</p>
                    <button  id="${index}" onclick="delnote(this.id)" class="btn btn-primary" >Delete Note</button>
                </div>
            </div>
        `
    });
    let noteelem = document.getElementById("notes")
    if (notesarr.length != 0) {
        noteelem.innerHTML = html;
    }
    else {
        // console.log("else is not workin")
        noteelem.innerHTML = "There is no Notes Yet , Use above section to create."
    }
}


function delnote(index) {
    let notes = localStorage.getItem("notes");
    console.log("im del this note", index)

    if (notes == null) {
        notesarr = [];
    }
    else {
        notesarr = JSON.parse(notes);
    }

    notesarr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesarr));

    shownote();
    console.log(`u have clicked on this index ${index} and u r del this note`)

}

let searchb = document.getElementById("searchbox");
searchb.addEventListener("input", function () {
    
    let inputval = searchb.value.toString();
    // console.log("input event is firing",inputval)

    let cards = document.getElementsByClassName("noteCard");
    Array.from(cards).forEach(function (element) {

        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        let authorTxt = element.querySelector("#h54").innerText;
        let titleTxt = element.querySelector("#h55").innerText;

        if (cardtxt.includes(inputval) || authorTxt.includes(inputval) || titleTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {

            element.style.display = "none";
        }


    });
    
});





