<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');

const TO_EMAIL = 'bhupimahey@gmail.com';
const FROM_EMAIL = 'noreply@bhupimahey.in';

function out(bool $ok, string $error = ''): void { echo json_encode(['ok' => $ok, 'error' => $error]); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { http_response_code(405); out(false, 'Method not allowed.'); }

// Same-origin check (basic CSRF protection)
$origin = parse_url($_SERVER['HTTP_ORIGIN'] ?? '', PHP_URL_HOST);
if ($origin && $origin !== ($_SERVER['HTTP_HOST'] ?? '')) { http_response_code(403); out(false, 'Forbidden.'); }

// Honeypot: bots fill this hidden field
if (!empty($_POST['website'])) out(true);

function field(string $k, int $max): string {
    return trim(preg_replace('/[\r\n]+/', ' ', mb_substr((string)($_POST[$k] ?? ''), 0, $max)));
}
$name = field('name', 100); $company = field('company', 100); $email = field('email', 150);
$country = field('country', 80); $type = field('type', 60); $budget = field('budget', 60);
$message = trim(mb_substr((string)($_POST['message'] ?? ''), 0, 4000));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422); out(false, 'Please complete the required fields.');
}

$body = "Name: $name\nCompany: $company\nEmail: $email\nCountry: $country\nType: $type\nBudget: $budget\n\n$message\n";
$subject = '=?UTF-8?B?' . base64_encode("New enquiry: $type - $name") . '?=';
$sent = mail(TO_EMAIL, $subject, $body, [
    'From' => FROM_EMAIL, 'Reply-To' => $email, 'Content-Type' => 'text/plain; charset=UTF-8',
]);

if (!$sent) { error_log('contact.php: mail() failed'); http_response_code(500); out(false, 'Could not send.'); }
out(true);
