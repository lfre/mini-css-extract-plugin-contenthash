# mini-css-extract-plugin-contenthash

Displays the issue with contenthash in webpack plugin

- Run `yarn build` or `npm run build`
- Comment out `file2` from entry
- Run `build` again
- Notice how `file3.css` is created with a new hash when the contents have not changed
