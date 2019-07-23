workflow "Publish packages and starters" {
  on = "push"
  resolves = ["publish:ci"]
}

action "master" {
  uses = "actions/bin/filter@0dbb077f64d0ec1068a644d25c71b1db66148a24"
  args = "branch master"
}

action "johno/actions-push-subdirectories@master" {
  uses = "johno/actions-push-subdirectories@master"
  needs = ["master"]
  args = "examples johno"
  secrets = ["API_TOKEN_GITHUB"]
}

action "johno/actions-yarn@master" {
  uses = "johno/actions-yarn@master"
  needs = ["johno/actions-push-subdirectories@master"]
  args = "install"
}

action "publish:ci" {
  uses = "johno/actions-yarn@master"
  needs = ["johno/actions-yarn@master"]
  args = "publish:ci"
  secrets = ["NPM_AUTH_TOKEN"]
}

workflow "Test" {
  on = "push"
  resolves = ["test"]
}

action "test:install" {
  uses = "johno/actions-yarn@master"
  args = "install"
}

action "test" {
  uses = "johno/actions-yarn@master"
  needs = ["test:install"]
  args = "test"
}
