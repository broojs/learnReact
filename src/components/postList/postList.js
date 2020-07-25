import React from 'react';

import PostlistItem from '../postListItem';

const PostList = ({posts}) =>{


    const elements = posts.map((item) => {
        return (
            <li className='list-group-item'>
              <PostlistItem 
              label={item.label} 
              important ={item.important}/>               
  
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