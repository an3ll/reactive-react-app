import React from 'react'
import {Get} from 'react-axios'

class BeerTable extends React.Component {

    render() {
        return (
            <Get url='http://localhost:8081/rest/beers'>
                {(error, response, isLoading, onReload) => {

                    if (error) {
                        return (
                            <div>Something bad happened: {error.message}
                                <button onClick={() => onReload({params: {reload: true}})}>Retry</button>
                            </div>)
                    }
                    else if (isLoading) {
                        return (
                            <div>Loading...</div>)
                    }
                    else if (response !== null) {

                        const content = response.data.map(item =>
                            <p>{item.name}</p>
                        )

                        return (
                            <div div className='message-list'>
                                <li>{content}</li>
                                <button onClick={() => onReload({params: {refresh: true}})}>Refresh</button>
                            </div>)
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
        )
    }
}

export default BeerTable