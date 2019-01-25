<?php
/**
 * Created by PhpStorm.
 * User: h
 * Date: 2018/10/31
 * Time: 12:27 AM
 */

$url = "https://www.recaptcha.net/recaptcha/api/siteverify";

$secret = "6LfOt3cUAAAAAMNBgUALmZb7ljBcUSgc26UlIBP_";

die();

$response = $_POST['token'];

$fields = array(
    'secret' => urlencode($secret),
    'response' => urlencode($_POST['token']),
  //  'remoteip' => ''
);

//url-ify the data for the POST
$fields_string ='';
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');

//open connection
$ch = curl_init();
//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

//execute post
$result = curl_exec($ch);

//close connection
curl_close($ch);

print_r($result);