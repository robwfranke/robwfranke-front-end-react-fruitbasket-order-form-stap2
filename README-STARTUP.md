voeg /.idea toe aan .gitignore

git remote remove origin
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/robwfranke/robwfranke-front-end-react-fruitbasket-order-form-stap2.git
git push -u origin master
git checkout -b uitwerkingen-rob-franke  oid

gebruik dan later:
git add .
git status
git push -u origin uitwerkingen-rob-franke


checken welke remote dir:

checken welke branch je nu werkt:
git branch --show-current

git remote -v






react-hook-form

// npm install react-hook-form --save    --save zorgt ervoor dat het toegevoegd wordt

Validation:
Opties:
required
min
max
minLength
maxLength
pattern
validate

bijv: <input name = "firstname" ref= {register({required: true, maxlength:20})} />""