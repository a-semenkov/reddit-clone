import React, { ComponentProps, ElementType } from 'react';

interface IListProps {
  value: React.ReactNode;
  id: string;
  image?: string;
  link?: string | string[];
}

interface IListOwnProps<E extends ElementType = ElementType> {
  list: Array<IListProps>;
  renderItem: () => React.ReactNode;
  onClick?: (id: string) => void;
  As?: E;
}

type IListGenericProps<E extends ElementType> = IListOwnProps<E> &
  Omit<ComponentProps<E>, keyof IListOwnProps>;

const NOOP = () => {};

function GenericList<E extends ElementType = 'li'>({
  list,
  As,
  renderItem,
  onClick = NOOP,
  ...other
}: IListGenericProps<E>) {
  const TagName = As || 'li';

  return (
    <>
      {list.map((item) => (
        <TagName key={item.id} onClick={() => onClick(item.id)} {...other}>
          {renderItem()}
        </TagName>
      ))}
    </>
  );
}

export default GenericList;
