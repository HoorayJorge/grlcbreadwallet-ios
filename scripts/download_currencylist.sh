#!/bin/bash
# Downlaods the latest currencies list to be embedded
filename="currencies.json"
host="grlcbreadwallet.s3.ca-central-1.amazonaws.com"
echo "Downloading ${filename} from ${host}..."
curl --show-error --output "breadwallet/Resources/${filename}" https://${host}/grlcbread-assets/currencies.json
