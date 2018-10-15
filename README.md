# mini-css-extract-plugin-contenthash

## **Update:**

This has been fixed in [#284](https://github.com/webpack-contrib/mini-css-extract-plugin/pull/284) and it's available in [v.0.4.4](https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v0.4.4) 🎉

**NOTE:** This same issue happens with javascript in webpack as of this writing (v.4.20.2), but can be solved by adding both `NamedChunksPlugin` and `HashedModuleIdsPlugin`.

Happy Building!

---

Displays the issue with contenthash in webpack plugin

- Run `yarn build` or `npm run build`
- Comment out `file2` from entry
- Run `build` again
- Notice how `file3.css` is created with a new hash when the contents have not changed
