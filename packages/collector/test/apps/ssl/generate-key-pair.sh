#!/usr/bin/env bash

#######################################
# (c) Copyright IBM Corp. 2021
# (c) Copyright Instana Inc. and contributors 2019
#######################################

set -eo pipefail

openssl req -nodes -x509 -newkey rsa:4096 -sha256 -keyout key -out cert -subj "/C=DE/ST=NRW/L=Dortmund/O=Instana GmbH/OU=Team Node.js/CN=localhost/emailAddress=invalid@tludlow-instana-fork.com" -days 18250

echo "Created a new certificate with the following details: "
openssl x509 -in cert -noout -text
