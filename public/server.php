<?php
$body = file_get_contents('php://input');
file_put_contents('../contacts/'.time().'.json', $body);