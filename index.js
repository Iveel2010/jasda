const createtext = document.getElementsByClassName("createtext")[0];
const createtag = document.getElementsByClassName("createtag")[0];
const container = document.getElementsByClassName("container")[0];
const text = document.getElementsByClassName("text")[0];
let ok = 0;
function createtagfunction() {
  if (createtext.value == "") {
  } else {
    const tag = document.createElement("div");
    tag.className = "tag";
    container.appendChild(tag);
    const tag2 = document.createElement("div");
    tag2.innerHTML = createtext.value;
    tag2.className = "tag2";
    tag.appendChild(tag2);
    const deletebtn = document.createElement("button");
    deletebtn.className = "deletebtn";
    deletebtn.innerHTML = "delete";
    let lol = ok++;
    tag.id = lol;
    tag.appendChild(deletebtn);
    function createtagfunction() {
      let boo = document.getElementById(lol);
      boo.remove();
    }
    deletebtn.addEventListener("click", function () {
      createtagfunction();
    });
  }
}

createtag.addEventListener("click", function () {
  createtagfunction();
});
