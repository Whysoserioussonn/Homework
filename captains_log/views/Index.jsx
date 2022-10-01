const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

class Index extends React.Component {

    render() {

        
        const { logs } = this.props

        // console.log(this.props.logs)

        return (
            <DefaultLayout title='All Logs' group='logs'>
                <h1>Logs Index Page</h1>
                <ul id='all-index'>
                    {logs.map((log) => {
                        return (
                            <li key={log._id}>
                                The title of the log is <a href={`/logs/${log._id}`}>{ log.title }</a>.
                                <button>
                                    <a href={`/logs/${log._id}/edit`}>Edit</a>
                                </button>
                                <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                    <input type='submit' value='Delete'></input>
                                </form>
                            </li>
                        )
                    })}
                </ul>
                {/* <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete'></input>
                </form> */}

                <nav>
                    <a href='/logs/new'>Create a new log entry</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index