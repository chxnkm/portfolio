import { Button } from "@/components/ui/button";

const BackButton = () => {
  const handleClick = () => {
    history.back();
  };

  return (
    <Button onClick={handleClick}>
      &lt; Back
    </Button>
  );
};

export default BackButton;