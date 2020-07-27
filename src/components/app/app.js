import React, {Component} from 'react';

import Header from '../header';
import SearchPanel from '../searchPanel';
import Filter from '../filter';
import PostList from '../postList';
import AddItem from '../addItem';

import '../app/app.css'
import '../addItem/post-add-form.css';
import '../filter/post-status-filter.css';
import '../header/app-header.css';
import '../postList/post-list.css';
import '../postListItem/post-list-item.css';
import '../searchPanel/search-panel.css';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: 'Тут могут быть твои мысли', important: false, like: false, id: 1} 
            ],

            term: '',
            filter: 'all'

        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1) ]
       
            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1) ]
       
            return {
                data: newArr
            }
        })
    }

    searchPost(items, term){
        if (term.length === 0 ) {
            return items
        }

        return items.filter((item) =>{
            return item.label.indexOf(term) > -1
        });
    }

    onUpdateSearch(term){
        this.setState({term});
    }

    filterPOst(items, filter){
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

        render() {
            const {data, term, filter} = this.state;
            const liked = data.filter(item => item.like).length;
            const allPosts = data.length;

            const visiblePosts = this.filterPOst(this.searchPost(data, term), filter);

            return (
                <div className='app'>
                        <Header
                        liked = {liked}
                        allPosts = {allPosts}/>
                     <div className='search-panel d-flex'>
                        <SearchPanel
                        onUpdateSearch ={this.onUpdateSearch}/>
                        <Filter
                        filter = {filter}
                        onFilterSelect={this.onFilterSelect}/>
                    </div>
                    <PostList 
                    posts ={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                    <AddItem
                    onAdd={this.addItem}/>
                </div>
            )
        }                  
}