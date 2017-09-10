import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from "./SearchBooks"
import ListBooks from "./ListBooks"
import * as BooksAPI from "./BooksAPI"

class BooksApp extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    getBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    updateShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {
            book.shelf = newShelf
            this.getBooks()
        })
    }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks
                books={this.state.books}
                onUpdateShelf={this.updateShelf}
            />
        )}/>
          <Route path="/search" render={() => (
              <SearchBooks
                  books={this.state.books}
                  onUpdateShelf={this.updateShelf}
                  onUpdateQuery={this.updateQuery}
              />
          )}/>
      </div>
    )
  }
}

export default BooksApp