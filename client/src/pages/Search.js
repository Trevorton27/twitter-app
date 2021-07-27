import React from "react";
import Nav from "../Nav"
// import MockData from './MockData'


class Search extends React.Component {
    constructor() {
        super()
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        return ''
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>Search Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="searchBar">Search for a twitter username:</label>
                    <input
                        type="text"
                        placeholder="@"
                        name="searchBar"
                        class="form bg-light w-25"
                    ></input>
                    <button type="submit" class="btn btn-primary text-light">Submit</button>
                </form>

            </div>
        )
    }
}
export default Search