# The Command Line

[back to lesson plan](lesson.md)

## Introduction to the shell

- a shell is a text-based user interface that gives you access to the operating system. We call that interface "the command line".
- We're using a Unix shell called Z-shell/Zsh, which is built on top of the Bash shell
  - The Mac OS default shell, as of Catalina (10.15), is zsh
- The terminal is just a program that gives us the command line. Demo opening it and have students follow along.
- The prompt is where you type commands
  - `$ command [-options] [arguments]`
  - with zsh, you can type a command and a dash, then tab to see a list of available options
  - e.g. `cal`
- To get back to the prompt if a process is running, use the keystroke `Ctrl-C`. Sometimes you'll see it written as `^C`
  - show `cat` with no arguments
- config with `~/.zshrc`

## File structure

- You may have used the Finder on Mac to see your files and folders
- The file structure is a hierarchical directory structure, organized in a tree-like pattern of directories (folders) that contain files and/or other directories.
- The first/parent directory that contains all the others, at the top or base of the tree, is called the root directory (`/`)
- On the command line, we have the concept of a "working directory" to represent the directory that is currently "active", (this is similar to double-clicking on a directory in the Finder to see its contents).
- Imagine that you are standing in the file system and are "in" that current directory. You can navigate around the file system by going up or down the levels of the hierarchy.
- The command line will tell you what your current working directory is, and will show you the pathways to get to other directories and the files that they contain.

## Paths and some related concepts

- relative (to your working directory)
- absolute (relative to root, starts with root slash)
- single and double dot to notate current and parent directories
- shortcuts using `~`, `-`, and `cd` without arguments
- case-sensitivity
- no whitespace (can demo `\` to escape characters)
- hidden files that begin with a dot
- home directory on Mac `/Users/<username>`
- `$PATH` environment variable
  - `echo $PATH`
  - pathnames, delimited by colons, that are used to search for executable files. An executable must be able to be found in your \$PATH in order to be run.

## Commands

### About commands

- they can be programs (executable files, eg in `/usr/bin`)
- utilities built in to the shell you're using (eg `cd`; see `man builtin`)
- can also be aliases and shell functions
- many commands have either a `man` page or you can try `--help` option

### To demo

- `pwd`, print working directory
- `cd`, change directory
- `ls` (with flags -a, -l), list files and directories
  - optional: with long view,explain read-write-execute permissions for file owner, group, and all
- up/down arrows
  - zsh lets you type in the command (or part of it) that you're looking for, and will narrow down the history to match
- `cp`, copy files and directories (create or overwrite)
- `mv`, move or rename files and directories
- `rm`, delete files, `-r` for directories (be careful!)
- `mkdir`, create directory
- [optional] wildcard match `*`
- [optional] `>` redirect
  - There are "standard" input and output channels (streams) that are available for a running process. When a command line process displays its results, that data is sent to standard output. We can redirect that output to a file: `ls > file_list.txt`
  - (you can also redirect standard input with `<`)
- [optional] `|` pipe
  - this takes the standard output of the first command and gives it to the second command as standard input
  - `ls -al | less`

## Utilities and other things to demo

- `man`, documentation for programs intended as a reference for usage, options, and arguments
- `cal` with arguments
- `cat`, read files and write them to standard output
- `less`, a page-able text reader (used by things like man pages)
- `sudo`, assume super-user access rights
- [optional] `ps`, list running processes (compare Activity Monitor)
- [optiona] `kill`, stop a process
  - if a process has hung and you need to stop it:
    1. use `ps` ( or `ps aux | grep <whatever>`) to get the PID of that process
    2. `kill <PID>`
    3. if that doesn't work, `kill -9 <PID>`
    4. NB: with zsh, you can type `kill` and then the name, or part of the name, of the process or program you want to stop. Typing `kill postg` will bring up a list of the processes with names that match, with their PIDs.

### Instructor Resources

- [http://linuxcommand.org/index.php](http://linuxcommand.org/index.php)
- [http://www.rayninfo.co.uk/tips/zshtips.html](http://www.rayninfo.co.uk/tips/zshtips.html)
- [https://explainshell.com/](https://explainshell.com/)
- Article from A List Apart, ["The \$PATH to Enlightenment"](https://alistapart.com/article/the-path-to-enlightenment/)
