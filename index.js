const core = require('@actions/core');
const github = require('@actions/github');


try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github, undefined, 2)
  console.log(`The event payload: ${payload}`);
  if(github.context.payload.pull_request.head.ref != "develop"){
    console.log(`Pull request into master from branch develop only.`)
    core.setFailed(`Pull request into master from branch develop only.`)
  }
} catch (error) {
  core.setFailed(error.message);
}
