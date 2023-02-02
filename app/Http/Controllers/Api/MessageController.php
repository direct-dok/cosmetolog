<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MessageController extends Controller
{

    public function send_message(Request $request)
    {
        $tg_user = '1802906094'; // id пользователя, для отправки сообщения
        $bot_token = '5716403853:AAErVlC0yg1s2J-AN3qpz9WacXeBdElb0LQ'; // токен бота

        $name = $request->name;
        $message = $request->message;
        $phone = $request->phone;

        $text = "Сообщение от $request->name
                \nСообщение: $request->message
                \nТелефон: $request->phone
        ";

        $params = array(
            'chat_id' => $tg_user, // id получателя
            'text' => $text, // текст сообщения
            'parse_mode' => 'HTML', // режим отображения сообщения HTML (не все HTML теги работают)
        );

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'.$bot_token.'/sendMessage'); // адрес вызова api функции телеграм
        curl_setopt($curl, CURLOPT_POST, true); // отправка методом POST
        curl_setopt($curl, CURLOPT_TIMEOUT, 10); // время выполнения запроса
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION , true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $params); // параметры запроса
        $result = curl_exec($curl);
        curl_close($curl);

        return $result;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'send_message';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return 'send message';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
