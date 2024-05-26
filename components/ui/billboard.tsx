import { Billboard as billboardType } from "@/types";

interface BillboardProps {
  data: billboardType;
}
export const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 xl:p-8 rounded-xl overflow-hidden ">
      <div
        className="w-full h-64 xl:h-[55vh] bg-cover bg-center bg-no-repeat relative overflow-hidden rounded-xl shadow-xl"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="w-full h-full flex flex-col text-center justify-center items-center gap-y-8">
          <div className="font-extrabold text-3xl sm:text-5xl xl:text-6xl sm:max-w-xl max-w-xs text-white">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};
