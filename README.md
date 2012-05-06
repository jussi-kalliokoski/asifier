# asifier

After all this debate about ASI being hard to learn for language newcomers, I was wondering if code editors could be equipped with a plugin that would show where ASI would insert semicolons. This could also be helpful to people not wanting to use semicolons, as the semicolons would be visible, but you didn't have to type them (it's hard, I know). So, asifier is a small node module based on [narcissus](https://github.com/mozilla/narcissus) with a CLI tool to detect where ASI would insert the semicolons. This could later be used by code editors to implement the feature I described earlier.

Yes, the name is a pun, it's silly that the "discussion" about semicolons got that heated up, so let's just suck our pacifiers and keep doing awesome stuff.

## Usage

First, you need to install it:

```
sudo npm install asifier -g
```

Then you can use it from the command line:

```
asify myjsfile.js
```

This will return a JSON array of the line numbers where semicolons would be automatically inserted.

You can use the ```--insert``` flag to see what the file would look like after ASI.

## License and Disclaimer

The original parts of the project are licensed under MIT license. For the licensing of narcissus, see the LICENSE document in the ./lib/narcs/ directory.

And please, don't use it for trolling people's projects with automatic pull requests. A good idea is to use it on a permissive license open source library to adjust it to your project's style automatically after updates to the original project.
