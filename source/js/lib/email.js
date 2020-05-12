'use strict';
(function () {

  var form = document.querySelector('.header__form form');
  var input = form.querySelector('.header__form_email input');

  var validateEmailInput = function (emailValue) {
    var reg = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

    if (!emailValue.length) {
      return 'Обязательное поле "email" не заполнено';
    }

    if (!reg.test(emailValue)) {
      return 'Введите корректный e-mail';
    }

    return false;
  };

  if (form) {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var value = evt.target.querySelector('.header__form_email input').value;
      if (validateEmailInput(value)) {
        if (!evt.target.querySelector('span')) {
          var span = document.createElement('span');
          span.textContent = validateEmailInput(value);
          evt.target.querySelector('.header__form_email').appendChild(span);
        }
      } else {
        localStorage.setItem('email', value);
        input.value = '';
      }
    });
  }

  if (input) {
    input.removeAttribute('required');
    input.setAttribute('type', 'text');

    input.addEventListener('input', function (evt) {
      if (evt.target.parentNode.querySelector('span')) {
        evt.target.parentNode.querySelector('span').remove();
      }
    });
  }

})();
