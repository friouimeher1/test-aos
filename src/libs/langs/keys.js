export default [
  'message',
  'job',
  'loginTitle',
  'loginUserName',
  'loginPassword',
  'loginBtn',
  'loginInvalid',
  'email',
  'projectName',
  'name',
  'search',
  'signout',
  'notecomplete',
  'noteNotcomplete',
  'addNote',
  'editNote',
  'deleteNote'
].reduce((r, i) => {
  r[i] = i
  return r
}, {})
