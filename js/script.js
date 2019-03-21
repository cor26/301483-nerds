
var link = document.querySelector(".map-button");
var popap = document.querySelector(".popap");
var close = document.querySelector(".modal-close");
var form = popap.querySelector("form");
var login = popap.querySelector("[name=name]");
var mail = popap.querySelector("[name=e-mail]");
var text = popap.querySelector("[name=text]");
var storage = localStorage.getItem("login");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {      /*открытие попапа путем добавления класса, фокусировка на логин, если логин не заполнене, если логин заполнен, фокусировка на втором поле*/
  evt.preventDefault();
  popap.classList.add("popap-open");
  login.focus();
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {    /*Закрытие попапа удалением класса*/
  evt.preventDefault();
  popap.classList.remove("popap-open");
  popap.classList.remove("popap-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value || !text.value) {   /*Если данные отсутствуют, то высветится надпись, если все заполнено, запоминаем логин, далее добавляем класс на ошибку с анимацией*/
    evt.preventDefault();
    popap.classList.remove("popap-error");
    popap.offsetWidth = popap.offsetWidth;
    popap.classList.add("popap-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode ===27) {
    evt.preventDefault();
    if (popap.classList.contains("popap-open")) {   /*Открыт ли попап, закрытик попапа ESC*/
      popap.classList.remove("popap-open");
      popap.classList.remove("popap-error");
    }
  }
})
