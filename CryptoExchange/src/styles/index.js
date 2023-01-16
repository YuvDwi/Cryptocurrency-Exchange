const headerStyles = {
  container: "header-container flex justify-between items-center w-full sm:py-10 py-6",
  headTitle: "header-title text-white font-poppins font-black text-5xl tracking-wide",
  subTitle: "header-subtitle text-dim-white font-poppins font-medium mt-3 text-base",
};

const exchangeStyles = {
  container: "exchange-container flex-1 flex justify-start items-center flex-col w-full mt-10",
  boxWrapper: "exchange-box-wrapper mt-10 w-full flex justify-center",
  box: "exchange-box relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl",
  action: "exchange-action w-full min-h-[400px] bg-site-black backdrop-blur-[4px] rounded-3xl shadow-card flex p-10",
};

const amountStyles = {
  container: "amount-container flex justify-between items-center flex-row w-full min-w-full bg-site-dim border-[1px] border-transparent hover:border-site-dim2 min-h-[96px] sm:p-8 p-4 rounded-[20px]",
  input: "amount-input w-full flex-1 bg-transparent outline-none font-poppins font-black text-2xl text-white",
  button: "amount-button flex flex-row items-center bg-site-dim2 py-2 px-4 rounded-xl font-poppins font-bold text-white",
  list: "amount-list absolute z-10 right-0 bg-site-black border-[1px] border-site-dim2 w-full mt-2 rounded-lg min-w-[170px] overflow-hidden",
  listItem: "amount-list-item font-poppins font-medium text-base text-white hover:text-dim-white px-5 py-3 hover:bg-site-dim2 cursor-pointer",
};

const loaderStyles = {
  container: "loader-container flex justify-center items-center flex-col w-full min-h-full",
  img: "loader-img w-56 h-56 object-contain",
  text: "loader-text font-poppins font-normal text-dim-white text-lg text-center mt-"
}