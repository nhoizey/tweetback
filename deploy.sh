#!/bin/sh
/opt/homebrew/bin/rsync -arvu --delete-delay --iconv=UTF8-MAC,UTF-8 ./_site/ nhoizey@ssh-nhoizey.alwaysdata.net:/home/nhoizey/www/nicolas-hoizey.com/twitter/
