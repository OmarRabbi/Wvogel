/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Partnershipcard = ({ img, title, description }) => {
  return (
    <>
      <Card className="w-full mx-auto bg-transparent text-center hover:bg-white">
        <CardHeader>
          <CardTitle className="flex justify-center items-center">
            <div className="bg-[#F3E0DE] h-20 w-20 rounded flex justify-center items-center">
              <img src={img} alt="" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-2xl font-bold leading-7">{title}</p>
        </CardContent>
        <CardFooter>
          <p className="w-full mx-auto text-foreground">{description}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Partnershipcard;
