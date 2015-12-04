#Git Exclude
###Use 2 flags
1. `--folder` = the folder you want to recursively read
2. `--output` = the filename to which you want the contents written
3. `--template` = the string template if you don't want `git rm --cached %s` to be your template

###Run 
`node ./app`
### automatically excludes `.git` contents to prevent errors