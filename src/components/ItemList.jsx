import React from 'react';
import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
    return (
        <div style={styles.listContainer}>
            {items.length === 0 ? (
                <p>No items available.</p>
            ) : (
                items.map((item) => (
                    <Item key={item.id} item={item} onDelete={onDelete} />
                ))
            )}
        </div>
    );
};

const styles = {
    listContainer: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
};

export default ItemList;