import { Text } from "./Text";

export default {
  title: "Components/UI/Text",
  component: Text,
};

export const Default = () => {
  return (
    <Text 
      type="paragraph" 
      value="We provide  what you need to enjoy your holiday with family. Time to make another memorable moments." 
    />
  );
};
