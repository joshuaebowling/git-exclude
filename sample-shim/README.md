# [shim-sample-base] (https://github.com/joshuaebowling/shim-sample-base.git)
## The shim between the base and specific implementations w/ a plugin installed

### Instructions
1. Create a new folder, then new repo `git init ./`
2. `git remote add sample-base https://github.com/joshuaebowling/sample-base.git`
3. `git pull sample-base master`
> note `master` is the branch
4. make some trivial changes to `index.html` and `js/app.js`
5. `git add .`
6. `git commit -m "trivial changes"`
7. `git push origin master`
> if you check the repo you'll see the files from `sample-base` included
8. `git remote add contact-plugin https://github.com/joshuaebowling/s-plugin.git`
9. `git pull contact-plugin master`
10. resolve conflict in README.md
11. edit `contact.html` to include `js/contact.js`
12. voila plugin installed