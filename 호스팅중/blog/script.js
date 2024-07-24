const git = document.querySelector("#img1");

git.addEventListener("mouseover", () => {
  git.src = "Image/git2.png";
});

git.addEventListener("mouseout", () => {
  git.src = "Image/git1.png";
});

git.onclick = function () {
  // window.location.href = "https://github.com/nihilism011/RitsProject";
  window.open("https://github.com/nihilism011/RitsProject", "", "");
};

document.querySelector("#info").onclick = function () {
  var wi = 500;
  var he = 650;
  var widthleft = (screen.availWidth - wi) / 2;
  var heighttop = (screen.availHeight - he) / 2;
  window.open(
    "http://emfprhs011.dothome.co.kr/info/",
    "pop",
    `width = ${wi}, height = ${he}, left =${widthleft}, top =${heighttop}`
  );
};

// document.querySelector("#changeColor").onchange = function (e) {
//   console.log(e.target.value);
//   document.querySelector("aside").style.backgroundColor = e.target.value;
// };
setInterval(() => {
  document.querySelector("aside").style.backgroundColor =
    document.querySelector("#changeColor").value;
  console.log(document.querySelector("#changeColor").value);
}, 50);

setInterval(() => {
  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var sec = time.getSeconds();
  document.querySelector("#time").innerHTML = `${hour} : ${minutes} : ${sec}`;
}, 1000);
