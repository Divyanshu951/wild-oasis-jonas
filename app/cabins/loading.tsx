import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Loader className="animate-spin" size={55} />
    </div>
  );
};

export default Loading;
