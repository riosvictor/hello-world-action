const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('who-to-greet');

  console.log(`Hello, ${nameToGreet}!`);
  core.setOutput('greeting-message', `Hello, ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}
