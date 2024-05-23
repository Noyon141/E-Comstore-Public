export const Footer = () => {
  return (
    <div className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-xs md:text-base text-center text-black">
          &copy; {new Date().getFullYear()} E-comstore, Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
