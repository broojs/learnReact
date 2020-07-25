import React from 'react';

const AddItem = () =>{
    return(
        <form className='bottom-panel d-flex'>
            <input
            type='text'
            placeholder='О чём вы думаете сейчас?'
            className='form-conrol new-post-label'
            />
            <button type="button" className='btn btn-outline-secondary'>
                Добавить
            </button>
   
        </form>
    )
}

export default AddItem;