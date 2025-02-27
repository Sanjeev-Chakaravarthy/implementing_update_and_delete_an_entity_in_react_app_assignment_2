import React from 'react';

const Item = ({ item, onDelete }) => {
    const handleDelete = () => {
        onDelete(item.id);
    };

    return (
        <div style={styles.itemContainer}>
            <span>{item.name}</span>
            <div>
                <button style={styles.editButton}>Edit</button>
                <button style={styles.deleteButton} onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

const styles = {
    itemContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
    },
    editButton: {
        marginRight: '10px',
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
    deleteButton: {
        padding: '5px 10px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
};

export default Item;