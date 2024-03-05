#!/bin/bash

# FTP credentials
FTP_HOST="ftp://femboy-heaven.com"
FTP_USER="u261657911"
FTP_PASS="ftp:maple-1NK"

# Directory containing files to upload
LOCAL_DIR="./public"

# Remote directory on the server
REMOTE_DIR="/public_html/schiller"

# Connect to FTP server and upload files
lftp -u "${FTP_USER},${FTP_PASS}" "${FTP_HOST}" <<EOF
mirror -R "${LOCAL_DIR}" "${REMOTE_DIR}"
exit
EOF
