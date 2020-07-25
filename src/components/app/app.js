import React from 'react';

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

const App = () => {

    const data = [
        {label: 'Going to learn React', important: false},
        {label: 'I am do not understand', important: true},
        {label: 'GG! Kill me...', important: false}
    
    ];

    return (
        <div className='app'>
                <Header/>
             <div className='search-panel d-flex'>
                <SearchPanel/>
                <Filter/>
            </div>
            <PostList posts ={data} />
            <AddItem/>
        </div>
    )
}

export default App;