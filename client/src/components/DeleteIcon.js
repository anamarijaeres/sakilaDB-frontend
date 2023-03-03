import React, { Component } from 'react'
import { Button, Confirm ,Icon} from 'semantic-ui-react'

class DeleteIcon extends Component {
    state = { open: false }
  
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
  
    render() {
      return (
        <div>
          <Icon name="delete" onClick={this.open} />
          <Confirm
            open={this.state.open}
            onCancel={this.close}
            onConfirm={this.close}
          />
        </div>
      )
    }
  }
  
  export default DeleteIcon