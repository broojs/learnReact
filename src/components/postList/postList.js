import React from 'react';

import PostlistItem from '../postListItem';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) =>{

    const elements = posts.map((item) => {
        const  {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
              <PostlistItem 
              {...itemProps}
              onDelete={() => onDelete(id)}
              onToggleImportant={() => onToggleImportant(id)}
              onToggleLiked={() => onToggleLiked(id)}/>               
  
            </li>
        )
    })

    return(

            <ul className='app-list list-group'>
                {elements}
            </ul>
    )
}

export default PostList;