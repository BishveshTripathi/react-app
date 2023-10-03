import React, { useState } from "react";
import Products from "./db.json";
import Pagination from "./pagination";

const Cards = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="card">
      {Products.slice(page * 6 - 6, page * 6).map((data) => {
        return (
          <div className="car_card">
            <img src={data.image} alt={data.title} />
            <div className="name_model">
              <span className="span_name">{data.title}</span>
              <span className="span_model">{data.model}</span>
            </div>
            <div className="car_details">
              <div className="card_details">
                <section class="section_1">
                  <span class="material-symbols-outlined">group</span>
                  <span className="people">{data.seating} People</span>
                </section>
                <section className="section_2">
                  <span class="material-symbols-outlined">
                    local_gas_station
                  </span>
                  <span className="hybrid">{data.engine}</span>
                </section>
              </div>
              <div className="card_details">
                <section className="section_3">
                  <span class="material-symbols-outlined">speed</span>
                  <span className="people">{data.milage} km/1-litre</span>
                </section>
                <section className="section_4">
                  <span class="material-symbols-outlined">
                    auto_transmission
                  </span>
                  <span className="hybrid">{data.transmission}</span>
                </section>
              </div>
            </div>
            <div className="line">
              <hr></hr>
            </div>
            <div className="card_footer">
              <div className="rents">
                <strong>${data.charge}</strong>/month
              </div>
              <div className="buttons">
                <div className="heart_btn">
                  <span class="material-symbols-outlined">favorite</span>
                </div>
                <div className="rent_btn">Rent Now</div>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination Products={Products} page={page} setPage={setPage} />
    </div>
  );
};

export default Cards;
