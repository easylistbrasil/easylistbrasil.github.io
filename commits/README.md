=========================

Show the latest commit activity on your repo, keeping the community updated and giving users more incentive to contribute to your project with this widget.

Inspired by https://github.com/mdo/github-buttons

https://easylistbrasil.github.io/commits/?username=easylistbrasil&repo=easylistbrasil&limit=5

Usage
-----

This widget is hosted via GitHub Pages, meaning all you need to do is include an iframe in your html and you're good to go. There are 4 params at the moment: username, repo, branch, and limit.

``` html
<iframe src="http://tylerlh.github.com/github-latest-commits-widget/?username=USERNAME&repo=REPO&limit=LIMIT"
  allowtransparency="true" frameborder="0" scrolling="no" width="502px" height="252px"></iframe>
```

### Parameters

`username`<br>
GitHub username that owns the repo (required)<br>

`repo`<br>
GitHub repository to check for activity (required)

`branch`<br>
Branch to pull commits from (default: master)

`limit`<br>
The maximum number of results to list (default: 10)
