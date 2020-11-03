#!/bin/sh
dir=$1
sudo apt install rename
cd $dir
find . -mindepth 2 -type f -print -exec mv {} . \; 
rename -v 's/ /-/g; y/A-Z/a-z/' *
find . -type d -empty -delete
