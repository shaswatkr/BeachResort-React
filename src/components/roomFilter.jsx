import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./title";

const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
    } = context;

    let types = getUnique(rooms, "type");
    types = ["all", ...types];
    types = types.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });

    let capacities = getUnique(rooms, "capacity");
    capacities = capacities.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />

            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type"> Room Type </label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity"> Guests </label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {capacities}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price"> Room Price Rs{price} </label>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="size"> Room Size </label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast"> Breakfast </label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets"> Pets </label>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default RoomFilter;
