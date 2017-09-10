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

    updateShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {
            book.shelf = newShelf
            this.setState(state => ({
                books: state.books
                    .filter(b => b.id !== book.id) // remove book from a shelf
                    .concat([ book ]) // add book to a shelf
            }))
        })
    }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks
                onUpdateShelf={this.updateShelf}
            />
        )}/>
          <Route path="/search" render={() => (
              <SearchBooks
                  onUpdateShelf={this.updateShelf}
              />
          )}/>
      </div>
    )
  }
}

export default BooksApp