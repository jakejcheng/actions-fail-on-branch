# actions-verify-event-branch

A Github Action that will fail the workflow on push/pull_request when the event branch is not the one specified.

## Inputs

### `targeting-branch`

**Required** The names of branches to allow action on or fail otherwise. Default `"test"`.

### `targeting-type`

**Required** The type of event to trigger the action on. Must be either `"push"` or `"pull_request"`. Default `"pull_request"`.

## Example usage

uses: actions/actions-verify-event-branch@`commit hash/release`  
with:  
    targeting-branch: develop,test  
    targeting-type: pull_request
