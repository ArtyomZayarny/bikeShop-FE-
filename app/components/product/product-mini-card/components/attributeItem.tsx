import { DropDown } from "../../../common/dropdown";
import { Title } from "../../../common/title";
import { ColorList } from "../../../filter/color-list";
import { filterBlock } from "../../../types";

type Props = {
  attr: filterBlock;
};
export const AttributeItem = ({ attr }: Props) => {
  const renderAttributeItem = () => {
    switch (attr.type) {
      case "color":
        return (
          <>
            <ColorList colors={attr.items!} />
          </>
        );
      case "size":
        return (
          <>
            <DropDown options={attr.items!} />
          </>
        );
    }
  };
  return (
    <li className="flex mb-4 flex-col">
      <Title type={6} styles="text-sm font-normal mb-2">
        {attr.label}
      </Title>
      {renderAttributeItem()}
    </li>
  );
};
