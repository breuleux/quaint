
rm -rf package.json *.html assets lib plugins style
cp -r ~/site/quaint-doc/output/quaint/* .
sed 's/output\/quaint\/lib/lib/g;s/content\/lib/lib/g' ~/site/quaint-doc/package.json > package.json

jspm bundle edit lib/edit.bundle.js --inject
uglifyjs lib/edit.bundle.js --mangle > _temp
mv _temp lib/edit.bundle.js
rm lib/edit.bundle.js.map
