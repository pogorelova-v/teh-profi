<?php
use PHPMailer\PHPMailer\PHPMailer;   //Подключаем файлы плагина
use PHPMailer\PHPMailer\Exception;   //Подключаем файлы плагина

require '/var/www/u130317/data/www/don-dragon.ru/PHPMailer/src/Exception.php';   //Путь к файлу плагина
require '/var/www/u130317/data/www/don-dragon.ru/PHPMailer/src/PHPMailer.php';   //Путь к файлу плагина

$mail = new PHPMailer(true);  //Объявляем плагин
$mail->CharSet = 'UTF-8';    //Указываем кодировку
$mail->setLanguage('ru', 'phpmailer/language/');    //Язык для уведомлений (из папки плагина)
$mail->IsHTML(true);    //Подключает возможность HTML тегов в письме

#$mail->setFrom('Сообщение  с сайта AUTOMOTIV@mail.ru');     //От кого
$mail->setFrom('automotive52@automotive52.ru'); 
$mail->addAddress('gorelikovavn@gmail.com');    //Куда отправить
$mail->Subject = 'Новое обращение с сайта';    //Тема письма

//Тело письма

$body = '<h1>Сообщение по форме обратной связи</h1>';   //Заголовок

if(trim(!empty($_POST['name']))){   //Проверка поля на заполненость
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>'; //Выведет - Имя: 'то что человек заполнит в форме'
}
if(trim(!empty($_POST['tell']))){   //Проверка поля на заполненость
    $body.='<p><strong>Номер для связи:</strong> '.$_POST['tell'].'</p>';
    //Выведет - Номер для связи: 'то что человек заполнит в форме'
}
if(trim(!empty($_POST['message']))){    //Проверка поля на заполненость
    $body.='<p><strong>Описание проблемы:</strong> '.$_POST['message'].'</p>';
    //Выведет - Описание работ: 'то что человек заполнит в форме'
}
if(trim(!empty($_POST['brand']))){    //Проверка поля на заполненость
    $body.='<p><strong>Марка и модель авто:</strong> '.$_POST['brand'].'</p>';
    //Выведет - Описание работ: 'то что человек заполнит в форме'
}
if(trim(!empty($_POST['year']))){    //Проверка поля на заполненость
    $body.='<p><strong>Год выпуска:</strong> '.$_POST['year'].'</p>';
    //Выведет - Описание работ: 'то что человек заполнит в форме'
}

$mail->Body = $body;  // Присваиваем собраное письмо в плагин

//Отправка сообщения

if (!$mail->send()) {   //Если форма не отправлена, то
    $message = 'Ошибка, повторите отправку';
} else {    //Иначе (отправлена), то
    $message = 'Сообщение отправленно, мы свяжемся с Вами в ближайшее время!';
}

$response = ['message' => $message];    //Формируем json сообщение

 //Возвращаем сообщение обратно в скрипт
header('Content-type: application/json');  
echo json_encode($response);
?>