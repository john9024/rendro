import { Card, Avatar } from "@material-tailwind/react";

export function DesigneCard({ img }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        size="xxl"
        className="h-full w-full shadow-lg shadow-gray-500/25"
      />
    </Card>
  );
}
export default DesigneCard;
