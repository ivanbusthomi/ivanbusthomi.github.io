# git get good guide

### Initial
* forked a repo in browser
* clone forked repo to local storage
`git clone url_of_forked_repo.git`
* check using 
`git remote -v`
* add upstream --> original repo
`git remote add upstream url_of_original_repo`
* check again using 
`git remote -v`
  
### Syncing
* fetch changes in upstream to local repo
`git fetch upstream`
* move to master
`git checkout master`
* merge changes from upstream to master on local computer
`git merge upstream/master`
* check status
`git status`
* push changes to origin in online storage
`git push`

### Tracking a branch from upstream
* create a branch on forked repo
`git checkout -b <branch_name_in_local> upstream/<branch_name_in_upstream>`
* make sure original repo has been added as upstream. pull from the branch
`git pull upstream <original_repo_branch>`
* push local branch to forked repo remote name. check using git remote -v
`git push --set-upstream origin <local_branch_name>`
  
### Pulling from specific pull request
* paste this code with `pull_id` is the pull number and `branch_name` is the name of the new branch.
`git fetch upstream pull/<pull_id>/head:<branch_name>`
  
### If there is accidental pull
* check log and find the sha-1 (7-digit alphanumeric code) using : 
`git reflog`
* go to intended state using
`git reset --hard <sha-1_code>`


## Seeing commit log beautifully
`git log --pretty=oneline`