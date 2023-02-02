<div class="csm-call-back" data-bs-toggle="modal" data-bs-target="#modal-call-back">
    <div class="csm-call-back__circle">
        <i class="uil uil-phone-volume fs-26 text-white"></i>
    </div>
</div>

<div class="modal fade" id="modal-call-back" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content text-center">
            <div class="modal-body">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <p class="lead mb-2 text-start">Есть вопросы? Нужна консультация по процедурам?</p>
                <h2 class="mb-3 text-start">Закажите обратный звонок</h2>
                <form class="text-start mb-3 csm-call-back-form needs-validation" novalidate>
                    <div class="alert alert-success alert-icon success-message-alert d-none" role="alert">
                        <i class="uil uil-check-circle"></i>Мы получили ваше сообщение. Скоро мы вам перезвоним
                    </div>
                    <div class="form-floating mb-4">
                        <input type="text" name="name" class="form-control" placeholder="Ваше имя" id="loginName" required>
                        <label for="loginName">Ваше имя</label>
                        <div class="valid-feedback">Отлично!</div>
                        <div class="invalid-feedback">Не оставляйте пустым поле имя</div>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="text" name="phone" class="form-control" placeholder="Номер телефона" id="loginEmail" required>
                        <label for="loginEmail">Номер телефона</label>
                        <div class="valid-feedback">Верно!</div>
                        <div class="invalid-feedback">Укажите телефон для связи</div>
                    </div>
                    <div class="form-floating mb-4">
                        <textarea id="textareaExample" name="message" class="form-control" placeholder="Напишите короткое сообщение" style="height: 150px" required></textarea>
                        <label for="textareaExample">Напишите короткое сообщение</label>
                        <div class="valid-feedback">То что надо!</div>
                        <div class="invalid-feedback">Введите короткое сообщение</div>
                    </div>
                    <p class="fs-13">Нажимая кнопку <strong>"Отправить"</strong>, вы соглашаетесь с <a href="#">политикой обработки персональных данных</a></p>
                    <button class="btn btn-primary rounded-pill btn-login w-100 mb-2">Отправить</button>
                </form>
                <!-- /form -->
            </div>
            <!--/.modal-content -->
        </div>
        <!--/.modal-body -->
    </div>
    <!--/.modal-dialog -->
</div>
<!--/.modal -->
