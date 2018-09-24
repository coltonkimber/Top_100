import React from 'react';

const styles = {
   
    pointer: { cursor: 'pointer' }
}

const Song = ({ id, complete, name, updateSong, deleteSong }) => (
    <div className="col s12">
        <div className="col m8">
            <div style={ complete ? styles.complete : {} } className="center">
                {name}
            </div>
        </div>
        <div className="col m2">
        <input
            id={`song-${id}`}
            type="checkbox"
            defaultChecked={complete}
            onClick={() => updateSong(id)}
            />
            <label htmlFor={`item-${id}`}>Delete?</label>
        </div>
        <div style={ styles.pointer } className="col m1" onClick={() => deleteSong(id)}>
            X
        </div>
    </div>
)

export default Song;