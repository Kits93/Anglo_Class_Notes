<?php
require './base64url.php';

function create_jwt($id_user, $username, $password, $role)
{
  $secret_key = '#L1d3rEmM1m';
  $header = base64url_encode('{"alg": "HS256", "type": "JWT"}');
  $exp = strtotime('+15 days');
  $payload = base64url_encode('{"id_user": "' . $id_user . '", "username": "' . $username . '", "password": "' . $password . '", "role": "' . $role . '", "exp": "' . $exp . '"}');
  $signature = hash_hmac('sha256', $header . '.' . $payload, $secret_key);

  return $header . '.' . $payload . '.' . $signature;
}
?>