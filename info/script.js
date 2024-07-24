document.querySelector(".button").onclick = function () {
  if (document.querySelector("#userId").value == "") {
    alert("아이디를 입력해 주세요.");
  } else if (document.querySelector("#userPw").value == "") {
    alert("비밀번호를 입력해 주세요.");
  } else if (document.querySelector("#userPwc").value == "") {
    alert("비밀번호 확인을 입력해 주세요.");
  } else if (document.querySelector("#userName").value == "") {
    alert("이름을 입력해 주세요.");
  } else if (document.querySelector("#userPw").value.length < 6) {
    alert("비밀번호는 6글자 이상 입력해 주세요.");
  } else if (
    document.querySelector("#userPw").value !=
    document.querySelector("#userPwc").value
  ) {
    alert("비밀번호를 확인해주세요.");
  } else {
    alert("가입되었습니다.");
    var inputlist = document.querySelectorAll("input");
    for (var i = 0; inputlist.length; i++) {
      inputlist.item(i).value = "";
    }
  }
};
