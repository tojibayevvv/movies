import React from "react";
import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="">
      <div className="bg-[#080604] py-5 text-white">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex justify-between gap-16 items-center text-lg">
            <li>как купить?</li>
            <li>F.A.Q</li>
            <li>контакты</li>
          </ul>
          <div className="flex justify-between gap-5">
            <button className="border-2 border-white px-3 py-1 rounded-2xl">
              регистрация
            </button>
            <button className="bg-[#EC8F32] px-2 py-1 w-20 rounded-2xl">
              войти
            </button>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto bg-[url('/images/reklama.svg')] bg-cover bg-center flex justify-between items-center px-[100px] h-[600px]">
        <div className="text-white text-[62px] font-bold">
            <h1 className="">Книги, которые вам <br /> хочется слушать</h1>
        </div>
        <div>
            <button className="bg-[#EC8F32] text-white py-5 px-12 rounded-[32px]">Выбрать книгу</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
