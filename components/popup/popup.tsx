type PropType = {
  children: React.ReactNode;
};

const Popup = ({ children }: PropType) => {
  return (
    <div
      id="contact-form"
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <div className="py-10 px-20 bg-white shadow-xl rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Popup;
