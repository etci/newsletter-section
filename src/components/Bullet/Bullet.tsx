import { FC } from 'react';
import styles from './List.module.css';

interface Props {
  texts: Array<string>;
  iconPrefix?: React.ReactNode;
}

interface ItemProps {
  text: string;
  icon?: React.ReactNode;
}

const List: FC<Props> = ({ texts, iconPrefix }) => {
  return (
    <ul className={styles.list}>
      {texts.map((text, index) => (
        <ListItem key={index} text={text} icon={iconPrefix} />
      ))}
    </ul>
  );
};

const ListItem: FC<ItemProps> = ({ text, icon = null }) => {
  return (
    <li className={styles.list__item}>
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default List;
