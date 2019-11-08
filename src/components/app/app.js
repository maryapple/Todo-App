import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import './app.css'
import ItemAddForm from '../item-add-form'

export default class App extends Component {

    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState ( ({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            
            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ]

            return{
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        // generate id
        const newItem = this.createTodoItem(text)

        // add element in array ?
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ]

            return {
                todoData: newArray
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            // 1. Update obj
            const oldItem = todoData[idx]
            const newItem = {...oldItem, 
                done: !oldItem.done
            }
            // 2. construct new array
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    onToggleImportant = (id) => {
        
        console.log('Toggle done', id)
    }

    render () {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex search-group">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm 
                    onItemAdded={ this.addItem } 
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
