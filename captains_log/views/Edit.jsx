const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class Edit extends React.Component {
    render() {
      
        let { log } = this.props

        return (
            <DefaultLayout title='edit a log' group='logs'>
                <h1>Edit Page</h1>
                <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                    
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' name='title' defaultValue={ log.title }></input>

                    <label htmlFor='entry'>Entry:</label>
                    <input type='textarea' id='entry' name='entry' defaultValue={ log.entry }></input>

                    <label htmlFor='shipIsBroken'>Ship is broken:</label>
                    <input type='checkbox' id='shipIsBroken' name='shipIsBroken' defaultChecked={ log.shipIsBroken }></input>

                    <input type='submit' value='Edit log entry'></input>
                </form>
            </DefaultLayout>
        ) 
    }
}

module.exports = Edit