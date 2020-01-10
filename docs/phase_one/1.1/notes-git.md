# Introduction to Git

[back to lesson plan](lesson.md)

[google doc notes](https://docs.google.com/document/d/11IFPfm2XsAa-IjxsesM0gYZl_IkqgF77M8MXKVubqOA/edit?usp=sharing)

## Define and describe version control

- Version control is a tool that allows you to:

- Collaborate. Write code (or any kind of document) with other people.

- Track and revert changes. Mistakes happen. Wouldn't it be nice if you could see the changes that have been made and go back in time to fix something that went wrong?
- You already manage versions of your work!
  Do you have files somewhere that look like this?

Resume­September2019.docx
Resume­for­Duke­Job.docx
ResumeOLD.docx
ResumeNEW.docx
ResumeFINAL.docx
ResumeREALLYFINAL.docx

You invented your own version control!

## Git basics

We are going to be talking through a very slimmed down version of what you can do with Git today. Git is a power tool.

What do we want to do with Git?

We want to track changes in our files and put them on GitHub so we can see them online.

## How Git works

(diagram -- see google doc notes)
-- Explain working

We have two repositories we care about: one on our computer and one on GitHub.

## Setup

- `brew install git` || `git --version`
- Set name and email in gitconfig
  - `git config --global user.name "Captain Barnacles"`
  - `git config --global user.email "barnacles@octonauts.org`

### Vocab

- Repository: A collection of files and their changes
- History: An ordered list of shapshots of changes in a repository over time
- Working directory: A directory on your computer that contains a repository, will contain a directory named .git/
- Staging area: A Git-specific concept -- a way for it to set up which changes will be committed
- Commit: One set or snapshot of changes

## How to get a copy of a repo from GitHub

- `git clone <repo-url>`
- this makes a local copy of a remote repo

## Making changes

Tracked: files that Git knows about.
Untracked: files that have still not been added, so Git doesn’t know about.

(diagram -- see google doc notes)

## Committing changes

(diagram -- see google doc notes)

As changes are ready in the working directory, they must be added in the staging area.

When there is a set of changes with a single purpose in the staging area, you can create a commit with a message in the local repository.

When there are one or several commits in the local repository ready to be shared with the rest of the world, they must be pushed to the remote repository.

## Overview of that process again

- In a git respository, changes made in our editor (aka our working directory or working tree) need to be manually added to enter into the history
- The first time we add a new file, we tell Git to add the file to the repository to be tracked
- This is also called staging a file. A snapshot of our changes is now in the staging area (aka the index, aka the cache), ready to be saved.
- A commit saves the changes made to a file, not the file as a whole. The commit will have a unique ID so we can track which changes were committed when and by whom.

## See your changes

`git diff`

(diagram -- see google doc notes)

Remember this workflow:

1. add
2. commit
3. push

Write this down on a sticky note!
