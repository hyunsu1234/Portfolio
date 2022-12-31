//계정(로그인)
function getValueInText() {
    let inputData = document.getElementById("mail").value;
    let id = "hyunsu"

    if (id === inputData) {
        alert(`${inputData}님 반갑습니다`)
    } else {
        alert("이메일이 일치하지 않아요");
        location.reload();//브라우저 새로고침
    }
}
