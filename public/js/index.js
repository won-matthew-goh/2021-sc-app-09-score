/* 
$().next()      // 바로다음           nextSibling
$().prev()      // 바로 전           previousSibling
$().parent()    // 주어's 부모        parentNode
$().parents()   // 주어's 조상들      parentNode
$().siblings()  // 주어's 형제/자매
$().children()  // 주어's 자식        childNodes
$().find()      // 주어's 자손
*/

/*************** global init **************/
var auth = firebase.auth();
var googleAuth = new firebase.auth.GoogleAuthProvider();
var firebaseDatabase = firebase.database();
var firebaseStorage = firebase.storage();
var db = firebaseDatabase.ref('root/board');
var storage = firebaseStorage.ref('root/board');
var user = null;

/************** element init **************/
var btSave = document.querySelector('.write-wrapper .bt-save');				// 글작성 버튼
var btLogin = document.querySelector('.header-wrapper .bt-login');		// 로긴 버튼
var btLogout = document.querySelector('.header-wrapper .bt-logout');	// 로그아웃 버튼
var btWrite = document.querySelector('.list-wrapper .bt-write');			// 글작성 모달창 오픈버튼
var writeWrapper = document.querySelector('.write-wrapper');					// 글작성 모달창
var writeForm = document.writeForm;																		// 글작성 form



/************** user function *************/


/************** event callback ************/
function onAuthChanged(r) { // login, logout 상태가 변하면
	user = r;
	if(user) {	// 로그인 되면 UI가 할 일
		btLogin.style.display = 'none';
		btLogout.style.display = 'block';
	}
	else {	// 로그아웃 되면 UI가 할 일
		btLogin.style.display = 'block';
		btLogout.style.display = 'none';
	}
}

function onLogin() {	// btLogin이 클릭되면
	auth.signInWithPopup(googleAuth);
}

function onLogout() {	// btLogout이 클릭되면
	auth.signOut();
}

function onWrite() { // 모달창이 오픈되면
	$(writeWrapper).stop().fadeIn(300);
	writeForm.title.focus();
}

function onWriteSubmit(e) { // btSave클릭시(글 저장시), validation 검증
	e.preventDefault();
	var title = writeForm.title.value.trim();
	var writer = writeForm.writer.value.trim();
	var upfile = writeForm.upfile.files;
	var content = writeForm.content.value.trim();
	if(title === '') {

	}
	if(writer === '') {
		
	}
}

function onRequiredValid(e) { // title, writer에서 blur/keyup되면
  var el = e.target;
  var next = $(e.target).next()[0];
  if(el.value.trim() === '') {
    el.classList.add('active');
    next.style.display = 'block';
    return false;
  }
  else {
    el.classList.remove('active');
    next.style.display = 'none';
    return true;
  }
}

function onUpfileValid(e) { // upfile에서 blur/keyup되면

}


/*************** event init ***************/
auth.onAuthStateChanged(onAuthChanged);
btLogin.addEventListener('click', onLogin);
btLogout.addEventListener('click', onLogout);
btWrite.addEventListener('click', onWrite);
writeForm.addEventListener('submit', onWriteSubmit);
writeForm.title.addEventListener('blur', onRequiredValid);
writeForm.title.addEventListener('keyup', onRequiredValid);
writeForm.writer.addEventListener('blur', onRequiredValid);
writeForm.writer.addEventListener('keyup', onRequiredValid);
writeForm.upfile.addEventListener('blur', onUpfileValid);




/*************** start init ***************/

