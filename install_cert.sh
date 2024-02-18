#!/usr/bin/env bash
mkcert create-ca --organization Davvue --country-code DE
mkcert create-cert --cert cert.pem --key key.pem
mkdir node_modules/webpack-dev-server/ssl/
cat cert.pem key.pem > node_modules/webpack-dev-server/ssl/server.pem
rm cert.pem key.pem ca.key ca.crt
