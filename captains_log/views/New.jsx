const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='New Entry' group='logs'>

                <h1>Captain's New Log Entry</h1>
                <form action='/logs' method='POST'>

                    <label htmlFor='title'>Title:&nbsp;&nbsp;</label>
                    <input type='text' id='title' name='title'></input><br />

                    <label htmlFor='entry'>Entry:&nbsp;&nbsp;</label>
                    <input type='textarea' id='entry' name='entry'></input><br />

                    <label htmlFor='shipIsBroken'>Ship is broken:</label>
                    <input type='checkbox' id='shipIsBroken' name='shipIsBroken'></input><br /><br />

                    <input type='submit' value='Create new entry'></input>

                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New