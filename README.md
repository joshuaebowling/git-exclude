#Git Exclude
###Use 3 flags
1. `--folder` = the folder you want to recursively read, default is './'
2. `--output` = the filename to which you want the contents written, default is '../exclude.txt'
3. `--template` = the string template if you don't want `git rm --cached %s` to be your template, default is <-

###Run 
`node ./app` (append flags as needed)
### automatically excludes `.git` contents to prevent errors