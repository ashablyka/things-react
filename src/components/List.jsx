import ListItem from './ListItem';
import './List.css';

export default function List(props) {
  const onEditItem = (id, name) => {
    props.onEditItem(id, name);
  }

  const onDeleteItem = (id) => {
    props.onDeleteItem(id);
  }

  return (
    <ul className="list">
      {
        props.things.map((thing) => {
          return <ListItem
            key={thing.id}
            id={thing.id}
            name={thing.name}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
          />;
        })
      }
    </ul >
  );
}
