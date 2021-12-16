# README

# Description: 
This project is meant to be a starting point for homework/projects. 
It is Rails 6 API with React frontend.

# Setup: 

# Libraries:
-devise_token_auth
-React
-react-router(v6)
-Faker
-Rails (6.1.4)


# To Use Starter:
$ git clone git@github.com:rubyreed/starter-project-auth.git <project name>
$ cd <project name>
$ code .

# important not to drop db, must rename for each new project once it's cloned
# in database.yml: rename database names (search and replace for all)

$ rails db:create
$ bundle
$ rails db:migrate db:seed
# must remove repo and create new one for this project to separate it from starter
$ git remote remove origin
$ git remote -v (to check that git repo is not there)
# create a Github Repo and link it!

$ git remote add REPLACE_SSH_LINK_HERE(from the github repo you just made)
$ git add .
$ git commit -m 'init commmit'
$ git push origin master
$ cd client
$ yarn

# Ready to go!
