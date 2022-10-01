const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='new log' group='logs'>

                <h1>New Page</h1>
                <form action='/logs' method='POST'>

                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' name='title'></input>

                    <label htmlFor='entry'>Entry:</label>
                    <input type='textarea' id='entry' name='entry'></input>

                    <label htmlFor='shipIsBroken'>Ship is broken:</label>
                    <input type='checkbox' id='shipIsBroken' name='shipIsBroken'></input>

                    <input type='submit' value='Create new entry'></input>

                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New