<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $data = json_decode(file_get_contents("php://input"));

  $to = "rikobudisaputra14@gmail.com";
  $subject = "Requested Daily Word";
  $message = "Requested word: " . $data->word . "\n\nRequested by: " . $data->email;

  $headers = "From: " . $data->email;

  $success = mail($to, $subject, $message, $headers);

  $response = ["success" => $success];
  echo json_encode($response);
}
?>
