import React, { Component } from 'react'
import Shelf from "./Shelf"
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    render() {
        const shelves = [
            {
                "name": "currentlyReading",
                "title": "Currently Reading"
            },
            {
                "name": "wantToRead",
                "title": 'Want to Read'
            },
            {
                "name": "read",
                "title": "Read"
            }
        ]

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (
                            <Shelf
                                key={shelf.name}
                                title={shelf.title}
                                books={this.props.books.filter((book) => book.shelf === shelf.name)}
                                onUpdateShelf={this.props.onUpdateShelf}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search"
                    >Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks