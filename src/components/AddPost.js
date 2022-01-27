import React, { Component } from 'react'

class AddPost extends Component {
    render() {
        return (
            <div className='container'>
                <h1>
                    Postit
                </h1>
                <form>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title"></input>
                    </div>
                    <div>
                        <label>Content: </label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddPost