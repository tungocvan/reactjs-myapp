import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NoteApp.module.scss';
import Button from '~/components/Button';
import SearchBar from '~/components/SearchBar';

const cx = classNames.bind(styles);

function NoteApp() {
    const [active, setActive] = useState(false);
    const [notes, setNotes] = useState([]);

    const handleClick = () => {
        console.log('note');
        setNotes([...notes, { id: Math.floor(Math.random() * 100000), content: '' }]);
    };
    const handleDoubleClick = (noteId) => {
        console.log('handleDoubleClick:', noteId);
        setNotes(notes.filter((note) => note.id !== noteId));
    };
    return (
        <div className={cx('container')}>
            <h1 className={cx('heading')}>Note App</h1>
            <p className={cx('info-text')}>Double click on a note to remove it</p>
            <div className={cx('info-text')}>
                <SearchBar />
            </div>
            <div className={cx('app')} id="app">
                {notes.map((note) => {
                    return (
                        <div className={cx('note-info')}>
                            <p>{new Date().toISOString()}</p>
                            <textarea
                                key={note.id}
                                className={cx('note')}
                                placeholder="Empty Note"
                                defaultValue={note.content}
                            />
                            <Button rounded onClick={() => handleDoubleClick(note.id)}>
                                Xóa
                            </Button>
                        </div>
                    );
                })}
                <button className={cx('btn')} id="btn" onClick={handleClick}>
                    +
                </button>
            </div>
        </div>
    );
}

export default NoteApp;
