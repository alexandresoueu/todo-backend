const ChangeDescription = event => (
  {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
)

export default ChangeDescription