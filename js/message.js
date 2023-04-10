const succesMessage = document.querySelector('.success__button');
const errorMessage = document.querySelector('.error__button');

/*
Если отправка данных прошла успешно,
показывается соответствующее сообщение.
Разметку сообщения, которая находится в блоке #success внутри шаблона template,
нужно разместить перед закрывающим тегом </body>.
Сообщение должно исчезать после нажатия на кнопку .success__button,
по нажатию на клавишу Esc
и по клику на произвольную область экрана за пределами блока с сообщением.

3.5. Если при отправке данных произошла ошибка запроса,
 нужно показать соответствующее сообщение.
 Разметку сообщения, которая находится в блоке #error внутри шаблона template,
  нужно разместить перед закрывающим тегом </body>.
   Сообщение должно исчезать после нажатия на кнопку .error__button,
   по нажатию на клавишу Esc
   и по клику на произвольную область экрана за пределами блока с сообщением.
   В таком случае вся введённая пользователем информация сохраняется,
   чтобы у него была возможность отправить форму повторно. */
