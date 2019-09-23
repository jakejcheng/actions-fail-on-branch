const core = require('@actions/core');
const github = require('@actions/github');

try {
  const targeting_branches = core.getInput('targeting-branches').split(',');
  const targeting_type = core.getInput('targeting-type');
  if(targeting_type != "pull_request" && targeting_type != "push"){
    console.log(`syntax error - targeting_type`)
    throw new Error("targeting-type must be pull_request or push")
  }
  var matched = false;
  targeting_branches.forEach(function(elt){
    if(github.context.payload[targeting_type].head.ref == elt){
      matched = true
    }
  });

  if(!matched){
    console.log(`check failed`)
    throw new Error("targeting branch did not match any provided")
  }

  console.log(`check passed`)
} catch (error) {
  core.setFailed(error.message);
}
