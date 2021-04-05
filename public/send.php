<?php

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
// header('Content-Type: application/json');

$ip = get_client_ip();
$data = json_decode(file_get_contents("php://input"), true);


$url = 'https://theromb.xyz:1337/lead/09ed64ec1b18fb9460832e668b38decb9ae67307';

$data['ad_info']['ip'] = '::ffff:' . $ip;
// $data['ad_info']['ip'] =  + $data['ad_info']['ip'];

// $content = json_encode($data);

if(strlen($data['name']) > 1){
    // print_r(strlen($data['name']));
    // print_r($data['name']);
$ch = curl_init($url);

$jsonDataEncoded = json_encode($data);
//  $jsonDataEncoded['ad_info']['ip'] = 'sdsds';
// print_r(json_encode($jsonDataEncoded));
//Tell cURL that we want to send a POST request.
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_POST, 1);

//Attach our encoded JSON string to the POST fields.
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);

//Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//  curl_exec($ch);
 if(curl_exec($ch) === false)
 {
     echo 'Curl error: ' . curl_error($ch);
 }
 else
 {
     echo 'ok';
 }
curl_close($ch);
}else{
    print_r(strlen($data['name']));
}






function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';

    return $ipaddress;
}
