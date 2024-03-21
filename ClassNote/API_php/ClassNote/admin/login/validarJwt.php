<?php
require './base64url.php';

function validar_jwt ($token) {
  $parts = explode('.', $token);
  
  // se o token conter algo diferente de três pedaços já esta errado
  if (count($parts) === 3) {
    $secret_key = '#L1d3rEmM1m';
    $header = $parts[0];
    $payload = $parts[1];
    $signature = hash_hmac('sha256', $header.'.'.$payload, $secret_key); // você gera novamente a parte final
    if ($parts[2] === $signature) { 
      // se bater a que você acabou de gerar com a do token enviado, certo!
      $infos_token = json_decode(base64_decode($payload));
      // extraindo as informações já que o token é válido
      return time() < (int)$infos_token->exp;
      // no token tem o exp que é o tempo de expiração do token, ent se ele for menor que o tempo atual, o token é inválido
    }
    return false;
  }
  return false;
}
?>