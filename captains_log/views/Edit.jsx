const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class Edit  extends React.Component {
    render() {
      
        const { log } = this.props

        return (
            <DefaultLayout title='Edit Captain"s Log' group='logs'>
                <h1>Edit Captain's log</h1>
                <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                    
                    <label htmlFor='title'>Title:&nbsp;&nbsp; </label>
                    <input type='text' id='title' name='title' defaultValue={ log.title }></input><br />

                    <label htmlFor='entry'>Entry:&nbsp;&nbsp;</label>
                    <input type='textarea' id='entry' name='entry' defaultValue={ log.entry }></input><br />

                    <label htmlFor='shipIsBroken'>Ship is broken:&nbsp;&nbsp;</label>
                    <input type='checkbox' id='shipIsBroken' name='shipIsBroken' defaultChecked={ log.shipIsBroken }></input><br /><br />

                    <input type='submit' value='Submit log entry'></input>
                </form>
            </DefaultLayout>
        ) 
    }
}

module.exports = Edit