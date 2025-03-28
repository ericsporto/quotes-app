type LoginCardProps = {
    children: React.ReactNode;
  };
  export const AuthCard = (props: LoginCardProps) => {
    return (
      <div className="flex flex-col py-10 sm:py-14 lg:py-18 px-6 lg:px-7 shadow-xs shadow-gray-500 w-full max-w-85 sm:max-w-105 lg:max-w-120 border border-gray-200 rounded-4xl bg-[#FEFEFF]/40">
        {props.children}
      </div>
    );
  };