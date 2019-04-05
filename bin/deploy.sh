npm run build

export BUCKET_URI_1='www.hypermix.com'
export BUCKET_URI_2='hypermix.com'
export GCLOUD_PROJECT='pixt-app-1'

echo ${BUCKET_URI_1}
echo ${BUCKET_URI_2}

# Copy Files
${HOME}/google-cloud-sdk/bin/gsutil -m cp -r /Users/Michael/Sites/hypermix/build/* gs://${BUCKET_URI_1}/
${HOME}/google-cloud-sdk/bin/gsutil -m cp -r /Users/Michael/Sites/hypermix/build/* gs://${BUCKET_URI_2}/

# Edit the website configuration
${HOME}/google-cloud-sdk/bin/gsutil web set -m index.html -e index.html gs://${BUCKET_URI_1}
${HOME}/google-cloud-sdk/bin/gsutil web set -m index.html -e index.html gs://${BUCKET_URI_2}
