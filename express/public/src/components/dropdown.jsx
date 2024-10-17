import { useState } from "react";

const countryDropDown = [
  {
    url: "https://cdn.shopify.com/s/files/1/2337/7003/files/united_arab_emirates_-_16x16.svg?v=1667933442",
    title: "AED",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/2337/7003/files/india_-_16x16.svg?v=1667933431",
    title: "IND",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/2337/7003/files/united_states16x16.svg?v=1655194161",
    title: "USD",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/2337/7003/files/canada16x16.svg?v=1655194161",
    title: "CAD",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/2337/7003/files/united_kingdom_-_16x16.svg?v=1667933458",
    title: "GBP",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/2337/7003/files/pakistan16x16.svg?v=1655194161",
    title: "PKR",
  },
];

export default function dropDown() {
  return (
    <>
      <div className=" dropdown p-2 flex flex-col border bg-white absolute  overflow-y-scroll">
        <ul className="p-1 ">
          {countryDropDown.map((c, i) => (
            <li key={i} className="selectCountry flex flex-row gap-3">
              <img src={c.url} alt="" />
              <p className="countryName">{c.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
