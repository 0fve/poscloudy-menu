echo "Switching to master"
git checkout master


echo "building product..."
npm run build


echo "Deploying to server..."
\cp -r dist/* /var/www/menu.p-ways.com

echo "Done!"
