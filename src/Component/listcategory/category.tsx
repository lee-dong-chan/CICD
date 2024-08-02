import Item, { IItem } from "./item";

interface IProps {
  list: IItem[];
  isEnd?: Boolean;
}

const ListCategory = ({ list, isEnd = false }: IProps) => {
  return (
    <div className=" h-[100%] max-w-[65rem] min-w-[65rem] flex-1 flex items-center justify-evenly ">
      <span className="me-3 w-[2rem] rounded border">
        <img
          className="h-[100%] w-[100%]"
          src="/imgs/listsearch.png"
          alt="img"
        ></img>
      </span>
      {list.map((item: IItem, idx: number) => (
        <Item
          key={idx}
          item={item}
          isEnd={idx === list.length - 1 ? (isEnd = true) : isEnd}
        />
      ))}
    </div>
  );
};

export default ListCategory;
