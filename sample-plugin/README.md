# [sample-plugin](https://github.com/joshuaebowling/s-plugin.git)
## Instruction for setting up
1. clone this repo
2. `git remote add sample-base https://github.com/joshuaebowling/sample-base.git`
3. This has to be done for all files you want present but untracked, working on a shell command or somesuch to streamline this `git rm --cached index.html js/app.js`
4. `git commit -m "excluding remote files"`
5. `git push origin master`
6. You should see a `README.md`, `gitignore.txt` (useless artifact)
7. You'll also see I added `js/contact.js` which will, in turn be added to `contact.html` in shim-sample-base
