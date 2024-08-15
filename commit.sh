#!/bin/bash">bash

read -p "enter the . or files to commit: " files
git add .
read -P "enter your comment here: " (comment)
echo "comment"
git commit -m (comment)
read -p "quieres cambiar el origen del comment: " originfiles
   if (originfiles) {
      git remote add 
   }
read -p "Quieres pushear: " pushear
if (pushear == si){
  git push
}
clear
echo "Finished"
     
   