workflow "Publish packages and starters" {
  on = "push"
  resolves = ["johno/actions-push-subdirectories@master"]
}

action "master" {
  uses = "actions/bin/filter@0dbb077f64d0ec1068a644d25c71b1db66148a24"
  args = "branch master"
}

action "johno/actions-push-subdirectories@master" {
  uses = "johno/actions-push-subdirectories@master"
  needs = ["master"]
  args = "examples johno"
}
