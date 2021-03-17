npm run build
cp -r build/* ./
rm -r build
git add .
git commit -m "Deploy script"
git push -f
