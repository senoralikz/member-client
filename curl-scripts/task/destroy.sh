#!/bin/bash

API="https://protected-brushlands-52398.herokuapp.com"
URL_PATH="/tasks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
